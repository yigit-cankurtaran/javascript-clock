let alarmTime = null;


function updateClock() {
  const clockElement = document.getElementById('clock');
  clockElement.innerText = new Date().toLocaleTimeString();

  if (alarmTime && alarmTime.getTime() <= Date.now()) {
    alert("Wake up!");
    alarmTime = null;
  }
}

function setAlarm(hours, minutes) {
  const now = new Date();
  const alarmDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0
  );

  if (alarmDate.getTime() <= Date.now()) {
    // If the alarm time has already passed, add one day to the alarm time
    alarmDate.setDate(alarmDate.getDate() + 1);
  }

  alarmTime = alarmDate;
}

setInterval(updateClock, 1000);

setAlarm(23, 0);
