let yourName = prompt("Enter Your Name");
let firstGo = document.querySelector("#myName");

firstGo.innerHTML = `${yourName}`;

function currentTime() {
    let timeHMS = new Date;
    let Hour = timeHMS.getHours();
    let Minute = timeHMS.getMinutes();
    let Second = timeHMS.getSeconds();

    if (Hour < 10) {
        Hour = "0" + Hour;
    }
    else if (Minute < 10) {
        Minute = "0" + Minute;
    }
    else if (Second < 10) {
        Second = "0" + Second;
    };

    let day = new Date();
    let weekDay = day.getDay()

    weekDay =
    (weekDay = 1)? "Monday." :
    (weekDay = 2)? "Tuesday." :
    (weekDay = 3)? "Wednesday." :
    (weekDay = 4)? "Thursday." :
    (weekDay = 5)? "Friday." :
    (weekDay = 6)? "Saturday." :
    (weekDay = 0)? "Sunday." : "";

    let date = new Date();
    let dateDay = new Date().getDate();
    let dateMonth = new Date().getMonth() + 1; //JavaScript counts months from 0 to 11 so we must add 1
    let dateYear = new Date().getFullYear();
    

    if (dateDay < 10) {
        dateDay = "0" + dateDay
    }
    else if (dateMonth < 10) {
        dateMonth = "0" + dateMonth
    };
    
    document.querySelector(".clock").innerHTML = Hour + ":" + Minute + ":" + Second;
    document.querySelector(".day").innerHTML = `<b>${weekDay}</b>`;
    document.querySelector(".date").innerHTML = dateMonth+"."+dateDay+"."+dateYear;
} setInterval(currentTime)