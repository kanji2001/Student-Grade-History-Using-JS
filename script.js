function shPercentage() {
    // get inputvalue
    let wd = document.getElementById("wd").value;
    let maths = document.getElementById("maths").value;
    let comp = document.getElementById("comp").value;
    let phy = document.getElementById("phy").value;
    let grades = "";

    // convert into num
    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);

    // cal percentage
    let percentage = (totalGrades/400) * 100;
     
    // check grades
    if(percentage <=100 && percentage >= 80){
        grades = 'A'
    }else if (percentage <= 79 && percentage >= 60){
        grades = 'B'
    }else if (percentage <= 59 && percentage >= 40){
        grades = 'C'
    }else{
        grades = 'fail'
    } 

    // pass or fail status check
    if(percentage >= 40) {
        document.getElementById("showdata").innerHTML = `Out of 400 your total is ${totalGrades} 
    and percentageis ${percentage}%. <br> Your grade is ${grades}. You are pass`;
    }else{
        document.getElementById("showdata").innerHTML = `Out of 400 your total is ${totalGrades} 
    and percentageis ${percentage}%. <br> Your grade is ${grades}. You are fail`;
    }
    
}