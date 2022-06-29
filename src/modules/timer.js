'use strict';

const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    console.log(deadline)
    const getTimeRemaining = () => {
       
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow)/1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24); 
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60 );

        return {
            timeRemaining: timeRemaining,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
     
    };

   const updateClock = () => {
      let getTime = getTimeRemaining();
     
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
        
    };

    updateClock();

};
export default timer;