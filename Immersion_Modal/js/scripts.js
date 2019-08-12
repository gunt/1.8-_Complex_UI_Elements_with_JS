(function() {
    var $modalContainer = document.querySelector('#modal-container');
    
    function showModal(title, text) {
      // Clear all existing modal content
      $modalContainer.innerHTML = '';
      
      var modal = document.createElement('div');
      modal.classList.add('modal');
      
      // Add the new modal content
      var closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
      
      var titleElement = document.createElement('h1');
      titleElement.innerText = title;
      
      var contentElement = document.createElement('p');
      contentElement.innerText = text;
      
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      $modalContainer.appendChild(modal);
      
      $modalContainer.classList.add('is-visible');
    }
    
    function hideModal() {
      $modalContainer.classList.remove('is-visible');
    }
    
    function showDialog(title, text){
      showMOdal(title, text);

      //We want to add a confirm and cancel button to the modal
    }

    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'This is the modal content!');
    });
    
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });
    
    $modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal container,
      // We only want to close if the user clicks directly on the overlay
      var target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });
    
  })();