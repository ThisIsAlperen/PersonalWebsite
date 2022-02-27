const homePage = document.getElementById('homePage')
const aboutPage = document.getElementById('aboutPage')
const portfolioPage = document.getElementById('portfolioPage')
const contactPage = document.getElementById('contactPage')
const skills = document.getElementById('skillsPage')

const Scroll = document.getElementById('scroll')
const ScrollLinks = document.getElementById('scrollLinks')
const Main = document.querySelector('main')
const homeDownArrow = document.getElementById('homeDownArrow')

// this is for the changing job with js
const job = document.getElementById('homeJob').children[0]

// this is for the changing job with css
const job2 = document.getElementById('changeJob')
const jobDetail = document.getElementById('jobDetail')
const portfolioLinks = document.getElementById('portfolioLinks')

const carousel = document.getElementById('carousel')
const carouselLeft = document.getElementsByClassName('fa-angle-left')
const carouselRight = document.getElementsByClassName('fa-angle-right')

let slide = 0;

// for each method can be used for html collections
NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

function hide(x) {
    x.classList.add('hide')
}
function show(x) {
    x.classList.remove('hide')
}

// Uppercase the titles
document.getElementsByTagName('h2').forEach(child => {
    child.innerText = child.innerText.toUpperCase()
})
document.getElementsByTagName('h3').forEach(child => {
    child.innerText = child.innerText.toUpperCase()
})
// scroll to the about page when the arrow in the homepage clicked
homePage.children[2].onclick = function (e) {
    $('html,main').animate({ //animate element that has scroll
        scrollTop: 716 //for scrolling

    }, 100);
    e.preventDefault()
}
// scroll to the page when navbar link clicked
ScrollLinks.onclick = function (e) {
    var x = e.target.getAttribute('href')
    var y = document.getElementById(x)

    $('html,main').animate({ //animate element that has scroll
        scrollTop: y.offsetTop //for scrolling

    }, 100);
    e.preventDefault()
}
// remove the navbar class when resize
window.addEventListener('resize', function () {
    var x = document.getElementsByTagName('nav')[0]
    var y = this.document.getElementById('navButton').children[0]
    if (this.window.innerWidth >= 992) {
        y.classList.remove('fa-xmark')
        y.classList.add('fa-bars')
        x.classList.remove('open')
    }
    Slide()
})
// hover the navbar links when scroll
window.addEventListener("scroll", function () {

    ScrollLinks.children.forEach(child => {
        child.children[0].classList = ''
    });
    ScrollLinks.children.forEach(child => {
        child.classList = ''
    });


    if (this.window.pageYOffset < aboutPage.offsetTop - 200) {

        document.getElementById('homeLink').classList.add('hover')
        document.getElementById('homeLink').parentElement.classList.add('hover')
    }
    if (this.window.pageYOffset > aboutPage.offsetTop - 200 && this.window.pageYOffset < portfolioPage.offsetTop - 200) {


        document.getElementById('aboutLink').classList.add('hover')
        document.getElementById('aboutLink').parentElement.classList.add('hover')

    }
    if (this.window.pageYOffset > portfolioPage.offsetTop - 200 && this.window.pageYOffset < contactPage.offsetTop - 200) {
        document.getElementById('portfolioLink').classList.add('hover')
        document.getElementById('portfolioLink').parentElement.classList.add('hover')

    }
    if (this.window.pageYOffset > contactPage.offsetTop - 200) {
        document.getElementById('contactLink').classList.add('hover')
        document.getElementById('contactLink').parentElement.classList.add('hover')

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
    if (slide > 0) {
        Slide(-1)
    }
}
carouselRight[0].onclick = function () {
    if (slide < 2) {
        Slide(1)
    }
}
function Slide(x) {
    var y = carousel.children[slide].offsetWidth
    if (x == undefined) {
        x = 0;
    }
    slide = slide + x
    console.log(slide)
    console.log(y)
   
    //carousel.style.left = 
    carousel.style.left = `-${y*slide}px`
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
// open the details of a portfolio item
portfolioLinks.onclick = function (e) {
    console.log(e.target)
    e.preventDefault()
    x = e.target.getAttribute('href')
    var title = e.target.getAttribute('title')
    document.getElementById('specificJob').children[0].innerText = title

    document.getElementById('jobDetailText').children.forEach(child => {
        if (child.getAttribute('name') == x) {
            child.classList.remove('hide')
        } else {
            child.classList.add('hide')
        }

    });
    document.getElementById('jobDetailFeatures').children.forEach(child => {

        if (child.getAttribute('name') == x) {
            child.classList.remove('hide')
        } else {
            child.classList.add('hide')
        }

    });

    if (x !== null) {//to make sure that user clicked to a picture not any point (will be changed)
        portfolioPage.children[1].style.opacity = '0';
        portfolioPage.children[2].style.opacity = '0';




        setTimeout(function () {
            hide(portfolioPage.children[1])
            hide(portfolioPage.children[2])
            show(jobDetail)

        }, 350)
        setTimeout(function () {

            jobDetail.style.opacity = '1'
        }, 400)
    }


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
//home Page Down Arrows
//Starts at the beginning
var homeArrow = setInterval(homeArrow2, 5000)
// If mouse enter the arrows, stops
homeDownArrow.addEventListener('mouseenter', function () {
    console.log('enter')
    clearInterval(homeArrow)
})
//If mouse leaves the arrows, continue
homeDownArrow.addEventListener('mouseleave', function () {
    console.log('leave')
    setTimeout(homeArrow2, 1000)
    homeArrow = setInterval(homeArrow2, 5000) // creates interval again
})

function homeArrow2() {
    x = homeDownArrow
    x.style.height = '130px'
    x.style.transition = '.4s '
    setTimeout(function () {
        x.style.transition = '.15s ease-in'
        x.style.height = '90px'
    }, 400)
    setTimeout(function () {
        x.style.transition = '.2s ease-out '
        x.style.height = '115px'
    }, 580)
    setTimeout(function () {
        x.style.transition = '.15s ease-in'
        x.style.height = '90px'
    }, 800)
    setTimeout(function () {
        x.style.transition = '.15s ease-out'
        x.style.height = '96px'
    }, 970)
    setTimeout(function () {
        x.style.transition = '.1s ease-in'
        x.style.height = '90px'
    }, 1150)
    x.style.transition = '.3s'
}

// 

document.getElementById('navButton').onclick = function (e) {
    var x = document.getElementsByTagName('nav')[0]


    if (e.target.classList != '') {
        var y = e.target
    } else {
        var y = e.target.children[0]
    }
    console.log(y)
    console.log(x.classList[1])
    if (x.classList[1] == 'open') {
        y.classList.remove('fa-xmark')
        y.classList.add('fa-bars')
        x.classList.remove('open')
    } else {
        x.classList.add('open')
        y.classList.add('fa-xmark')
        y.classList.remove('fa-bars')
    }
}