
document.getElementById("bolaDeCristal").onclick = function(){


let typedText = document.getElementById("input").value;
let inicio = document.getElementById("pergunta");
inicio.textContent.inn = typedText;



    let sorte = Math.floor(Math.random() * 13)+ 1;
    let respostas = document.getElementById("bolaDeCristal");

    if (typedText === ""){

        alert("Digite sua pergunta!!!!!!");
    
    }if( typedText != ''){
    
    switch(sorte){
            case 1: 
            respostas.textContent = "Sim!";
                break;
            case 2:     
            respostas.textContent = "Não!";
                break;
            case 3: 
            respostas.textContent = "Talvez.";
                break;
            case 4:     
            respostas.textContent = "É possível.";
                break;
    
            case 5: 
            respostas.textContent = "Creio que não.";
                break;
            case 6:     
            respostas.textContent = "Sinto que sim.";
                break;
            case 7: 
            respostas.textContent = "Nunca.";
                break;
            case 8:     
            respostas.textContent = "Os espiritos dizem que sim.";
                break;
            case 9: 
                fate.textContent = "Nunca será.";
                break;
            case 10:     
            respostas.textContent = "Mais tarde saberá, gafanhoto.";
                break;
            case 11: 
            respostas.textContent = "Não posso responder isso!";
                break;
            case 12:     
            respostas.textContent = "Você quer mesmo saber?";
                break;
    
            case 13: 
            respostas.textContent = "A resposta é 42!";
            //easter egg do livro " O guia do mochileiro das galáxias."
                break;
            }
    

}
    
}






