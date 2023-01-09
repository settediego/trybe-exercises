document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = "rgb(255 168 168)";

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = "rgb(255 245 66)";

document.getElementById('header-container').style.backgroundColor = 'rgb(71 184 71)';

document.getElementById('footer-container').style.backgroundColor = 'rgb(21 85 21)';

for (let index = 0; index < document.querySelectorAll('.emergency-tasks h3').length; index += 1) {
document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = 'purple';
}

for (let index = 0; index < document.querySelectorAll('.no-emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = 'black';
}
