const header = document.querySelector('.header');
const menuBtn = document.querySelector('#menu-btn');
const navlist = document.querySelector('#navlist');
const navLinks = document.querySelectorAll('.navlist a');
const sections = document.querySelectorAll('main section[id]');

function setMenu(open) {
    navlist.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
    menuBtn.querySelector('i').className = open ? 'bx bx-x' : 'bx bx-menu';
}

// Mantém o rótulo do menu no idioma certo quando o idioma muda
document.addEventListener('languagechange', () => {
    setMenu(navlist.classList.contains('open'));
});

menuBtn.addEventListener('click', () => {
    setMenu(!navlist.classList.contains('open'));
});

navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));

function onScroll() {
    header.classList.toggle('sticky', window.scrollY > 20);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
