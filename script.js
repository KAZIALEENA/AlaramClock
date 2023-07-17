
function updateTimer() {
    var timerDisplay = document.querySelector('.timer-display');
    var currentTime = new Date().toLocaleTimeString([], {hour24: false});
    timerDisplay.textContent = currentTime;
 // if the current time matches to the alarm time
 var activeAlarms = document.querySelectorAll('.activeAlarms div');
    activeAlarms.forEach(function(sound) {
        if (sound.textContent === currentTime) {
            playAlarmSound();
        }
    });
}

// Call the updateTimer function every second (1000 milliseconds)
setInterval(updateTimer, 1000);

// Function to handle adding alarms
function addAlarm() {
    var hourInput = document.getElementById('hourInput');
    var minuteInput = document.getElementById('minuteInput');
    var secondInput = document.getElementById('secondInput');

    var hour = parseInt(hourInput.value);
    var minute = parseInt(minuteInput.value);
    var second = parseInt(secondInput.value);

    var alarmTime = formatTime(hour) + ':' + formatTime(minute) + ':' + formatTime(second);

    if (!isNaN(hour) && !isNaN(minute) && !isNaN(second)) {
        var activeAlarms = document.querySelector('.activeAlarms');
        var alarmElement = document.createElement('div');
        alarmElement.textContent = alarmTime;

        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            alarmElement.remove();
        });

        alarmElement.appendChild(deleteButton);
        activeAlarms.appendChild(alarmElement);
    }

    hourInput.value = '';
    minuteInput.value = '';
    secondInput.value = '';
}

// Format time helper function
function formatTime(time) {
    return (time < 10) ? '0' + time : time;
}

// Add Alarm button event listener
var addButton = document.getElementById('set');
addButton.addEventListener('click', addAlarm);
