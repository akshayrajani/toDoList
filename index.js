
// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i += 1) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = 'none';
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
const button = document.getElementById('button');
button.addEventListener('click', () => {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    return;
  }
  document.getElementById('myUL').appendChild(li);

  document.getElementById('myInput').value = '';

  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i += 1) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = 'none';
    };
  }
});
