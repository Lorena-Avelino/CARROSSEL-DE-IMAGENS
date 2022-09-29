let disp = document.querySelectorAll(".container")
let cor = document.querySelectorAll(".container .informacao a")

let i = 0 //index do slide atual / visivel

const qtdSlides = disp.length; 

disp[1].style.background = "url('src/images/imagem2.png')";
cor[1].style.color = "#D9DD10" 
cor[2].style.color = "#A63A17" 
cor[3].style.color = "#10ACDD" 
disp[2].style.background = "url('src/images/imagem3.png')"; 
disp[3].style.background = "url('src/images/imagem4.png')"; 

function btnPrev(){
    disp[i].classList.remove("visivel")
    i--
    disp[i].classList.add("visivel")
};

function btnNext(){
    console.log("aqui")
    disp[i].classList.remove("visivel")
    console.log(i)
    i++
    console.log(i)
    disp[i].classList.add("visivel")
};
