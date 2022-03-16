window.onload = function() {

    function toTop() {
        var toDown = document.querySelector('svg.toDown');
        toDown.onclick = function(){
            // console.log(toDown);
            document.documentElement.scrollTop = document.querySelector('.articles').offsetTop;
        }
        document.querySelector('.toTop').onclick = function(){
            document.documentElement.scrollTop = 0;
        }   
    }
    toTop();

    function theScrool() {
        if (document.documentElement.scrollTop >= document.querySelector('.articles').offsetTop) {
            document.querySelector('.toTop').style.display = 'block';
        }else{
            document.querySelector('.toTop').style.display = 'none';
        }
        if (document.documentElement.scrollTop >= document.querySelector('.Our-Skills').offsetTop - 200) {
            document.querySelector('.Our-Skills .content').classList.add('active');
        }else if(document.documentElement.scrollTop < (document.querySelector('.Our-Skills').offsetTop - (document.querySelector('.Our-Skills').offsetHeight - 400))){
            document.querySelector('.Our-Skills .content').classList.remove('active');
        }        
    }
    theScrool();
    
    window.onscroll = function(){
        theScrool()
    }
    
    var daysSpan = document.querySelector('.days'),
        hoursSpan = document.querySelector('.hours'),
        minutsSpan = document.querySelector('.minutes'),
        secondSpan = document.querySelector('.seconds'),
        theDate = new Date("Mar 17, 2025 5:44:30").getTime();
    
    var set = setInterval(() => {
        
        var currentTime = theDate - (new Date().getTime()),
            day = 0,
            hours = 0,
            minutes = 5,
            secound = 10;
        
        day = Math.floor(currentTime / (1000 * 60 * 60 * 24));
        hours =  Math.floor(currentTime / (1000 * 60 * 60)) % 24;
        minutes =  Math.floor(currentTime / (1000 * 60)) % 60;
        secound =  Math.floor(currentTime / (1000)) % 60;
        // console.log(hours);

        day < 10 ? day = '0' + day : false;
        hours < 10 ? hours = '0' + hours : false;
        minutes < 10 ? minutes = '0' + minutes : false;
        secound < 10 ? secound = '0' + secound : false;

        daysSpan.innerHTML = day;
        hoursSpan.innerHTML = hours;
        minutsSpan.innerHTML = minutes;
        secondSpan.innerHTML = secound;

        if (day == '00' && hours == '00' && minutes == '00' && secound == '00') {
            daysSpan.innerHTML = '00';
            hoursSpan.innerHTML = '00';
            minutsSpan.innerHTML = '00';
            secondSpan.innerHTML = '00';
            clearInterval(set);
        }
        if (currentTime == 0 || currentTime < 0){
            daysSpan.innerHTML = '00';
            hoursSpan.innerHTML = '00';
            minutsSpan.innerHTML = '00';
            secondSpan.innerHTML = '00';
            clearInterval(set);
        }

    }, 1000);

}