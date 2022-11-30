let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let body = document.querySelector('body');
let btn = document.querySelector('.btn');

function changeBackgroundColor(){
    let rRangeValue = rRange.value;
    let gRangeValue = gRange.value;
    let bRangeValue = bRange.value;
    body.style.backgroundColor= 'rgb(' + rRangeValue + ',' + gRangeValue + ',' + bRangeValue + ')';
}

function randomNumber(){
    let randomNumber1 = Math.floor(Math.random() * 256);
   let randomNumber2 = Math.floor(Math.random() * 256);
   let randomNumber3 = Math.floor(Math.random() * 256);
   let colors = [randomNumber1 , randomNumber2 , randomNumber3];
   rRange.value = colors[0];
   gRange.value = colors [1];
   bRange.value = colors[2];
   
}

rRange.addEventListener('input' , function()
{changeBackgroundColor(); })

gRange.addEventListener('input',function()
{   changeBackgroundColor();})

bRange.addEventListener('input' , function()
{ changeBackgroundColor();});

btn.addEventListener('click' , function()
{
    randomNumber();
    changeBackgroundColor();

});
   

