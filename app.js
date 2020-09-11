const pic = document.querySelector(".pics");

const greeter = document.querySelector(".greeting");

const checkTime = () => {
  let timechecker = document.querySelector(".time");
  let d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let AMorPM = "";
  if (hour <= 11) {
    AMorPM += " AM";
    pic.src = `assets/morning.jpg`;
  } else if (hour > 11 && hour < 17) {
    AMorPM += " PM";
    pic.src = `assets/afternoon.jpg`;
    greeter.textContent = "Good Afternoon";
  } else {
    AMorPM = " PM";
    pic.src = `assets/night.jpg`;
    greeter.textContent = "Good Night";
  }

  timechecker.textContent = hour + ":" + minutes + ":" + seconds + AMorPM;
};

setInterval(checkTime, 1000);
