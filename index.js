const homePage = document.getElementById('homePage')
const aboutPage = document.getElementById('aboutPage')
const portfolioPage = document.getElementById('portfolioPage')
const contactPage = document.getElementById('contactPage')

const Scroll = document.getElementById('scroll')
const ScrollLinks = document.getElementById('scrollLinks')
const Main = document.querySelector('main')

const job = document.getElementById('homeJob').children[0]
document.getElementById('homeLink').classList.add('hover')

NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

myFunction()

function myFunction() {
    Scroll.scrollIntoView()
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

setInterval(function () {

    var k = ['Web Developer', 'Freelancer']
    
    x = job.innerText
    if (k[0] === x) {
        y = k[1]

    }else if (k[1] === x) {
        y = k[0]
    }else{
        x = 'Freelancer'
        y = 'Web Developer'
    }

    y = y.split('')
    x = x.split('')
   

    setTimeout(function () { clearJob(x); }, 750)
    setTimeout(function () { createJob(y); }, 1500)


}, 4000)

function createJob(y) {
    i = 0;
    var k = ''
    var writeJob = setInterval(function () {
        console.log(y)
        if(y[i] != undefined){
            k = k + y[i]
        }
        job.innerText = k
        i++
        console.log(i)
        console.log(y.length)
        if (i >= y.length) {
            console.log('y')
            clearInterval(writeJob)
        }
    }, 50)
}
function clearJob(x) {
    var deleteJob = setInterval(function(){
        x.pop()
        console.log(x)
        var m = ''
        for(i=0;i<x.length;i++){
            if(x[i] != undefined){
                m = m+x[i]
            }
        }
        job.innerText = m;
        if (x.length == 0) {
            console.log('x')
            clearInterval(deleteJob)
        }
    },50)
}

