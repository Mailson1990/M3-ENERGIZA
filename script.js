const form = document.getElementById('formContato');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, meu nome é ${nome}%0A
Telefone: ${telefone}%0A
Email: ${email}%0A
Serviço: ${mensagem}`;

  const numero = '5511998680448'; 

  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, '_blank');
});