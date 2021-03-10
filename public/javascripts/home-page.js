window.addEventListener('DOMContentLoaded', event => {
    const getKeyBtn = document.getElementById('get-key-btn');
    const keyDisplay = document.getElementById('key-display');
    const ttsDisplay = document.getElementById('tts-display')
    getKeyBtn.addEventListener('click', e => {
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'M'];
        let gameKey = '';
        for (let i = 0; i < 6; i++) {
            gameKey += Math.floor(Math.random() * 10);
        }
        let alphaNum1 = Math.floor(Math.random() * 10);
        let alphaNum2 = Math.floor(Math.random() * 10);
        gameKey += alphabet[alphaNum1] + alphabet[alphaNum2];
        keyDisplay.innerHTML = `YOUR KEY: ${gameKey}`;
        ttsDisplay.innerHTML = `TTS COMMAND: !gamedata ${gameKey}`;
    })
})