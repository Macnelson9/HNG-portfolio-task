// Function to display current time in UTC
function displayCurrentTimeUTC() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
  }
  
  // Function to display current day of the week
  function displayCurrentDay() {
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const currentDay = daysOfWeek[now.getUTCDay()];
    currentDayElement.textContent = currentDay;
  }
  
  // Function to set the Slack profile information
  function setSlackProfileInfo() {
    const slackDisplayNameElement = document.querySelector('[data-testid="slackDisplayName"]');
    const slackEmailElement = document.querySelector('[data-testid="slackEmail"]');
    const slackProfilePictureElement = document.querySelector('[data-testid="slackProfilePicture"]');
  
    // Set your Slack profile information here
    slackDisplayNameElement.textContent = 'Uche Ofatu';
    slackEmailElement.textContent = 'michaelofatu@gmail.com';
    slackProfilePictureElement.src = 'avatar-uche.svg';
  }
  
  // Initialize the page with the current time, day, and Slack profile info
  function initializePage() {
    displayCurrentTimeUTC();
    displayCurrentDay();
    setSlackProfileInfo();
  
    // Update the current time every second
    setInterval(displayCurrentTimeUTC, 1000);
  }
  
  // Run the initializePage function when the DOM content is fully loaded
  document.addEventListener('DOMContentLoaded', initializePage);
  
