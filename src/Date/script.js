let presentDay = new Date().getDay()
let presentHour = new Date().getHours()
let presentTime = new Date().toLocaleTimeString('en')
let dateNow = new Date().getTime()
let newYear = new Date('2023-01-01').getTime()
let timeRemaining = Math.floor((newYear - dateNow) / 1000)
let days = Math.floor(timeRemaining / 60 / 60 / 24)



const goodTime = document.createElement('div')
const day = document.createElement('div')
const time = document.createElement('div')
const divNewYear = document.createElement('div')

const showResult = (hour) => {
    let newGootTime = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи']; 

    if (hour >= 0 || hour <= 5) {
        return newGootTime[3];
    }

    if (hour >= 6 || hour <= 11) {
        return newGootTime[0];
    }

    if (hour >= 12 || hour <= 18) {
        return newGootTime[2];
    }

    if (hour >= 19 || hour <= 23) {
        return newGootTime[1];
    }

}

const dayWeek = (index) => {
    let days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; 
    return days[index]; 
}

goodTime.className = 'good-time'
goodTime.textContent = (showResult(presentHour));
document.body.appendChild(goodTime);

day.className = 'day'
day.textContent = `Сегодня: ${(dayWeek(presentDay))}`
document.body.appendChild(day)

time.className = 'time'
time.textContent = `Текущее время: ${presentTime}`
document.body.appendChild(time)

divNewYear.className = 'new-year'
divNewYear.textContent = `До нового года: ${days} дней`
document.body.appendChild(divNewYear)

