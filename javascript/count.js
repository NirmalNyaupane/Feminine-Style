const count = document.querySelectorAll(".count");
const statistics = document.querySelector(".statistics");
const speed = 30;

const options = {
    rootMargin:"-100px 0px 0px -100px"
};

const countObserver = new IntersectionObserver((entries, observer)=>{
    entries.forEach((element)=>{
        // console.log(element);
        if(!element.isIntersecting){
            return;
        }
        count.forEach(element=>{
            function update(){
                const targetNumber = Number(element.dataset.set);
                let initialNumber = Number(element.innerText);
                
                if(initialNumber<targetNumber){
                    let interval = Math.floor(targetNumber/speed);
                    // initialNumber+=interval;
                    element.innerText=initialNumber+interval;
                    setInterval(update,300)
                }
            }
        
        
            update();
        });
        observer.unobserve(statistics);
    });
},options)

countObserver.observe(statistics);