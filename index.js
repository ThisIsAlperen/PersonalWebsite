const homePage = document.getElementById('homePage')
const aboutPage = document.getElementById('aboutPage')
const portfolioPage = document.getElementById('portfolioPage')
const contactPage = document.getElementById('contactPage')

const Scroll = document.getElementById('scroll')


myFunction()

function myFunction() {
    Scroll.scrollIntoView()
}
b = document.getElementById('homeLink')
document.getElementById('homeLink').onclick= function(e){
    b.offsetTop
 console.log(b.offsetTop)
    $('html,main').animate({ //animate element that has scroll
        scrollTop: b.offsetTop //for scrolling
    }, 1000);
    e.preventDefault()
   
}

a = document.getElementById('aboutLink')
document.getElementById('aboutLink').onclick= function(e){
    console.log(a.offsetTop)
    console.log(a)
    a.offsetTop
    $('html,main').animate({ //animate element that has scroll
        scrollTop: a.offsetTop //for scrolling
    }, 1000);
    e.preventDefault()
}
    



// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       console.log(this)
    
     
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
//         console.log(this.hash)
        
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        
//         $('html, main').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
     
//           // Add hash (#) to URL when done scrolling (default click behavior)
          
//         });
//       } // End if
//     });
//   });