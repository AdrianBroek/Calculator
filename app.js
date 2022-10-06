let input = document.querySelector('.liczydelko');
let butt = document.querySelectorAll('.guzik');
const container = document.querySelector('.container');
const ksztalt = document.querySelector('.ksztalt');
const liczydlo = document.querySelector('.liczydlo');
const liczydelko = document.querySelector('.liczydelko');
const resBac = document.querySelector('.resBac');
const resBtn = document.querySelector('.resBtn');
const bacBtn = document.querySelector('.bacBtn');
const reset = document.querySelector('.reset');
const wynik = document.querySelector('.equal');
const przycisk = document.querySelectorAll('.guzik');
const del = document.querySelector('.bacBtn');
const clearBtn = document.querySelector('.resBtn');
const currentDzialanie = document.querySelectorAll('.curr');
const squareRoot = document.querySelector('.sqrt');
const power = document.querySelector('.pow');
const sign = document.querySelector('.podpis');
let range = document.querySelector('.rangeInput');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
let rangeValue = range.value;

range.addEventListener('change', theme);

const pageTl = gsap.timeline({
    defaults: { duration: 3, ease: "power1" }
});
pageTl.fromTo(sign, {y: '-180%'}, {y: '50%'});
pageTl.fromTo(sign, {opacity: '1'}, {opacity: '0'});

squareRoot.addEventListener('click', ()=>{
    let x = Math.sqrt(input.value);
    input.value = x;
});

butt.forEach((button) => {
    button.addEventListener('click', (e) => {
        getP(e); 
    })
});

clearBtn.addEventListener('click', () => {
    input.value = '';
})

del.addEventListener('click', ()=>{
    let number = input.value;
    var output = number.toString();
    let numberAfter = output.substring(0, output.length - 1);
    input.value=numberAfter;
})

wynik.addEventListener('click', () => {
    liczenie();
})

function getP(e){
        let wart = e.target.innerText;
        input.value += wart;
}

function liczenie(){
    let x = input.value;
    let y = eval(x);
    //console.log(y);
    input.value= y;
}

function theme(){
    let rangeValue = range.value;
   
    if(rangeValue == 1){
        moon.classList.add('active');
        sun.classList.remove('active');
        container.classList.remove('active');
        ksztalt.classList.remove('active');
        liczydlo.classList.remove('active');
        liczydelko.classList.remove('active');
        resBac.classList.remove('active');
        resBtn.classList.remove('active');
        bacBtn.classList.remove('active');
        wynik.classList.remove('active');
        przycisk.forEach(button =>{
            button.classList.remove('active');
        })
    }else{
        moon.classList.remove('active');
        sun.classList.add('active');
        container.classList.add('active');
        ksztalt.classList.add('active');
        liczydlo.classList.add('active');
        liczydelko.classList.add('active');
        resBac.classList.add('active');
        resBtn.classList.add('active');
        bacBtn.classList.add('active');
        wynik.classList.add('active');
        przycisk.forEach(button =>{
            button.classList.add('active');
        })
    }
}