function compute() {
  var principal = document.getElementById("principal").value;

  if (principal < 0) {
    alert("Please put a positive number.");
  } else if (principal == "") {
    alert("please put a positive number.");
  }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate * years) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  document.getElementById("message").innerHTML = `If you deposit <span class='yellow'>${principal}</span><br>, 
  at an interest rate of <span class='yellow'>${rate}+"%"</span>. <br>You will receive an amount of <span class='yellow'>${interest}</span> <br>
  in the year <span class='yellow'>${year}</span>`;
}
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval + "%";
}
