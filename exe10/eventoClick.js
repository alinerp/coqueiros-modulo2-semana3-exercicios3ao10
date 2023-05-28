var botao = document.querySelector('#botao')

console.log(botao);

botao.addEventListener("click", function(){

    console.log("Clicou")

    console.log(this);

    this.style.color = 'red';
})