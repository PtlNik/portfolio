document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.topbar__toggle');
  const menu = document.querySelector('.mobile-nav');

  if (toggle && menu) {
    menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');

      toggle.setAttribute(
          'aria-expanded',
          open ? 'true' : 'false'
      );

      toggle.textContent = open ? 'Close' : 'Menu';

      menu.style.opacity = open ? '1' : '0';
      menu.style.transform = open
          ? 'translateY(0)'
          : 'translateY(-10px)';
    });
  }
});