function saveVisit() {

    let arrayOfSessions = JSON.parse(localStorage.getItem('sessions')) || [];

    let date = new Date();

    arrayOfSessions.push({
        day:date.getDate(),
        hours:date.getHours(),
        minutes:date.getMinutes(),
        seconds:date.getSeconds()
    });

    localStorage.setItem('sessions', JSON.stringify(arrayOfSessions))

}

saveVisit();