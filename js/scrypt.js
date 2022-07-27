let move = 0;
const line = document.querySelector('.slider-line')
// line.style.transition = 'all ease 1s';
document.querySelector('.btn2').addEventListener('click', event => {
    
    move = move + 100;
    if(move > 300){
        move = 0    
    }
    line.style.right = move + '%'
    // line.style.transition = 'all ease 1s';
})
document.querySelector('.btn1').addEventListener('click', event => {
    
    move = move - 100;
    if(move < 0){
        move = 300
    }
    line.style.right = move + '%'
    // line.style.transition = 'all ease 1s';
})
