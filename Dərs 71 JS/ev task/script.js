let myButton = document.querySelector('button');

myButton.addEventListener('click', function(){
    window.location.reload();
});



let h1 = document.querySelector('h1');
let defaultText = h1.innerText;

h1.addEventListener('click', function(){
    if(h1.innerText===defaultText){
        h1.innerText = "BMW";
    }else{
        h1.innerText = defaultText;
    }
});

let myBtn = document.querySelector('h2');
let cavab = "Lamborghini";

myBtn.addEventListener('click', function(){
    let sual = prompt("Tunarın ən yaxın dostunun xoşladığı maşın nədir?")

    if(sual===cavab){
        window.location.href='./secret.html';
    }else{
        alert("SƏHV CAVAB VERDİN , düzgün fikirləş!");
    }
});


let h4 = document.querySelectorAll('h4');
let def = h4.innerText;
h4.forEach((deyisen)=>{
    deyisen.addEventListener('click', function(event){
        event.target.style.backgroundColor = "blue";
        event.target.innerText = "Secildi";
    })
});
