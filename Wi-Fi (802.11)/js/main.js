document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.getElementById('btn-toggle');
  const nav = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav-link');

  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Marcar página ativa
  const path = window.location.pathname.split('/').pop();
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });

  // Atualizar ano
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
// Carrossel de imagens automático
const items = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

if (items.length > 0) {document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.getElementById('btn-toggle');
  const nav = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav-link');

  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Marcar página ativa
  const path = window.location.pathname.split('/').pop();
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });

  // Atualizar ano
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Carrossel de imagens automático
  const items = document.querySelectorAll('.carousel-item');
  let currentSlide = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  if (items.length > 0) {
    showSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % items.length;
      showSlide(currentSlide);
    }, 3000); // troca a cada 3 segundos
  }
});

  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % items.length;
    showSlide(currentSlide);
  }, 5000); // 3 segundos
}


    // AutoPlay: trocar slide a cada 5 segundos
    setInterval(() => {
      currentSlide = (currentSlide + 1) % items.length;
      showSlide(currentSlide);
    }, 5000);
  }
);
