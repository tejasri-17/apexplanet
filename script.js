document.getElementById('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMsg = document.getElementById('error-msg');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  errorMsg.textContent = "";

  if (!name || !email || !message) {
    e.preventDefault();
    errorMsg.textContent = "All fields are required.";
  } else if (!emailRegex.test(email)) {
    e.preventDefault();
    errorMsg.textContent = "Please enter a valid email address.";
  }
});

function addImage() {
  const url = document.getElementById('img-url').value.trim();
  if (!url) return;

  const gallery = document.getElementById('gallery-grid');
  const card = document.createElement('div');
  card.className = 'gallery-card';

  const img = document.createElement('img');
  img.src = url;
  img.alt = 'User uploaded image';

  const btn = document.createElement('button');
  btn.textContent = '×';
  btn.onclick = () => card.remove();

  card.appendChild(img);
  card.appendChild(btn);
  gallery.appendChild(card);

  document.getElementById('img-url').value = '';
}
