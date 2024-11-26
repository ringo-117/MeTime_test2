// モーダルの管理
const modals = [
    {id: 'modal-open', container: 'modal-container', bg: 'modal-bg', close: 'modal-close'},
    {id: 'modal-open_2', container: 'modal-container_2', bg: 'modal-bg_2', close: 'modal-close_2'},
    {id: 'modal-open_3', container: 'modal-container_3', bg: 'modal-bg_3', close: 'modal-close_3'},
    {id: 'modal-open_4', container: 'modal-container_4', bg: 'modal-bg_4', close: 'modal-close_4'},
];

modals.forEach(modal => {
    const openBtn = document.getElementById(modal.id);
    const container = document.getElementById(modal.container);
    const modalBg = document.getElementById(modal.bg);
    const closeBtn = document.getElementById(modal.close);

    if (openBtn && container && modalBg && closeBtn) {
        openBtn.addEventListener('click', () => {
            container.classList.add('active');
            modalBg.classList.add('active');
        });
        closeBtn.addEventListener('click', () => {
            container.classList.remove('active');
            modalBg.classList.remove('active');
        });
        modalBg.addEventListener('click', () => {
            container.classList.remove('active');
            modalBg.classList.remove('active');
        });
    } else {
        console.warn(`Element not found for modal with ID: ${modal.id}`);
    }
});
