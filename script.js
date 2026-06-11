const form = document.getElementById('formContato');

form.addEventListener('submit', function(e) {

  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();

  const telefone = document.getElementById('telefone').value.trim();

  const email = document.getElementById('email').value.trim();

  const mensagem = document.getElementById('mensagem').value.trim();

  const texto =
`Olá, me chamo ${nome}

📞 Telefone: ${telefone}

📧 E-mail: ${email}

🛠 Serviço:
${mensagem}`;

  const numero = '5511998680448';

  const url =
`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');

});
