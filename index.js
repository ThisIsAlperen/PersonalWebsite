const homePage = document.getElementById('homePage')
const aboutPage = document.getElementById('aboutPage')
const portfolioPage = document.getElementById('portfolioPage')
const contactPage = document.getElementById('contactPage')
const skills = document.getElementById('skillsPage')

const Scroll = document.getElementById('scroll')
const ScrollLinks = document.getElementById('scrollLinks')
const Main = document.querySelector('main')

// this is for the changing job with js
const job = document.getElementById('homeJob').children[0]

// this is for the changing job with css
const job2 = document.getElementById('changeJob')
const jobDetail = document.getElementById('jobDetail')
const carousel = document.getElementById('portfolioLinks')
const carouselLeft = document.getElementsByClassName('fa-angle-left')
const carouselRight = document.getElementsByClassName('fa-angle-right')
document.getElementById('homeLink').classList.add('hover')

NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

function hide(x) {
    x.classList.add('hide')
}
function show(x) {
    x.classList.remove('hide')
}
myFunction()

function myFunction() {
    Scroll.scrollIntoView()

}

homePage.children[1].onclick = function (e) {

    $('html,main').animate({ //animate element that has scroll
        scrollTop: 716 //for scrolling

    }, 800);
    e.preventDefault()
}
ScrollLinks.onclick = function (e) {
    var x = e.target.getAttribute('href')
    var y = document.getElementById(x)

    $('html,main').animate({ //animate element that has scroll
        scrollTop: y.offsetTop //for scrolling

    }, 1000);
    e.preventDefault()
}
Main.addEventListener("scroll", function () {
    ScrollLinks.children.forEach(child => {
        child.children[0].classList = ''
    });

    if (Main.scrollTop < aboutPage.offsetTop - 200) {

        document.getElementById('homeLink').classList.add('hover')
    }
    if (Main.scrollTop > aboutPage.offsetTop - 200 && Main.scrollTop < portfolioPage.offsetTop - 200) {


        document.getElementById('aboutLink').classList.add('hover')

    }
    if (Main.scrollTop > portfolioPage.offsetTop - 200 && Main.scrollTop < contactPage.offsetTop - 200) {
        document.getElementById('portfolioLink').classList.add('hover')
    }
    if (Main.scrollTop > contactPage.offsetTop - 200) {
        document.getElementById('contactLink').classList.add('hover')
    }

});
// ********vvvv This Part is for the changing the job vvvv******//
// ************* I found a smoother way with css **********//
//setTimeout(changeJob,1000)
function changeJob() {
    var k = ['Web Developer', 'Freelancer']

    var x = job.innerText
    if (k[0] === x) {
        y = k[1]

    } else if (k[1] === x) {
        y = k[0]
    } else {
        x = 'Freelancer'
        y = 'Web Developer'
    }

    y = y.split('')
    x = x.split('')


    setTimeout(function () { clearJob(x); }, 750)
    setTimeout(function () { createJob(y); }, 1500)
}
//setInterval(changeJob, 4000)

function createJob(y) {
    i = 0;
    var k = ''
    var writeJob = setInterval(function () {

        if (y[i] != undefined) {
            k = k + y[i]
        }
        job.innerText = k
        i++

        if (i >= y.length) {

            clearInterval(writeJob)
        }
    }, 50)
}
function clearJob(x) {
    var deleteJob = setInterval(function () {
        x.pop()

        var m = ''
        for (i = 0; i < x.length; i++) {
            if (x[i] != undefined) {
                m = m + x[i]
            }
        }
        job.innerText = m;
        if (x.length == 0) {

            clearInterval(deleteJob)
        }
    }, 50)
}
// *********^^^^ This Part is for the changing the job^^^^^********//
//left - right carousel

carouselLeft[0].onclick = function () {
    var x = carousel.offsetLeft

    console.log(x)
    if (x < 0) {
        x = x + 570
        console.log(x)

        carousel.style.left = x + 'px'
    }
}
carouselRight[0].onclick = function () {
    var x = carousel.offsetLeft

    if (x >= -570) {
        x = x - 570
        carousel.style.left = x + 'px'
    }
}
// This is the new part for the changing the job
var i;
setInterval(function () {

    if (i == undefined) {
        i = 0
    }
    job2.style.width = '5px'
    setTimeout(function () {
        if (i == 0) {
            hide(job2.children[0].children[0])
            job2.style.width = '133px'
            show(job2.children[0].children[1])
        }
        if (i == 1) {
            hide(job2.children[0].children[1])
            job2.style.width = '100px'
            show(job2.children[0].children[2])
        }
        if (i == 2) {
            hide(job2.children[0].children[2])
            job2.style.width = '147px'
            show(job2.children[0].children[0])
        }
        i++
    }, 800)
    if (i > 2) {
        i = 0
    }
}, 2500)
//****************************************************/

carousel.onclick = function (e) {
    x = e.target.getAttribute('href')
    if (x !== null) {
        portfolioPage.children[1].style.opacity = '0';
        portfolioPage.children[2].style.opacity = '0';
        console.log(document.getElementById('specificJob').style.backgroundImage = `url(${x})`)
        setTimeout(function () {
            hide(portfolioPage.children[1])
            hide(portfolioPage.children[2])
            show(jobDetail)

        }, 350)
        setTimeout(function () {

            jobDetail.style.opacity = '1'
        }, 400)
    }

    e.preventDefault()
}
jobDetail.children[0].onclick = function (e) {
    jobDetail.style.opacity = '0';

    setTimeout(function () {
        show(portfolioPage.children[1])
        show(portfolioPage.children[2])
        hide(jobDetail)

    }, 350)
    setTimeout(function () {
        portfolioPage.children[1].style.opacity = '1'
        portfolioPage.children[2].style.opacity = '1'
    }, 400)
    e.preventDefault()
}

