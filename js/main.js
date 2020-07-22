//login button event handler
const logInBtn = document.getElementById("logIn_btn");
    logInBtn.addEventListener("click",function(){
    const logInArea = document.getElementById("login_area");
    logInArea.style.display ="none";

    const accountArea = document.getElementById("account_area");
        accountArea.style.display ="block";

    const bodyColor = document.getElementById("body_Color");
        bodyColor.style.background="linear-gradient(90deg ,#87cfebc0, #ffffff)";
});

//deposit button event handler.
    const depositBtn = document.getElementById("depositBtn");
        depositBtn.addEventListener("click",function(){
        const depositAmount = document.getElementById("deposit_amount").Value;
        const depositNumber = parseFloat(depositAmount);
        
        const currentDeposit = document.getElementById("balanceNum").innerText;
        const currentDepositNum = parseFloat(currentDeposit);
        const totalDeposit = depositNumber + currentDepositNum;

        document.getElementById("balanceNum").innerText = totalDeposit;
        // document.getElementById("deposit_amount").Value = "" ;


    
    })