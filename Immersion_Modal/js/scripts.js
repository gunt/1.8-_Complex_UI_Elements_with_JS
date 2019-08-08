
function showModal() {
    var $modalContainer = document.querySelector('modal-container');
    $modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
    showModal();
});

