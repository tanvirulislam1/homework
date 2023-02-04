//Login Function Start
function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    if (email == "admin@gamil.com" && pass == "admin") {
      window.location.assign("index.html");
      alert("Success");
    } else {
      document.getElementById("wrong").style.display = "block";
    }
  }


//Deposit Function Start
document.getElementById('deposit-btn').addEventListener('click', function(){
    const deposite = document.getElementById('deposite').value;
    const depositeAmount = document.getElementById('depositeAmount');
    const totalDeposite = depositeAmount.innerText;
    const total = document.getElementById('total');
    const totalAmount = total.innerText;
    


    depositeAmount.innerText = parseFloat(deposite)  + parseFloat(totalDeposite);
    total.innerText = parseFloat(deposite) + parseFloat(totalAmount);
})







//Withdow Function Start
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw').value;
    const withdrawAmount = document.getElementById("withdrawAmount");
    const totalwithdraw = withdrawAmount.innerText;
    const total = document.getElementById("total");
    const totalAmount = total.innerText;



    withdrawAmount.innerText = parseFloat(withdraw) + parseFloat(totalwithdraw);
    total.innerText = parseFloat(totalAmount) - parseFloat(withdraw);
})