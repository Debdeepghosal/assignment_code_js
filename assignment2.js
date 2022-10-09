function timeconversion(str) {
  let hour = Number(str[0]) * 10 + Number(str[1]);
  let minutes = Number(str[3]) * 10 + Number(str[4]);
  let seconds = Number(str[6]) * 10 + Number(str[7]);
  let sol = "";
  if (str[8] == "A") {
    if (hour == 12) {
      hour = 0;
    }
  } else {
    if (hour != 12) {
      hour += 12;
    }
  }
  seconds += 45;
  if (seconds > 60) {
    minutes += 1;
    seconds = seconds % 60;
  }
  minutes += 45;
  if (minutes > 60) {
    hour += 1;
    minutes = minutes % 60;
  }
  if (hour == 24 && (minutes > 0 || seconds > 0)) {
    hour = 0;
  }
  hour = String(hour);
  minutes = String(minutes);
  seconds = String(seconds);
  sol = sol.concat(hour, ":", minutes, ":", seconds);

  return sol;
}

function main() {
  let string = "12:01:00PM";
  let ans = timeconversion(string);
  console.log(ans);
}
main();
