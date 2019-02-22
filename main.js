function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e){
    //playing the audio corresponding to the key
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

    //changing the style of the div corresponding to the key
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    key.classList.add('playing');

    //removing the style after the transition
    const keys = document.querySelectorAll('.key')    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};

document.addEventListener('keydown', playSound);
