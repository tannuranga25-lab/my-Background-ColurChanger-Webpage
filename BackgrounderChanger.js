let btn = document.getElementById('btn')
let p = document.getElementById('p')

function backgroundchanger(){
let color = '#';
let letters = "0123456789ABCDEF";
for(let i=0; i < 6;i++){

color += letters[Math.floor(Math.random()*16)];
 p.innerText = color



}

return color;

}

btn.addEventListener("click",() => {
    document.body.style.backgroundColor = backgroundchanger();
    
});