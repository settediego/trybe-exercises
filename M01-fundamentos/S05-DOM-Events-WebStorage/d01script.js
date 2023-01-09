const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = "rgb(255 159 132)";

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = "rgb(249 219 94)";

const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0 176 105)';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0 53 51)';

const emergencyBack = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyBack.length; index += 1) {
emergencyBack[index].style.backgroundColor = 'rgb(165 0 243)';
}

const noEmergencyBack = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < noEmergencyBack.length; index += 1) {
  noEmergencyBack[index].style.backgroundColor = 'rgb(35 37 37)';
}
