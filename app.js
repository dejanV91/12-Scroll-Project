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

        const elementFind=document.q
        let position = element.offsetTop;
        
        if (!fixNav) {
            position= position - 2*navHeight;
        }
        if (fixNav) {
            position=position - navHeight;
        }
        

        window.scrollTo({
            top:position, 
        })
              
    });
});

const toggleLinks = document.querySelector(".links");
const toggleMenu = document.querySelector(".toggle-nav");

toggleMenu.addEventListener("click", ()=>{
    toggleLinks.classList.toggle("show-links");
    const linksElement=document.querySelectorAll(".link");
    linksElement.forEach(function(e){
        e.addEventListener("click", function(a){

            a.preventDefault();

            const elemLinks=e.querySelector(".scroll-link");
            const elem=elemLinks.getAttribute("href").slice(1);

            if (toggleLinks.classList.contains("show-links")) {
                toggleLinks.classList.remove("show-links");
                
                const item=document.getElementById(elem);
                
                let position = item.offsetTop-150;
                
                window.scrollTo({
                    top:position,
                });
            } 
            
        })
    });
});

