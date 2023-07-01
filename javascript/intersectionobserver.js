const headingItems = document.querySelector(".heading-items");
const navbar = document.querySelector(".navbar");
const downUpBtn = document.querySelector(".down-to-up");
const heading = document.querySelector(".heading");
const navbaroption = {
    rootMargin:"-260px 0px 0px 0px"
};
const navbarObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            navbar.classList.remove("nav-strickly");
            downUpBtn.classList.remove("down-to-up-active");
        }else{
            navbar.classList.add("nav-strickly");
            downUpBtn.classList.add("down-to-up-active");
        }
    })
},navbaroption)

navbarObserver.observe(headingItems);

//down to up function
downUpBtn.addEventListener("click",(e)=>{
    
    heading.scrollIntoView({behavior:"smooth"});
});