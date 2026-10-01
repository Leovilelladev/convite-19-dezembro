const menuBotao = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');
const formulario = document.querySelector('.formulario');
const mensagem = document.querySelector('.formulario-mensagem');

menuBotao.addEventListener('click', () => {
  const estaAberto = menu.classList.toggle('aberto');
  menuBotao.setAttribute('aria-expanded', estaAberto);
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    menuBotao.setAttribute('aria-expanded', 'false');
  });
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome').value.trim();
  mensagem.textContent = `Que bom, ${nome}! Sua presença já está na lista.`;
  formulario.reset();
});
