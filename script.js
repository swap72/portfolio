// Placeholder script for future interactivity
document.addEventListener("DOMContentLoaded", function() {
    console.log("Batman-themed portfolio loaded!");
    
    // Initialize the IST clock
    initializeClock();
});

function updateClock() {
    const now = new Date();
    
    // Get IST time (UTC + 5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + istOffset);
    
    // Format time in full readable format
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 24-hour format
        timeZone: 'Asia/Kolkata'
    };
    
    // Get formatted time string
    const timeString = ist.toLocaleTimeString('en-IN', options);
    
    // Update the clock display
    const clockElement = document.getElementById('clock-time');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

function initializeClock() {
    // Check if clock element exists before starting
    const clockElement = document.getElementById('clock-time');
    if (clockElement) {
        // Update clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);
    }
}
