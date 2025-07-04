let paragrafo = document.querySelector("#para1");

paragrafo.addEventListener("mouseover",Destacar);


function Destacar(){
    paragrafo.style.background='pink';


}

let paragrafo2 = document.querySelector("#para2");

paragrafo2.addEventListener("mouseover", Destacar2);

function Destacar2(){
    paragrafo2.style.background='pink';
}


let  lista = document.querySelector("#lista");

lista.addEventListener("mouseover", Destacarlista);

function Destacarlista(){
    lista.style.background='pink';
}
