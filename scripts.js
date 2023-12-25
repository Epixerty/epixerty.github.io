// The URL you provided
function updateTime() {
    const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: 'CET', hour12: false });
    document.getElementById('currentTime').textContent = currentTime;
  }

  // Update the time initially
  updateTime();

  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);