const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const sounds = {};
let musicSourceNode = null;

async function loadSound(name, url, isMusic = false) {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        sounds[name] = { buffer: audioBuffer, isMusic: isMusic };
    } catch (error) {
        console.error(`Error loading sound: ${name}`, error);
    }
}

export function playSound(name) {
    if (sounds[name] && audioContext.state !== 'suspended' && !sounds[name].isMusic) {
        const source = audioContext.createBufferSource();
        source.buffer = sounds[name].buffer;
        source.connect(audioContext.destination);
        source.start(0);
    }
     // Resume context on first user gesture
    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            playMusic('background');
        });
    }
}

export function playMusic(name) {
    if (musicSourceNode) {
        musicSourceNode.stop();
    }
    if (sounds[name] && sounds[name].isMusic) {
         if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        musicSourceNode = audioContext.createBufferSource();
        musicSourceNode.buffer = sounds[name].buffer;
        musicSourceNode.loop = true;
        musicSourceNode.connect(audioContext.destination);
        musicSourceNode.start(0);
    }
}

export function stopMusic() {
    if (musicSourceNode) {
        musicSourceNode.stop();
        musicSourceNode = null;
    }
}

// Preload all sounds
loadSound('correct', './correct.mp3');
loadSound('incorrect', './incorrect.mp3');
loadSound('click', './click.mp3');
loadSound('background', './background_music.mp3', true);