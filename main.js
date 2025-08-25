import { levels } from 'questions';
import { playSound, playMusic, stopMusic } from 'audio';

const gameContainer = document.getElementById('game-container');

let gameState = {
    playerName: '',
    playerGender: null, // 'boy' or 'girl'
    coins: 0,
    highestLevelUnlocked: 1,
    completedLevels: [],
    currentLevelId: null,
    currentQuestionIndex: 0,
    currentMistakes: 0,
};

function saveState() {
    localStorage.setItem('mundodeletras_gamestate', JSON.stringify(gameState));
}

function loadState() {
    const savedState = localStorage.getItem('mundodeletras_gamestate');
    if (savedState) {
        // Merge saved state with default state to prevent errors if new properties are added
        const loadedState = JSON.parse(savedState);
        gameState = { ...gameState, ...loadedState };
    }
}

function getAvatar() {
    return gameState.playerGender === 'boy' ? 'batman_avatar.png' : 'peach_avatar.png';
}

function renderStartScreen() {
    gameContainer.innerHTML = `
        <div id="start-screen" class="screen">
            <h1>Mundo de Letras</h1>
            <p>Escribe tu nombre para empezar tu aventura:</p>
            <input type="text" id="player-name-input" class="pixel-input" placeholder="Tu nombre aquí..." autocomplete="off">
            <p>Selecciona tu avatar:</p>
            <div id="avatar-selection">
                <div class="avatar-option" data-gender="boy">
                    <img src="batman_avatar.png" alt="Avatar Niño">
                    <span>Niño</span>
                </div>
                <div class="avatar-option" data-gender="girl">
                    <img src="peach_avatar.png" alt="Avatar Niña">
                    <span>Niña</span>
                </div>
            </div>
            <button id="start-game-button" class="pixel-button disabled">Empezar</button>
        </div>
    `;

    const startButton = document.getElementById('start-game-button');
    const nameInput = document.getElementById('player-name-input');
    const avatarOptions = document.querySelectorAll('.avatar-option');

    function checkCanStart() {
        const name = nameInput.value.trim();
        const genderSelected = document.querySelector('.avatar-option.selected');
        if (name.length > 0 && genderSelected) {
            startButton.classList.remove('disabled');
        } else {
            startButton.classList.add('disabled');
        }
    }

    avatarOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const currentOption = e.currentTarget;
            playSound('click');
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            currentOption.classList.add('selected');
            gameState.playerGender = currentOption.dataset.gender;
            checkCanStart();
        });
    });

    nameInput.addEventListener('input', checkCanStart);
    nameInput.addEventListener('keyup', checkCanStart);

    startButton.addEventListener('click', () => {
        if (startButton.classList.contains('disabled')) return;

        gameState.playerName = nameInput.value.trim();
        saveState();
        playSound('click');
        playMusic('background');
        renderLevelSelect();
    });
}

function renderLevelSelect() {
    const levelButtons = levels.map(level => {
        const isUnlocked = level.id <= gameState.highestLevelUnlocked;
        const isCompleted = gameState.completedLevels.includes(level.id);
        let buttonClass = 'pixel-button';
        if (!isUnlocked) buttonClass += ' disabled';
        if (isCompleted) buttonClass += ' completed';

        return `
            <div class="level-card">
                 <button class="${buttonClass}" data-level-id="${level.id}">
                    Nivel ${level.id}: ${level.name} ${isCompleted ? '✓' : ''}
                </button>
                ${!isUnlocked ? `
                    <div class="lock-overlay">
                        <span>🔒</span>
                        <p>Completa el nivel anterior</p>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');

    gameContainer.innerHTML = `
        <div id="level-select-screen" class="screen">
            <div id="player-info">
                <div class="player-avatar">
                    <img src="${getAvatar()}" alt="Player Avatar">
                    <span>${gameState.playerName}</span>
                </div>
                <div class="coin-display">
                    <img src="coin.png" alt="Moneda">
                    <span id="coin-count">${gameState.coins}</span>
                </div>
            </div>
            <h2>Selecciona un Nivel</h2>
            <div id="level-select-grid">
                ${levelButtons}
            </div>
             <div id="game-actions">
                <button id="restart-game-btn" class="pixel-button">Reiniciar Juego</button>
                <button id="exit-game-btn" class="pixel-button">Salir del Juego</button>
            </div>
        </div>
    `;

    document.querySelectorAll('.pixel-button[data-level-id]').forEach(button => {
        if (!button.classList.contains('disabled')) {
            button.addEventListener('click', () => {
                const levelId = parseInt(button.dataset.levelId);
                gameState.currentLevelId = levelId;
                gameState.currentQuestionIndex = 0;
                gameState.currentMistakes = 0; // Reset mistakes for the new level
                playSound('click');
                renderGameScreen();
            });
        }
    });

    document.getElementById('restart-game-btn').addEventListener('click', () => {
        playSound('click');
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
            localStorage.removeItem('mundodeletras_gamestate');
            location.reload();
        }
    });

    document.getElementById('exit-game-btn').addEventListener('click', () => {
        playSound('click');
        stopMusic();
        gameContainer.innerHTML = `
            <div class="screen">
                <h1>¡Gracias por jugar!</h1>
                <p>Puedes cerrar esta pestaña.</p>
            </div>
        `;
        // Note: window.close() may not work in all browsers for security reasons.
        // This provides a clear end-screen for the user.
        try {
            window.close();
        } catch (e) {
            console.log("window.close() no fue permitido por el navegador.");
        }
    });
}

function renderGameScreen() {
    const level = levels.find(l => l.id === gameState.currentLevelId);
    if (!level) {
        console.error("Level not found:", gameState.currentLevelId);
        renderLevelSelect();
        return;
    }
    const question = level.questions[gameState.currentQuestionIndex];
    if (!question) {
        console.error("Question not found:", gameState.currentLevelId, gameState.currentQuestionIndex);
        levelComplete(); // Probably finished the level
        return;
    }
    const progress = ((gameState.currentQuestionIndex) / level.questions.length) * 100;

    const optionsHtml = question.options.map((option, index) =>
        `<button class="pixel-button option-button" data-option-index="${index}">${option}</button>`
    ).join('');
    
    const livesHtml = '❤️'.repeat(3 - gameState.currentMistakes) + '🖤'.repeat(gameState.currentMistakes);

    gameContainer.innerHTML = `
        <div id="game-screen" class="screen">
             <div id="player-info">
                <div class="player-avatar">
                    <img src="${getAvatar()}" alt="Player Avatar">
                    <span>Nivel: ${level.name}</span>
                </div>
                 <div class="lives-display">
                    Vidas: ${livesHtml}
                </div>
                <div class="coin-display">
                    <img src="coin.png" alt="Moneda">
                    <span id="coin-count">${gameState.coins}</span>
                </div>
            </div>
            <div id="progress-bar-container"><div id="progress-bar" style="width: ${progress}%"></div></div>
            <div id="question-container">
                <p>${question.text}</p>
            </div>
            <div id="options-container">
                ${optionsHtml}
            </div>
            <div id="feedback-container"></div>
            <button id="back-to-levels" class="pixel-button hidden">Volver a Niveles</button>
        </div>
    `;

    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', (e) => {
            checkAnswer(parseInt(e.target.dataset.optionIndex));
        });
    });
    
    document.getElementById('back-to-levels').addEventListener('click', () => {
        playSound('click');
        renderLevelSelect();
    });
}

function checkAnswer(selectedIndex) {
    const level = levels.find(l => l.id === gameState.currentLevelId);
    const question = level.questions[gameState.currentQuestionIndex];
    const feedbackContainer = document.getElementById('feedback-container');
    
    document.querySelectorAll('.option-button').forEach(b => b.classList.add('disabled'));

    if (selectedIndex === question.correctAnswer) {
        // Correct answer
        gameState.coins += 10;
        playSound('correct');
        feedbackContainer.textContent = '¡Correcto! ¡+10 monedas!';
        feedbackContainer.className = 'correct';
    } else {
        // Incorrect answer
        gameState.currentMistakes++;
        playSound('incorrect');
        const correctOptionText = question.options[question.correctAnswer];
        feedbackContainer.innerHTML = `¡Incorrecto! La respuesta correcta era: <br><strong>"${correctOptionText}"</strong>`;
        feedbackContainer.className = 'incorrect';
    }
    
    // Update UI for coins and lives
    const coinCountEl = document.getElementById('coin-count');
    if (coinCountEl) coinCountEl.textContent = gameState.coins;

    const livesDisplayEl = document.querySelector('.lives-display');
    if(livesDisplayEl) {
        const livesHtml = '❤️'.repeat(3 - gameState.currentMistakes) + '🖤'.repeat(gameState.currentMistakes);
        livesDisplayEl.innerHTML = `Vidas: ${livesHtml}`;
    }

    gameState.currentQuestionIndex++;
    
    setTimeout(() => {
        if (gameState.currentMistakes >= 3) {
            gameOver();
            return;
        }

        if (gameState.currentQuestionIndex < level.questions.length) {
            renderGameScreen();
        } else {
            levelComplete();
        }
    }, 2500);
}

function gameOver() {
    playSound('incorrect');
    gameContainer.innerHTML = `
        <div id="game-over-screen" class="screen">
            <h1>Fin del Juego</h1>
            <p>¡Te has quedado sin vidas!</p>
            <p>No te rindas, ¡inténtalo de nuevo!</p>
            <div id="game-over-buttons">
                 <button id="retry-level" class="pixel-button">Reintentar Nivel</button>
                 <button id="return-to-menu" class="pixel-button">Volver a Niveles</button>
            </div>
        </div>
    `;
    
    document.getElementById('retry-level').addEventListener('click', () => {
        playSound('click');
        gameState.currentQuestionIndex = 0;
        gameState.currentMistakes = 0;
        renderGameScreen();
    });
    
    document.getElementById('return-to-menu').addEventListener('click', () => {
        playSound('click');
        renderLevelSelect();
    });
}

function levelComplete() {
    const currentLevelId = gameState.currentLevelId;
    if (!gameState.completedLevels.includes(currentLevelId)) {
        gameState.completedLevels.push(currentLevelId);
    }
    
    // Unlock next level if this was the highest level completed
    if (currentLevelId === gameState.highestLevelUnlocked && currentLevelId < levels.length) {
        gameState.highestLevelUnlocked++;
    }
    
    // Check if all levels are completed
    if (gameState.completedLevels.length === levels.length) {
        saveState();
        setTimeout(renderGameCompleteScreen, 1500);
        return;
    }

    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = '<h2>¡Nivel Completado!</h2>';
    feedbackContainer.className = 'correct';
    
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) optionsContainer.innerHTML = '';
    
    if (currentLevelId < levels.length) {
         feedbackContainer.innerHTML += '<p>¡Has desbloqueado el siguiente nivel!</p>';
    }

    saveState();
    const backButton = document.getElementById('back-to-levels');
    if(backButton) backButton.classList.remove('hidden');
}

function renderGameCompleteScreen() {
    gameContainer.innerHTML = `
        <div id="game-complete-screen" class="screen">
            <h1>¡FELICIDADES, ${gameState.playerName}!</h1>
            <img src="celebration.png" alt="Celebración" id="celebration-img">
            <h2>¡Has completado todos los niveles!</h2>
            <p>¡Eres un maestro de las letras!</p>
            <p>Monedas Finales: ${gameState.coins}</p>
            <button id="restart-game" class="pixel-button">Jugar de Nuevo</button>
        </div>
    `;

    document.getElementById('restart-game').addEventListener('click', () => {
        playSound('click');
        // Reset game state except for name and gender
        const name = gameState.playerName;
        const gender = gameState.playerGender;
        gameState = {
            playerName: name,
            playerGender: gender,
            coins: 0,
            highestLevelUnlocked: 1,
            completedLevels: [],
            currentLevelId: null,
            currentQuestionIndex: 0,
            currentMistakes: 0,
        };
        saveState();
        renderLevelSelect();
    });
}

function init() {
    loadState();
    if (gameState.playerName && gameState.playerGender) {
        renderLevelSelect();
    } else {
        renderStartScreen();
    }
}

init();
