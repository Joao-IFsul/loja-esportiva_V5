const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const usuario = JSON.parse(localStorage.getItem('usuario'));

let total = 0;
const lista = document.getElementById('lista-carrinho');

carrinho.forEach(item => {
  total += item.preco;
  lista.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
});

document.getElementById('total').innerText = total.toFixed(2);

document.getElementById('finalizar').addEventListener('click', async () => {
  await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      usuario_id: usuario.id,
      total
    })
  });

  localStorage.removeItem('carrinho');
  alert('Pedido finalizado!');
  window.location.href = 'index.html';
});
