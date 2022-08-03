window.addEventListener('keydown',(e)=>{
    const aud = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!aud) return;    //if it isn't one of the chosen one it(func) will stop
    aud.currentTime = 0; //it'll rewind the audio
    aud.play();

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    function removeTransition(e){
        if(e.propertyName != 'transform') return;
        this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(element=>{
        element.addEventListener('transitionend',removeTransition);
    });
});

clicker();
function clicker()
{
    let keyClicked = document.querySelectorAll('.key');

    for(let i=0;i<keyClicked.length;i++)
    {
        keyClicked[i].addEventListener('click',()=>{
            const aud = document.querySelector(`audio[data-key="${keyClicked[i].id}"]`);
            if(!aud) return;    //if it isn't one of the chosen one it(func) will stop
            aud.currentTime = 0; //it'll rewind the audio
            aud.play();

            const key = document.querySelector(`div[data-key="${keyClicked[i].id}"]`);
            key.classList.add('playing');

            function removeTransition(e){
                //if(e.propertyName != 'transform') return;
                this.classList.remove('playing');
            }
            keyClicked[i].addEventListener('transitionend',removeTransition);
        });
    }
}