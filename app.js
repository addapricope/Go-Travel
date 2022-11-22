
// video
const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener('click', function(){
    if(!switchBtn.classList.contains('slide')){
        switchBtn.classList.add('slide');
        video.pause();
    } else if(switchBtn.classList.contains('slide')){
        switchBtn.classList.remove('slide');
        video.play();
    }
})

//sidebar
const toggleBtn = document.querySelector(".toggle-menu");
const sidebar = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener('click', function(){
    if(sidebar.classList.contains('hidden')){
        sidebar.classList.remove('hidden');
        sidebar.classList.add('show-nav');
    }    
})


closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-nav');
    sidebar.classList.add('hidden');

    
})

//clock

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >= 12){
        session.innerHTML = "PM"
    } else {
        session.innerHTML = "AM"
    }

    if(hrs >12){
        hrs = hrs-12;
    }

    if(hrs<10){
        hrs = "0" + hrs;
    } 
    if(min <10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);

//modal

const modalBtn = document.querySelector(".time-btn");
const modal = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');

modalBtn.addEventListener('click', function(){
    modal.classList.add('open-modal');
})

closeModal.addEventListener('click', function(){
    modal.classList.remove('open-modal');
})

//reminder

const reminderBtn = document.querySelectorAll('.span-reminder');
const div = document.querySelector('.reminder');

reminderBtn.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'sand'){
            div.style.backgroundColor= '#c2b280';
        } else if (e.target.id ==="sea"){
          div.style.backgroundColor='#006994';
        }else if(e.target.id==="skin"){
           div.style.backgroundColor='#B66B3E';
        }else if(e.target.id==='sunset'){
          div.style.backgroundColor='#FD5E53';
        }
    })
})

//tabs
const about = document.querySelector(".tabs-about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//questions
const questionBtns = document.querySelectorAll('.question-btn');


questionBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
})
})