            /* Mostrar Menu */  
const navegacaoMenu = document.getElementById('navegacao-menu'),
      exibirNavegacao = document.getElementById('exibir-menu'),
      fecharNavegacao = document.getElementById('fechar-navegacao')

/* Exibir menu */
if(exibirNavegacao) {
    exibirNavegacao.addEventListener('click', () => {
        navegacaoMenu.classList.add('mostrar-menu')
    })
}

/* Fechar/Esconder o menu da tela */
if(fecharNavegacao) {
    fecharNavegacao.addEventListener('click', () => {
        navegacaoMenu.classList.remove('mostrar-menu')
    })
}

/* Remover menu para celular */
const navegacaoLink = document.querySelectorAll('.navegacao__link')

const linkAcao = () => {
    const navegacaoMenu = document.getElementById('navegacao-menu')
    // Quando clicamos no navegacao__link, removeremos a classe mostrar-menu
    navegacaoMenu.classList.remove('mostrar-menu')
}

navegacaoLink.forEach(n => n.addEventListener('click', linkAcao))

/* Adicionar Sombra no cabeçalho  */
const sombraCabecalho = () => {
    const cabecalho = document.getElementById('cabecalho')

    /* Adiciona uma classe que se o deslocamento do botao for maior do que 50 da view port */
    this.scrollY >= 50 ? cabecalho.classList.add('sombra-cabecalho')
                    : Headers.classList.remove('sombra-cabecalho')
}
window.addEventListener('scroll', sombraCabecalho)

