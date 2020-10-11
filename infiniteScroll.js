const container = document.querySelector('.container');
const url = 'https://api.adorable.io/avatars/';



const getRandomNumber = () => {
    return Math.floor(Math.random()*300);
}

function loadImages(){
    let count=12;
    while(count--){
        const img = document.createElement('img');
        img.src=`${url}${getRandomNumber()}`;
        container.appendChild(img);
    }
}

loadImages();

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})