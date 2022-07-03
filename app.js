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

const scrollLink=document.querySelectorAll(".scroll-link");

scrollLink.forEach(function(item){
    item.addEventListener("click",function(e){

        e.preventDefault();

        const id= e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        const navHeight= navSection.getBoundingClientRect().height;
        const fixNav= navSection.classList.contains("fixNav");
        let position = element.offsetTop;
        console.log(position);
        if (!fixNav) {
            position= position - 2*navHeight;
            console.log("nema fix "+ position);
        }
        if (fixNav) {
            position=position - navHeight;
            console.log("ima fix "+ position);
        }
        

        window.scrollTo({
            top:position, 
        })
              
    });
});

const toggleLinks = document.querySelector(".links");
const toggleMenu = document.querySelector(".toggle-nav");

toggleMenu.addEventListener("click", function(){
    toggleLinks.classList.toggle("show-links");
});

