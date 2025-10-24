document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    const open = !mobileMenu.hasAttribute('hidden');
    if (open) { mobileMenu.setAttribute('hidden',''); menuBtn.setAttribute('aria-expanded','false'); }
    else { mobileMenu.removeAttribute('hidden'); menuBtn.setAttribute('aria-expanded','true'); }
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!open));
      a.style.display = open ? 'none' : 'block';
    });
  });

  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name'); const email = data.get('email'); const message = data.get('message');
    if (!name || !email || !message) { note.textContent='Пожалуйста, заполните все поля.'; return; }
    const subject = encodeURIComponent('Запрос с сайта от ' + name);
    const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:sales@example.com?subject=${subject}&body=${body}`;
    note.textContent = 'Открываем ваше почтовое приложение…';
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
