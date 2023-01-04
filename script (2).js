

// calcumalator back up
//var heightInput = document.querySelector(".height-input-field");
//var weightInput = document.querySelector(".weight-input-field");
//var bmibutton = document.querySelector(".buttonthing");
//var bmiresult = document.querySelector(".bmiresult");
//var bmiprint = document.querySelector(".bmiprint");
//var bodymassindex, height, weight;

//bmibutton.addEventListener("click", ()=>{
//  height = heightInput.value;
//  weight = weightInput.value;
//  bodymassindex = weight/(height**2);
//  bmiresult.innerText = bodymassindex;
//
//  if(bodymassindex < 18.5){
//    bmiprint.innerText = "Your body mass index is underweight";
//  }else if ((bodymassindex > 18.5) && (bodymassindex < 24.9)){
//    bmiprint.innerText = "Your body mass index is normal and healthy";
//  }else if ((bodymassindex > 25) && (bodymassindex < 29)){
//    bmiprint.innerText = "Your body mass index is overweight";
//  }else{
//    bmiprint.innerText = "Your body mass index is obese";
//  }
// });

var heightInput = document.querySelector(".height-input-field");
var heightUnitInput = document.querySelector('input[name="height-unit"]:checked');
var weightInput = document.querySelector(".weight-input-field");
var weightUnitInput = document.querySelector('input[name="weight-unit"]:checked');
var bmibutton = document.querySelector(".buttonthing");
var bmiresult = document.querySelector(".bmiresult");
var bmiprint = document.querySelector(".bmiprint");
var bodymassindex, height, weight;

bmibutton.addEventListener("click", () => {
  if (heightUnitInput.value === "centimeters") {
    height = heightInput.value / 100;
  } else {
    height = heightInput.value;
  }

  if (weightUnitInput.value === "pounds") {
    weight = weightInput.value / 2.20462;
  } else {
    weight = weightInput.value;
  }

  bodymassindex = weight / (height ** 2);
  bmiresult.innerText = bodymassindex;

  if (bodymassindex < 18.5) {
    bmiprint.innerText = "Your body mass index is underweight";
  } else if (bodymassindex > 18.5 && bodymassindex < 24.9) {
    bmiprint.innerText = "Your body mass index is normal and healthy";
  } else if ((bodymassindex > 25) && (bodymassindex < 29)) {
    bmiprint.innerText = "Your body mass index is overweight";
  } else {
    bmiprint.innerText = "Your body mass index is obese";
  }
});


//timer
function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    startTimer();
};

function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count1");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    startTimer();
};

function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count2");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    startTimer();
};

function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count3");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    startTimer();
};
function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count4");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    startTimer();
};

function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count5");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    startTimer();
};


function startTimer2(){
  var counter = 120;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count6");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start2()
{
    startTimer2();
};

function startTimer2(){
  var counter = 60;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count7");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start3()
{
    startTimer2();
};
function startTimer2(){
  var counter = 180;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count8");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("done!");
        clearInterval(counter);
    }
  }, 1000);
}
function start4()
{
    startTimer2();
};
// Calorie Calculator
function calculateCalories() {
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var exercise = document.getElementById("exercise").value;
  var goal = document.getElementById("goal").value;

  var BMR;
  if (gender === "male") {
    BMR = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
  } else {
    BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
  }

  var calories;
  if (exercise === 0) {
    calories = BMR * 1.2;
  } else if (exercise <= 3) {
    calories = BMR * 1.375;
  } else if (exercise <= 6) {
    calories = BMR * 1.55;
  } else if (exercise <= 9) {
    calories = BMR * 1.725;
  } else {
    calories = BMR * 1.9;
  }

  if (goal === "lose") {
    calories -= 500;
  } else if (goal === "gain") {
    calories += 500;
  }

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "You should consume about " + calories + " calories every day to " + goal + " weight.";
}

//exercise
function toggleText() {
  var text= document.getElementById("click");
  if (text.style.display === "none") {
    text.style.display="block";
  } else {
    text.style.display="none";
  }
}

function toggleText2() {
  var text= document.getElementById("click-two");
  if (text.style.display === "none") {
    text.style.display="block";
  } else {
    text.style.display="none";
  }
}
function toggleText3() {
  var text= document.getElementById("click-three");
  if (text.style.display === "none") {
    text.style.display="block";
  } else {
    text.style.display="none";
  }
}


