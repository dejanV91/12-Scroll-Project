const year= document.getElementById("year");
year.innerHTML= new Date().getFullYear();

const pointToHome=document.querySelector(".pointToHome");
const navSection=document.querySelector(".nav-section");

window.addEventListener("scroll", function(){
    const scrollHeight= window.pageYOffset;
    
    if (scrollHeight===0) {
        navSection.classList.remove("fixNav");
    }
    else{
        navSection.classList.add("fixNav");
    }
    
    if (scrollHeight > 500) {
        pointToHome.classList.add("show-arrow");
    } else {
        pointToHome.classList.remove("show-arrow");
    }
    
})

