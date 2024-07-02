document.addEventListener('DOMContentLoaded', function() {
    // Function to update current UTC time and day
    function updateCurrentTime() {
        const currentTimeElement = document.getElementById('currentTimeUTC');
        const currentDayElement = document.getElementById('currentDay');

        const now = new Date();
        const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' };
        
        // Update time
        const currentTimeString = now.toLocaleString('en-US', options);
        currentTimeElement.textContent = currentTimeString;

        // Update day
        const currentDayString = now.toLocaleString('en-US', { weekday: 'long' });
        currentDayElement.textContent = currentDayString;
    }

    // Call the function initially
    updateCurrentTime();

    // Update time every minute (optional)
    setInterval(updateCurrentTime, 60000); // Update every minute
});