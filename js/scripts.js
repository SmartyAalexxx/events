
    let inputs = document.querySelectorAll('.form-contact__input');
        inputs.forEach(function(input) {
            input.addEventListener('change', function() {
                if (this.value.length > 0) {
                    this.classList.add('filled');
                }
            })
        }); 

        //timer
        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date());
            let seconds = Math.floor((t / 1000) % 60);
            let minutes = Math.floor((t / 1000 / 60) % 60);
            let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            console.log(t, seconds, minutes, hours, days);
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
            }
            
            function initializeClock(id, endtime) {
            let clock = document.getElementById("countdown");
            let daysSpan = clock.querySelector('.days');
            let hoursSpan = clock.querySelector('.hours');
            let minutesSpan = clock.querySelector('.minutes');
            let secondsSpan = clock.querySelector('.seconds');
            
            function updateClock() {
                let t = getTimeRemaining(endtime);
            
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
                if (t.total <= 0) {
                clearInterval(timeinterval);
                }
            }
            
            updateClock();
            let timeinterval = setInterval(updateClock, 1000);
            }
            var deadline = '31/12/2015';
