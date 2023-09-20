/maryaamah/

// Set calendar to a-day after today
/* window.onload = (function (){
  let calendar = document.querySelector('#userDate');
  let day = new Date();
  let check = (date) => {
    if(date < 10) return date = '0'+date;
    return date;
  }
  let today = day.getFullYear()+'-'+
  check(day.getMonth()+1)+'-'+ check(day.getDay()+1);
  calendar.setAttribute('min',today);
})(); */
// Countdown function
const counting = (countDate, caption) => {
 let count, currentDate, day, hr, min, sec;
   currentDate = new Date();       //Current Time 
   count = countDate - currentDate; // Difference in time 
    if(count <= 0) {
      clearInterval(interval);
    }
    else {
     sec = Math.floor((count % (1000*60)) / 1000); 
     min = Math.floor((count % (1000*60*60)) / (1000*60));
     hr = Math.floor((count % (1000*60*60*24)) / (1000*60*60));
     day = Math.floor(count / (1000*60*60*24));
  // Checking against unity
   let timeChecker = (i) => {
     if(i < 10) i = "0"+i;
       return i;
   }
  // Outputting the date results
  document.querySelector("#secs_left").innerHTML = timeChecker(sec);
  document.querySelector("#mins_left").innerHTML = timeChecker(min);
  document.querySelector("#hr_left").innerHTML = timeChecker(hr);
  document.querySelector("#days_left").innerHTML = timeChecker(day);
  // Outputting the caption
  document.querySelector(".caption").innerHTML = caption;
  }
}
// Call Counting() with user or default input
const countDown = () => {
  let user = getUserInput();
  let cap = user.c;
  let date = user.d;
  counting(date, cap);
}
// Get user input or return default values
const getUserInput = () => {
   let userDate = document.querySelector('#userDate').value;
    let userInput = document.querySelector('#captInp');
    userCapt = userInput.value;
     userDate = userDate.split('-').join();
     let date = date => {
       if(date === '') return new Date(2024,00,03);
       return new Date(userDate);
     }
   let cap = userCapt || 'RAMADAN MUBARAKH IN ADVANCE';
   return {c : cap, d : date(userDate)}
};

let interval = setInterval(countDown,1000);
onload = interval;