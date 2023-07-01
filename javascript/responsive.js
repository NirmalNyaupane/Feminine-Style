const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-container");
hamburger.addEventListener("click",()=>{
    if(nav.classList.contains("show-navbar")){
        nav.classList.remove("show-navbar");
        nav.style.maxHeight=null;
        return;
    }
    nav.classList.add("show-navbar");
    nav.style.maxHeight=nav.scrollHeight+"px";
});

document.querySelector("body").addEventListener("click",()=>{
   
});
