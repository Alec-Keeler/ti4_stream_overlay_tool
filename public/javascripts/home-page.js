window.addEventListener('DOMContentLoaded', event => {
    const getKeyBtn = document.getElementById('get-key-btn');
    const keyDisplay = document.getElementById('key-display');
    const ttsDisplay = document.getElementById('tts-display')
    getKeyBtn.addEventListener('click', e => {
        let gameKey = '';
        for (let i = 0; i < 19; i++) {
            gameKey += Math.floor(Math.random() * 10);
        }
        keyDisplay.innerHTML = `YOUR KEY: ${gameKey}`;
        ttsDisplay.innerHTML = `TTS COMMAND: !gamedata ${gameKey} 30`;
    })
})