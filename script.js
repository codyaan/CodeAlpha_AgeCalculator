// Variables 
let birthDate;

calculateBtn.addEventListener("click",()=>{
    birthDate = dateOfBirth.value
    let newDate = new Date()
    currentDate = newDate.toLocaleDateString()
    let age = calculateAge(birthDate, currentDate);
    years.innerHTML = age["years"] + `<p class="display-text">Years</p>`
    months.innerHTML = age["months"] + `<p class="display-text">Months</p>`
    days.innerHTML = age["days"] + `<p class="display-text">Days</p>`
})

function calculateAge(birthDate, currentDate) {
    // Extracting year, month, day from both dates
    let birthYear = birthDate.split("-")[0];
    let birthMonth = birthDate.split("-")[1];
    let birthDay = birthDate.split("-")[2];

    let currentYear = currentDate.split("/")[2];
    let currentMonth = currentDate.split("/")[0];
    let currentDay = currentDate.split("/")[1];
    
    // Calculate age difference
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    // check for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    // check for negative days
    if (days < 0) {
        months--;
        let previousMonth = (currentMonth - 1 + 12) % 12;
        let daysInPreviousMonth = new Date(currentYear, previousMonth + 1, 0).getDate();
        days += daysInPreviousMonth;
    }

    return { years: years, months: months, days: days };
}