// Get the modal

const modal = document.getElementsByClassName('myModal');
const btn = document.getElementsByClassName('myBtn');
const span = document.getElementsByClassName('close');

function setDataIndex() {
  for (let i = 0; i < btn.length; i + 1) {
    btn[i].setAttribute('data-index', i);
    modal[i].setAttribute('data-index', i);
    span[i].setAttribute('data-index', i);
  }
}

window.onload = function () {
  setDataIndex();
};

for (let i = 0; i < btn.length; i + 1) {
  btn[i].onclick = function () {
    const ElementIndex = this.getAttribute('data-index', i);
    modal[ElementIndex].style.display = 'block';
  };

  span[i].onclick = function () {
    const ElementIndex = this.getAttribute('data-index', i);
    modal[ElementIndex].style.display = 'none';
  };
}

window.onclick = function (event) {
  if (event.target === modal[event.target.getAttribute('data-index')]) {
    modal[event.target.getAttribute('data-index')].style.display = 'none';
  }
};
