let currentPage = 0;

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((pageEl, index) => {
        pageEl.classList.remove('active');
        if (index === page) {
            pageEl.classList.add('active');
        }
    });
}

function scrollPage(direction) {
    const nextPage = currentPage + direction;
    if (nextPage < 0 || nextPage >= document.querySelectorAll('.page').length) {
        return;
    }
    currentPage = nextPage;
    showPage(currentPage);
}

const arrow = document.querySelector('.arrow');
if (arrow) {
    arrow.addEventListener('click', () => scrollPage(1));
}

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        scrollPage(1);
    } else {
        scrollPage(-1);
    }
});

// Close button functionality
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        alert('Close button clicked!');
    });
}

// Card click functionality
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('data-url');
        if (url) {
            e.preventDefault();
            window.location.href = url;
        }
    });
});