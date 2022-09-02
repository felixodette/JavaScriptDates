const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDayName(dateString) {
  let dayName;
  // Write your code here
  dayName = weekday[new Date(dateString).getDay()]
  return dayName;
}
