//Get form and profile output section
const form = document.getElementById('profileForm');
const profileOutput = document.getElementById('profileOutput');

// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Collect data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const bio = document.getElementById('bio').value;
  const skills = document.getElementById('skills').value;

  // Display profile
  profileOutput.innerHTML = `
    <h3>${username}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Bio:</strong> ${bio}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  // Reset the form
  form.reset();
});

