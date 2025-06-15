// src/index.js
const form = document.getElementById('guest-form');
const guestList = document.getElementById('guest-list');
const maxGuests = 10;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('guest-name').value.trim();
  const type = document.getElementById('guest-type').value;

  if (!name) return;

  if (guestList.children.length >= maxGuests) {
    alert("Babe, no more than 10 guests ✋");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="tag ${type.toLowerCase()}">${type}</span>
    <strong>${name}</strong>
    <div>
      <button class="rsvp">RSVP</button>
      <button class="edit">Edit</button>
      <button class="remove">❌</button>
    </div>
  `;

  guestList.appendChild(li);
  form.reset();
});

guestList.addEventListener('click', function (e) {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.classList.contains('remove')) {
    li.remove();
  } else if (e.target.classList.contains('rsvp')) {
    li.classList.toggle('attending');
    e.target.textContent = li.classList.contains('attending') ? '✅ Attending' : 'RSVP';
  } else if (e.target.classList.contains('edit')) {
    const newName = prompt("Update the name:", li.querySelector('strong').textContent);
    if (newName) li.querySelector('strong').textContent = newName;
  }
});
