const appContainer = document.querySelector('#app');

export function unlockScroll() {
    appContainer.classList.remove('scroll-locked');
}

export function lockScroll() {
    appContainer.classList.add('scroll-locked');
}

