const questions = document.querySelectorAll(".question");

// To active first question answer
const firstParent = questions[0].parentElement;
const firstAns = firstParent.querySelector(".answer");
firstAns.style.maxHeight = firstAns.scrollHeight + "px";
questions[0].classList.add("active-answer");


const accordians = document.querySelectorAll(".question-answer");
accordians.forEach(element=>{
    const currQn = element.querySelector(".question");
    
    currQn.addEventListener("click",(e)=>{
        const currAns = element.querySelector(".answer");
        if(currQn.classList.contains("active-answer")){
            currQn.classList.remove("active-answer");
            currAns.style.maxHeight=null;
        }else{
            removePreClass();
            currQn.classList.add("active-answer");
            currAns.style.maxHeight=currAns.scrollHeight+"px";
        }
    });
});

// Removing active class from all
function removePreClass(){
    accordians.forEach(element=>{
        const currQn = element.querySelector(".question");
        const currAns = element.querySelector(".answer");

        currQn.classList.remove("active-answer");
        currAns.style.maxHeight=null;
    });
}


