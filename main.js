let spans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let par = document.querySelectorAll(".skill .par");
let sec = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .num");
let started = false;

let up = document.querySelector(".up ");






window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 200) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }


    if (window.scrollY >= section.offsetTop - 200) {
        if (!started) {
            nums.forEach((num) => startCounter(num));
        }

        if (!started) {
            par.forEach((num) => startCounter(num));
        }
        started = true;
    };


    // if (window.scrollY >= sec.offsetTop - 200 ) {
    //     if (!started) {
    //         nums.forEach((num) => startCounter(num));
    //     }
    //     started = true;
    // };






    // --- Start Scroll To Top ----

    // console.log(this.scrollY);
    // if (this.scrollY >= 5000) {
    //     up.classList.add("show");
    // }
    // else {
    //     up.classList.remove("show");
    // }

    this.scrollY >= 5000 ? up.classList.add("show") : up.classList.remove("show");
};

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// --- End Scroll To Top ----






function startCounter(ele) {
    let goal = ele.dataset.goal;
    let counter = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(counter);
        }
    }, 7000 / goal);
};




function startCounter(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 7000 / goal);
};












// ---------------------------------------------------------filter for categoray-----------------------------------------------------

let filter = document.querySelectorAll(".filter li");
let imgs = document.querySelectorAll(".foot-gall img");

filter.forEach((li) => {
    li.addEventListener("click", removeActive)
    li.addEventListener("click", manageLinks)
});

//remove active class and add it to another class
function removeActive() {
    filter.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}



//-------------------------------------------------------------manage links---------------------------------------------------------------


function manageLinks() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
};










// -----------------------------------------------------------------CountDown----------------------------------------------------------

// 1000 ms = 1s 

let countDown = new Date("Dec 31,2024 23:59:59").getTime();

// document.write(countDown)

let counter = setInterval(() => {
    // Get time now 
    let dataNow = new Date().getTime();

    // fint the diff between data 
    let dataDiff = countDown - dataNow;

    // Get time units

    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days < 0 ? `0${days}` : days;;


    let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    document.querySelector(".hours").innerHTML = hours < 0 ? `0${hours}` : hours;

    let minutes = Math.floor((dataDiff % (1000 * 60 * 60) / (1000 * 60)));
    document.querySelector(".minutes").innerHTML = minutes < 0 ? `0${minutes}` : minutes;

    let secondes = Math.floor((dataDiff % (1000 * 60) / 1000));
    document.querySelector(".secondes").innerHTML = secondes < 10 ? `0${secondes}` : secondes;


    if (dataDiff < 0) {
        let countDown = new Date("Dec 31,2025 23:59:59").getTime();
    }


}, 1000);





// -------------------------------------------------------------------------Scroll To Top -----------------------------------------------------------







