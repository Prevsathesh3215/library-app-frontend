document.getElementbyId('Library-Form')
.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Received')

  let formData = {
    username: document.getElementById('input-username').value,
    email: document.getElementbyId('input-email').value,
    password: document.getElementbyId('input-password').value,
    age: document.getElementbyId('input-age').value,
    role: document.getElementbyId('input-role').value,
    firstname: document.getElementbyId('input-firstname').value,
    lastname: document.getElementbyId('input-lastname').value
  };

  fetch('http://localhost:5900/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  .then((resp) => resp)
  .catch((err) => console.error(err));
})