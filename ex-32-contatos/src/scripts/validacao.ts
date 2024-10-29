// import jquery
import $ from 'jquery'

// inicializa apos carregar o DOM
$(document).on('ready', () => {
  console.log('Jquery carregado')

  $('form').on('submit', () => {
    console.log('submetendo alteracoes')
  })
})
