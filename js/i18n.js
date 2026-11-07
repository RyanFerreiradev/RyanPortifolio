
const TRANSLATIONS = {
    pt: {
        'meta.title': 'Ryan Ferreira | Back-End',
        'meta.description': 'Portfólio de Ryan Ferreira, programador Back-End em busca do primeiro emprego na área.',
        'lang.switch': 'Mudar idioma para inglês',
        'menu.open': 'Abrir menu',
        'menu.close': 'Fechar menu',
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'home.tag': 'Olá, bem-vindo!',
        'home.role': 'Programador Back-End',
        'home.text': 'Tenho 21 anos, sou apaixonado por tecnologia e busco meu primeiro emprego como desenvolvedor Back-End.',
        'home.btnProjects': 'Ver projetos',
        'home.code': '<span class="c-key">const</span> dev = {\n  nome: <span class="c-str">"Ryan Ferreira"</span>,\n  foco: <span class="c-str">"Back-End"</span>,\n  status: <span class="c-str">"aprendendo"</span>\n};',
        'about.alt': 'Foto de Ryan Ferreira',
        'about.title': 'Sobre <span>mim</span>',
        'about.subtitle': 'Por onde tudo começou',
        'about.text': 'Olá! Meu nome é Ryan Ferreira, tenho 21 anos e faço Engenharia de Software na Uninter. Estudo programação desde o começo de 2024, tenho experiência formal apenas com Front-End e me encontrei no Back-End.',
        'about.btn': 'Fale comigo',
        'projects.eyebrow': 'O que estou construindo',
        'projects.title': 'Projetos em <span>andamento</span>',
        'projects.status': 'Em andamento',
        'projects.done': '{n}% concluído',
        'projects.progress': 'Progresso: {n}%',
        'projects.p1.title': 'API de Tarefas',
        'projects.p1.text': 'API REST para cadastro e gerenciamento de tarefas, com rotas, validações e banco de dados.',
        'projects.p2.title': 'Sistema de Login',
        'projects.p2.text': 'Autenticação de usuários com cadastro, login seguro e controle de acesso por token.',
        'projects.p2.tag': 'Autenticação',
        'projects.p3.title': 'Este Portfólio',
        'projects.p3.text': 'Meu site pessoal, em constante evolução, com novos projetos e melhorias de design.',
        'contact.eyebrow': 'Onde me encontrar?',
        'contact.title': 'Redes <span>sociais</span>',
        'contact.c1.title': 'Formas de contato',
        'contact.email': 'E-mail',
        'contact.c2.text': 'Veja meu perfil para conhecer minhas principais habilidades na área da programação.',
        'contact.c3.text': 'Meu perfil no GitHub reúne alguns pequenos projetos para você visitar.',
        'footer.copy': '© 2026 Ryan Ferreira. Todos os direitos reservados.',
        'footer.top': 'Voltar ao topo'
    },

    en: {
        'meta.title': 'Ryan Ferreira | Back-End Developer',
        'meta.description': 'Portfolio of Ryan Ferreira, a Back-End developer looking for his first job in the field.',
        'lang.switch': 'Switch language to Portuguese',
        'menu.open': 'Open menu',
        'menu.close': 'Close menu',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'home.tag': 'Hello, welcome!',
        'home.role': 'Back-End Developer',
        'home.text': "I'm 21 years old, passionate about technology, and looking for my first job as a Back-End developer.",
        'home.btnProjects': 'View projects',
        'home.code': '<span class="c-key">const</span> dev = {\n  name: <span class="c-str">"Ryan Ferreira"</span>,\n  focus: <span class="c-str">"Back-End"</span>,\n  status: <span class="c-str">"learning"</span>\n};',
        'about.alt': 'Photo of Ryan Ferreira',
        'about.title': 'About <span>me</span>',
        'about.subtitle': 'Where it all began',
        'about.text': "Hi! My name is Ryan Ferreira, I'm 21 and I'm studying Software Engineering at Uninter. I've been learning to code since early 2024, I only have formal experience with Front-End, and I found my place in Back-End.",
        'about.btn': 'Get in touch',
        'projects.eyebrow': "What I'm building",
        'projects.title': 'Projects <span>in progress</span>',
        'projects.status': 'In progress',
        'projects.done': '{n}% complete',
        'projects.progress': 'Progress: {n}%',
        'projects.p1.title': 'Task API',
        'projects.p1.text': 'REST API for creating and managing tasks, with routes, validation, and a database.',
        'projects.p2.title': 'Login System',
        'projects.p2.text': 'User authentication with sign-up, secure login, and token-based access control.',
        'projects.p2.tag': 'Authentication',
        'projects.p3.title': 'This Portfolio',
        'projects.p3.text': 'My personal website, constantly evolving, with new projects and design improvements.',
        'contact.eyebrow': 'Where to find me',
        'contact.title': 'Social <span>media</span>',
        'contact.c1.title': 'Contact details',
        'contact.email': 'E-mail',
        'contact.c2.text': 'Check out my profile to see my main programming skills.',
        'contact.c3.text': 'My GitHub profile has a few small projects for you to explore.',
        'footer.copy': '© 2026 Ryan Ferreira. All rights reserved.',
        'footer.top': 'Back to top'
    }
};
const PT_COUNTRIES = ['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'];

const BRAZIL_TIMEZONES = [
    'America/Sao_Paulo', 'America/Manaus', 'America/Fortaleza', 'America/Bahia',
    'America/Belem', 'America/Recife', 'America/Cuiaba', 'America/Campo_Grande',
    'America/Porto_Velho', 'America/Rio_Branco', 'America/Boa_Vista',
    'America/Araguaina', 'America/Maceio', 'America/Noronha', 'America/Santarem',
    'America/Eirunepe'
];

const LANG_STORAGE_KEY = 'portfolio-lang';
const COUNTRY_API = 'https://api.country.is/';
const COUNTRY_API_TIMEOUT = 2500; // ms


function readStorage(key) {
    try { return localStorage.getItem(key); } catch { return null; }
}

function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch { /* ignora */ }
}


function guessLangFromBrowser() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const lang = (navigator.language || '').toLowerCase();

    if (BRAZIL_TIMEZONES.includes(tz) || lang.startsWith('pt')) return 'pt';
    return 'en';
}

async function detectLangFromCountry() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), COUNTRY_API_TIMEOUT);

    try {
        const response = await fetch(COUNTRY_API, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const { country } = await response.json();
        if (!country) return null;

        return PT_COUNTRIES.includes(country) ? 'pt' : 'en';
    } catch {
        return null; 
    } finally {
        clearTimeout(timer);
    }
}


let currentLang = 'pt';

function t(key, vars = {}) {
    const text = TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.pt[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}

function applyLanguage(lang) {
    currentLang = lang;

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]').content = t('meta.description');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = t(el.dataset.i18n, { n: el.dataset.n });
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        el.alt = t(el.dataset.i18nAlt);
    });

    document.querySelectorAll('.progress').forEach(el => {
        el.setAttribute('aria-label', t('projects.progress', { n: el.dataset.progress }));
    });

    
    document.querySelector('#lang-label').textContent = lang === 'pt' ? 'EN' : 'PT';

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}


async function initLanguage() {
    const saved = readStorage(LANG_STORAGE_KEY);

    
    if (saved === 'pt' || saved === 'en') {
        applyLanguage(saved);
        return;
    }

    
    applyLanguage(guessLangFromBrowser());

    const detected = await detectLangFromCountry();
    const userChoseMeanwhile = readStorage(LANG_STORAGE_KEY);

    if (detected && detected !== currentLang && !userChoseMeanwhile) {
        applyLanguage(detected);
    }
}

document.querySelector('#lang-btn').addEventListener('click', () => {
    const next = currentLang === 'pt' ? 'en' : 'pt';
    writeStorage(LANG_STORAGE_KEY, next);
    applyLanguage(next);
});

initLanguage();
