// 页面滚动逻辑
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

// Handle wheel events for desktop
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        scrollPage(1);
    } else {
        scrollPage(-1);
    }
}, { passive: true });

// Handle touch events for mobile
document.addEventListener('touchstart', function(event) {
    this.touchY = event.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchend', function(event) {
    const touchY = event.changedTouches[0].clientY;
    if (touchY < this.touchY) {
        scrollPage(1);
    } else if (touchY > this.touchY) {
        scrollPage(-1);
    }
}, { passive: false });

// 卡片跳转功能
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        const url = card.getAttribute('data-url') || card.getAttribute('href');
        if (url) {
            e.preventDefault();
            window.location.href = url;
        }
    });
});

// 关闭按钮悬停红色效果和点击显示文字
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) {
    // 悬停红色效果
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.color = 'red';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.color = '';
    });

    // 点击显示文字
    closeBtn.addEventListener('click', () => {
        alert('Ciallo～ (∠・ω< )⌒★');
    });
}