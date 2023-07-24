
const modal = document.getElementById('modal');

const submitButton = document.getElementById('submit-button');


const closeBtn = document.getElementById('close');

function showModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

submitButton.addEventListener('click', showModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
