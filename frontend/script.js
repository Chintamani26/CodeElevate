const ctx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Problems Solved',
            data: [3, 5, 2, 8, 6, 4, 7],
            backgroundColor: 'rgba(0, 255, 197, 0.6)',
            borderColor: 'rgba(0, 255, 197, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#f5f5f5'
                }
            }
        }
    }
});


function startChallenge(type) {
    alert(`Starting ${type} challenge!`);
    // Add logic to navigate or start the challenge
}

let timerInterval;
let startTime;

// Start Timer
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeSpent = new Date(currentTime - startTime);
        const minutes = String(timeSpent.getMinutes()).padStart(2, '0');
        const seconds = String(timeSpent.getSeconds()).padStart(2, '0');
        document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// Stop Timer
function stopTimer() {
    clearInterval(timerInterval);
    const currentTime = new Date();
    const timeSpent = new Date(currentTime - startTime);
    const minutes = String(timeSpent.getMinutes()).padStart(2, '0');
    const seconds = String(timeSpent.getSeconds()).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// Handle Submission
document.getElementById('submit-btn').addEventListener('click', () => {
    // Stop the timer
    const totalTime = stopTimer();

    // Show result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    document.getElementById('time-taken').textContent = `Time Taken: ${totalTime}`;

    alert('Answer submitted successfully!');
});


async function fetchUsersWithCommonInterests() {
    try {
      const response = await fetch('http://localhost:5000/api/users/common-interests');
      const data = await response.json();
      console.log('Users with common interests:', data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  // Call the function to fetch data
  fetchUsersWithCommonInterests();

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});
