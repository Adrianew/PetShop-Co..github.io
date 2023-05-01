const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  document.body.classList.toggle('sidebar-open');
});

 // Variabila care stochează numărul de produse din coș
 let cartCount = 0;

 // Funcție pentru actualizarea numărului de produse din coș
 function updateCartCount(count) {
   cartCount = count;
   document.getElementById('cart-count').innerText = count;
 }

 const footer = document.querySelector('.footer');
window.addEventListener('scroll', () => {
  const scrollHeight = document.body.scrollHeight;
  const scrollPosition = window.innerHeight + window.pageYOffset;
  if (scrollHeight - scrollPosition < 1) {
    footer.classList.add('show');
  } else {
    footer.classList.remove('show');
  }
});




