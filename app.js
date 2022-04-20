var pageOne = document.querySelector(".container");
var pageTwo = document.querySelector(".wrapper");

var nameResult = document.getElementById("resultName");
var telResult = document.getElementById("resultTel");
var nameResult = document.getElementById("resultEmail");
var telResult = document.getElementById("resultAlter");
var nameResult = document.getElementById("resultLand");

const personObje = [];

function start() {
  var userName = document.getElementById("userName").value;
  var userTel = document.getElementById("userTel").value;
  var userEmail = document.getElementById("userEmail").value;
  var userAlter = document.getElementById("userAlter").value;
  var userLand = document.getElementById("userLand").value;

  function NewObje(name, tel, email, alter, land) {
      (this.name = name),
      (this.tel = tel),
      (this.email = email),
      (this.alter = alter),
      (this.land = land);
  }
  const kunden = new NewObje(userName, userTel, userEmail, userAlter, userLand);

  resultName.innerHTML = userName;
  resultTel.innerHTML = userTel;
  resultEmail.innerHTML = userEmail;
  resultAlter.innerHTML = userAlter;
  resultLand.innerHTML = userLand;

  personObje.push(kunden);

  pageOne.style.display = "none";
  pageTwo.style.display = "block";

  console.log(personObje);
}

function ordnen() {
  pageOne.style.display = "block";
  pageTwo.style.display = "none";
}
