//login button event handler
// const logInBtn = document.getElementById("logIn_btn");
//     logInBtn.addEventListener("click",function(){
//     const logInArea = document.getElementById("login_area");
//     logInArea.style.display ="none";

//     const accountArea = document.getElementById("account_area");
//         accountArea.style.display ="block";

//     const bodyColor = document.getElementById("body_Color");
//         bodyColor.style.background="linear-gradient(90deg ,#87cfebc0, #ffffff)";
// });

// login form disappear and dashboard appear
const logInBtn = document.getElementById("logIn_btn");
    logInBtn.addEventListener("click",function(){

  const emailInput = document.getElementById("login_form1").value;
  const passwordInput = document.getElementById("login_form2").value;

  if (emailInput.length === 0 || passwordInput.length === 0) {
        alert("please Enter the proper info");
  } else {
    const logInArea = document.getElementById("login_area");
    logInArea.style.display ="none";

    const accountArea = document.getElementById("account_area");
        accountArea.style.display ="block";

    const bodyColor = document.getElementById("body_Color");
        bodyColor.style.background="linear-gradient(90deg ,#87cfebc0, #ffffff)";
  }
});

//deposit button event handler.
    const depositBtn = document.getElementById("depositBtn");
        depositBtn.addEventListener("click",function(){
        const depositAmount = document.getElementById("deposit_amount").value;
        const depositNumber = parseFloat(depositAmount);
        
        // const currentDeposit = document.getElementById("balanceNum").innerText;
        // const currentDepositNum = parseFloat(currentDeposit);
        // const totalDeposit = depositNumber + currentDepositNum;

        // document.getElementById("balanceNum").innerText = totalDeposit;

        updateSpanText("balanceNum", depositNumber); //use function
        document.getElementById("deposit_amount").value = "" ;

        // const currentBalance = document.getElementById("currentBalance").innerText;
        // const currentBalanceNum = parseFloat(currentBalance);
        // const totalBalance = depositNumber + currentBalanceNum;

        // document.getElementById("currentBalance").innerText = totalBalance;
        updateSpanText("currentBalance", depositNumber);


        // depositNumber
    });


    function updateSpanText(id , addedNumber){
        const currentBalance = document.getElementById(id).innerText;
        const currentBalanceNum = parseFloat(currentBalance);
        const totalBalance = addedNumber + currentBalanceNum;

        document.getElementById(id).innerText = totalBalance;
    }

//withdraw button event handler
    const withdrawBtn = document.getElementById("addWithdrawBtn");
    withdrawBtn.addEventListener("click", function(){
        const withdrawAmount =document.getElementById("withdrawAmount").value;
        const withdrawNumber = parseFloat(withdrawAmount);

        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);

        document.getElementById("withdrawAmount").value = "";

    });

    //function collet id parseFloat number er jonno
    function getInputNumber(id){
        const amount =document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }