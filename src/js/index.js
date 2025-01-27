const btnAvancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoatual = 0;

cartoes.forEach((cartao) => {
    cartao.addEventListener("click", function(){
       const cartaVirada = cartao.querySelector(".carta-virada");

//virar o cartao
cartao.classList.toggle("virar"); 
//mostrar o fundo da carta
cartaVirada.classList.toggle("mostrar-fundo-carta"); 

const descricao = cartao.querySelector(".descricao");
descricao.classList.toggle("esconder");
    });
});

btnAvancar.addEventListener("click", function(){
 if(cartaoatual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

    cartaoatual++;
    mostrarCartao();

});
 
btnvoltar.addEventListener("click", function(){

    if(cartaoatual === 0) return;

    esconderCartaoSelecionado();

       cartaoatual--;
mostrarCartao();

   });

function mostrarCartao() {
    cartoes[cartaoatual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}