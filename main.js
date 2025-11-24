// Carousel functionality (INFINITE + AUTOPLAY)
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Toggle menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// === Noticias Carousel === (INFINITE + AUTOPLAY)
const noticiasCarousel = document.getElementById("noticiasCarousel");
const noticiasPrev = document.getElementById("noticiasPrev");
const noticiasNext = document.getElementById("noticiasNext");

// ====================================================================================
// =======================  NAVBAR HAMBURGUESA  =======================================
// ====================================================================================

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ====================================================================================
// =======================  SERVICIOS – CARRUSEL INFINITO  =============================
// ====================================================================================

let serviceCards = Array.from(carousel.children);
const visibleCards = 5;
const totalCards = serviceCards.length;

// Clonar primeros y últimos elementos
for (let i = 0; i < visibleCards; i++) {
    let cloneEnd = serviceCards[i].cloneNode(true);
    let cloneStart = serviceCards[totalCards - 1 - i].cloneNode(true);
    carousel.appendChild(cloneEnd);
    carousel.insertBefore(cloneStart, carousel.firstChild);
}

let position = visibleCards;
const serviceCardWidth = serviceCards[0].offsetWidth + 24;

// Posición inicial (después de clones)
carousel.style.transform = `translateX(-${position * serviceCardWidth}px)`;

// Botones next/prev
nextBtn.addEventListener("click", () => moveCarousel(1));
prevBtn.addEventListener("click", () => moveCarousel(-1));

function moveCarousel(direction) {
    position += direction;
    carousel.style.transition = "transform 0.45s ease";
    carousel.style.transform = `translateX(-${position * serviceCardWidth}px)`;

    carousel.addEventListener("transitionend", handleLoop, { once: true });
}

function handleLoop() {
    if (position >= totalCards + visibleCards) {
        carousel.style.transition = "none";
        position = visibleCards;
        carousel.style.transform = `translateX(-${position * serviceCardWidth}px)`;
    }

    if (position < visibleCards) {
        carousel.style.transition = "none";
        position = totalCards + visibleCards - 1;
        carousel.style.transform = `translateX(-${position * serviceCardWidth}px)`;
    }
}

// === AUTOPLAY SERVICIOS ===
setInterval(() => {
    moveCarousel(1);
}, 10000);

// ====================================================================================
// =======================  NOTICIAS – CARRUSEL INFINITO  ==============================
// ====================================================================================

let noticiasCardsList = Array.from(noticiasCarousel.children);
const noticiasVisible = 3;
const noticiasTotal = noticiasCardsList.length;

// Clonar primeros y últimos
for (let i = 0; i < noticiasVisible; i++) {
    let cloneEnd = noticiasCardsList[i].cloneNode(true);
    let cloneStart = noticiasCardsList[noticiasTotal - 1 - i].cloneNode(true);
    noticiasCarousel.appendChild(cloneEnd);
    noticiasCarousel.insertBefore(cloneStart, noticiasCarousel.firstChild);
}

let noticiasPos = noticiasVisible;
const noticiaWidth = noticiasCardsList[0].offsetWidth + 24;

// Posición inicial
noticiasCarousel.style.transform = `translateX(-${noticiasPos * noticiaWidth}px)`;

// Botones next/prev
noticiasNext.addEventListener("click", () => moveNoticias(1));
noticiasPrev.addEventListener("click", () => moveNoticias(-1));

function moveNoticias(dir) {
    noticiasPos += dir;
    noticiasCarousel.style.transition = "transform 0.45s ease";
    noticiasCarousel.style.transform = `translateX(-${noticiasPos * noticiaWidth}px)`;

    noticiasCarousel.addEventListener("transitionend", handleNoticiasLoop, { once: true });
}

function handleNoticiasLoop() {
    if (noticiasPos >= noticiasTotal + noticiasVisible) {
        noticiasCarousel.style.transition = "none";
        noticiasPos = noticiasVisible;
        noticiasCarousel.style.transform = `translateX(-${noticiasPos * noticiaWidth}px)`;
    }

    if (noticiasPos < noticiasVisible) {
        noticiasCarousel.style.transition = "none";
        noticiasPos = noticiasTotal + noticiasVisible - 1;
        noticiasCarousel.style.transform = `translateX(-${noticiasPos * noticiaWidth}px)`;
    }
}

// === AUTOPLAY NOTICIAS ===
setInterval(() => {
    moveNoticias(1);
}, 10000);

// ====================================================================================
// ====================   SMOOTH SCROLL DE TU CÓDIGO ORIGINAL  ========================
// ====================================================================================

// Smooth scroll con compensación por navbar sticky
const header = document.querySelector('.navbar');
const getHeaderHeight = () => header ? header.offsetHeight : 0;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = getHeaderHeight() + 8; // ajuste extra si quieres espacio
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });

            // cerrar menú móvil si está abierto
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});


// ====================================================================================
// =======================  ACTIVE MENU ON SCROLL  ====================================
// ====================================================================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ...existing code...

// Botón "volver arriba"
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    // Mostrar/ocultar según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Scroll suave al principio
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
