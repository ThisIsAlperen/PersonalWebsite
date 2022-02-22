const homePage = document.getElementById('homePage')
const aboutPage = document.getElementById('aboutPage')
const portfolioPage = document.getElementById('portfolioPage')
const contactPage = document.getElementById('contactPage')

const Scroll = document.getElementById('scroll')
const ScrollLinks = document.getElementById('scrollLinks')
const Main = document.querySelector('main')

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
    var x = document.getElementById('homeJob').children[0]
    if (k[0] === x.innerText) {
        k = k[1].split('')
        setTimeout(function () { yyy(k); }, 750)
    } 
    if (k[1] === x.innerText){
        k = k[0].split('')
        setTimeout(function () { yyy(k); }, 750)
    }
    x = x.innerText.split('')
    x = x.reverse()
    console.log(x)
    setTimeout(function () { xxx(x); }, 0)
}, 4000)


function xxx(x) {
    console.log(x)
    x.splice(0, 1)
    if (x.length > 0) {
        var y = ''
        x.reverse()
        for (i = 0; i < x.length; i++) {
            y = y + x[i]
        }
        setTimeout(function () {
            if (x.length == 1) {
                y = ''
                document.getElementById('homeJob').children[0].innerText = y

            }
        }, 100)

        document.getElementById('homeJob').children[0].innerText = y
        x.reverse()
        setTimeout(function () { xxx(x); }, 50)
    }
    if(x.length == 0){
        return;
    }

}
function yyy(k) {
    console.log(k)
    y = document.getElementById('homeJob').children[0].innerText
    y = y + k[0]
    console.log(y)
    k.splice(0, 1)


    setTimeout(function () { xxx(k); }, 50)

}
