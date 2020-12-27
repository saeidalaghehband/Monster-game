
//Define variable

let humanDiv = document.getElementById("humanDiv");
let monsterDiv = document.getElementById("monsterDiv");
let innerHuman = document.getElementById("innerHuman");
let innerMonster = document.getElementById("innerMonster");
let btnHeal = document.getElementById("btnHeal");
let btnAtt = document.getElementById("btnAtt");
let btnGiv = document.getElementById("btnGiv");

// show Width Number in Progressbar & Add auto counter

innerHuman.innerText = parseInt(humanDiv.style.width, 10);
innerMonster.innerText = parseInt(monsterDiv.style.width, 10);
animateValue(innerHuman, 0, 450, 1800);
animateValue(innerMonster, 0, 450, 1800);

// Add animation class to progressbar

monsterDiv.classList.add("animate");
humanDiv.classList.add("animate");

// Disable button heal

btnHeal.disabled = true;

//Start attack button

function attBtn() {
  btnHeal.disabled = false;
  let soundBtn = new Audio('sounds/soundbtnheal.mp3')
  soundBtn.play();

  let numRandomhuman = Math.floor(Math.random() * 17) + 1;
  let numRandomMonster = Math.floor(Math.random() * 18) + 1;
  humanDiv.style.width = parseInt(humanDiv.style.width) - numRandomhuman + "px";
  monsterDiv.style.width =parseInt(monsterDiv.style.width) - numRandomMonster + "px";
  innerHuman.innerText = parseInt(humanDiv.style.width, 10);
  innerMonster.innerText = parseInt(monsterDiv.style.width, 10);

  if (parseInt(monsterDiv.style.width) < 25) {
    this.numRandomMonster = Math.floor(Math.random() * 3) + 1;
    monsterDiv.style.width =parseInt(monsterDiv.style.width) - numRandomMonster + "px";
  }
  if (parseInt(humanDiv.style.width) < 25) {
    this.numRandomhuman = Math.floor(Math.random() * 3) + 1;
    humanDiv.style.width = parseInt(humanDiv.style.width) - numRandomhuman + "px";
  }

  if (parseInt(monsterDiv.style.width) <= 0) {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Hurrah",
      text: "You Win The Game",
      showConfirmButton: false,
      backdrop: `
      rgba(0,0,0,0.0)
      url("img/celebration.gif")
      left top
    `,
      timer: 5000,
      didOpen: function () {
        let victory = new Audio("sounds/victory.mp3");
        victory.play();
      },
    });
    monsterDiv.style.filter = "blur(8px);";
    btnHeal.disabled = true;
    btnAtt.disabled = true;
    btnGiv.disabled = true;
    
    setTimeout(() => {
      monsterDiv.style.width = "450px";
      humanDiv.style.width = "450px";
      innerHuman.innerText = parseInt(humanDiv.style.width, 10);
      innerMonster.innerText = parseInt(monsterDiv.style.width, 10);
      monsterDiv.style.backgroundColor = "#54e346";
      humanDiv.style.backgroundColor = "#54e346";
      btnHeal.disabled = false;
      btnAtt.disabled = false;
      btnGiv.disabled = false;
      monsterDiv.classList.add("animate");
      humanDiv.classList.add("animate");
      btnHeal.disabled = true;
      animateValue(innerHuman, 0, 450, 1800);
      animateValue(innerMonster, 0, 450, 1800);
    }, 5500);
    monsterDiv.classList.remove("animate");
    humanDiv.classList.remove("animate");

  } else if (humanDiv.style.width <= "0px") {
    Swal.fire({
      position: "top",
      icon: "warning",
      iconColor: "#fd3a69",
      title: "Im So Sorry",
      text: "You Lost The Game",
      showConfirmButton: false,
      timer: 5000,
      didOpen: function () {
        let evil = new Audio("sounds/evil_laugh.mp3");
        evil.play();
      },
    });
    monsterDiv.style.filter = "blur(8px);";
    btnHeal.disabled = true;
    btnAtt.disabled = true;
    btnGiv.disabled = true;

    setTimeout(() => {
      monsterDiv.style.width = "450px";
      humanDiv.style.width = "450px";
      innerHuman.innerText = parseInt(humanDiv.style.width, 10);
      innerMonster.innerText = parseInt(monsterDiv.style.width, 10);
      monsterDiv.style.backgroundColor = "#54e346";
      humanDiv.style.backgroundColor = "#54e346";
      btnHeal.disabled = false;
      btnAtt.disabled = false;
      btnGiv.disabled = false;
      monsterDiv.classList.add("animate");
      humanDiv.classList.add("animate");
      btnHeal.disabled = true;
      animateValue(innerHuman, 0, 450, 1800);
      animateValue(innerMonster, 0, 450, 1800);
    }, 5500);
    monsterDiv.classList.remove("animate");
    humanDiv.classList.remove("animate");
  }

  changeColor();
}

//Start health button

function healBtn() {
  let soundBtn = new Audio('sounds/soundbtnheal.mp3')
  soundBtn.play();

  let numRandomHuman = Math.floor(Math.random() * 10) + 1;
  let numRandomMonster = Math.floor(Math.random() * 13) + 1;
  if (parseInt(humanDiv.style.width) + parseInt(numRandomHuman) >= 450) {
    btnHeal.disabled = true;
    humanDiv.style.width = "450px";
    return;
  } else if (
    parseInt(monsterDiv.style.width) + parseInt(numRandomMonster) >=
    450
  ) {
    btnHeal.disabled = true;
    monsterDiv.style.width = "450px";
    return;
  }
  btnHeal.disabled = false;

  humanDiv.style.width = parseInt(humanDiv.style.width) + numRandomHuman + "px";
  monsterDiv.style.width =
    parseInt(monsterDiv.style.width) + numRandomMonster + "px";
  innerHuman.innerText = parseInt(humanDiv.style.width, 10);
  innerMonster.innerText = parseInt(monsterDiv.style.width, 10);

  changeColor();
}

//Start give up button

function giveupBtn() {

  let soundBtn = new Audio('sounds/soundbtngiveup.mp3')
  soundBtn.play();

  Swal.fire({
    icon: "warning",
    iconColor: "#776d8a",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    text: "Do You Want To Give Up ?!",
    width: "28rem",
    showClass: {
      popup: "animate__animated animate__bounceInDown",
    },
    hideClass: {
      popup: "animate__animated animate__bounceOutUp",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let lose = new Audio("sounds/lose.mp3");
      lose.play();
      btnHeal.disabled = true;
      btnAtt.disabled = true;
      btnGiv.disabled = true;
      setTimeout(() => {
        monsterDiv.style.width = "450px";
        humanDiv.style.width = "450px";
        innerHuman.innerText = parseInt(humanDiv.style.width, 10);
        innerMonster.innerText = parseInt(monsterDiv.style.width, 10);
        monsterDiv.style.backgroundColor = "#54e346";
        humanDiv.style.backgroundColor = "#54e346";
        monsterDiv.classList.add("animate");
        humanDiv.classList.add("animate");
        btnHeal.disabled = true;
        btnAtt.disabled = false;
        btnGiv.disabled = false;
        animateValue(innerHuman, 0, 450, 1800);
        animateValue(innerMonster, 0, 450, 1800);
      }, 3500);
      monsterDiv.classList.remove("animate");
      humanDiv.classList.remove("animate");
      
    } else {
      soundBtn.play();
    }
  });
}

// Change color

function changeColor() {
  if (parseInt(monsterDiv.style.width) > 150) {
    monsterDiv.style.backgroundColor = "#54e346";
  }
  if (parseInt(humanDiv.style.width) > 150) {
    humanDiv.style.backgroundColor = "#54e346";
  }

  if (parseInt(monsterDiv.style.width) <= 150) {
    monsterDiv.style.backgroundColor = "#fd3a69";
  }
  if (parseInt(humanDiv.style.width) <= 150) {
    humanDiv.style.backgroundColor = "#fd3a69";
  }
}

// Auto counter function

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
