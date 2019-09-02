

// Play drum by keyboard press

window.addEventListener('keydown',function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //
    console.log(audio); // check selected audio element
    if(!audio) return; // functions stops from running
    audio.currentTime = 0; // allows us to repeat the same button straightaway
    audio.play();
    console.log(key); // check key element in console
    key.classList.add('playing');


        
});







// Play music by mouse click
