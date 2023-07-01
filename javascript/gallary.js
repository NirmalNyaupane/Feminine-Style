const gallary = [
        {
            id:1,
            catagory:"business",
            title:"women power",
            img:"Image/Gallary/woman-3073289_1920.jpg"
        },
    {
        id:2,
        catagory:"beauty",
        title:"cusmetic lover",
        img:"Image/Gallary/cosmetics-1543271_1920-1024x683.jpg"
    },

    {
        id:3,
        catagory:"business",
        title:"independent",
        img:"Image/Gallary/pexels-photo-914931-1024x683.jpeg"
    },

    {
        id:4,
        catagory:"models",
        title:"fashion icon",
        img:"Image/Gallary/pexels-photo-324030-1024x683.jpeg"
    },
    {
        id:5,
        catagory:"beauty",
        title:"beauty Pagent",
        img:"Image/Gallary/pexels-photo-371110.jpeg"
    },
    {
        id:6,
        catagory:"travel",
        title:"Traveller",
        img:"Image/Gallary/barefoot1920x1280-1024x683.jpg"
    },
    {
        id:7,
        catagory:"business",
        title:"Business",
        img:"Image/Gallary/agreement-2548138_1920-1024x683.jpg"
    },
    {
        id:8,
        catagory:"models",
        title:"Cute Mode",
        img:"Image/Gallary/pexels-photo-324658-1024x682.jpeg"
    }
]


const gallaryContent = document.querySelector(".gallary-container");
const btnContainer = document.querySelector('.menu-btn');

//writing processMenu
const processMenu = (gallary) =>{
    const htmlContent = gallary.map(element=>{
        return `<div class="gallary-box">
        <div class="outer-layer">
            <img src="${element.img}" alt="${element.title}">

                 <div class="gallary-overlay">
                     <h2>${element.title}</h2>
                     <div class="search-box"><i class="fa-solid fa-magnifying-glass"></i></div>
                 </div>
        </div>
    </div>`;
    }).join("");

    gallaryContent.innerHTML=htmlContent;    
}

//writing processBtn logic
const processBtn = (gallary)=>{
      const uniqueCatagory = gallary.reduce((aggreage, element)=>{
        if(!aggreage.includes(element.catagory)){
            aggreage.push(element.catagory);
        }
        return aggreage;
    },["all"]);
    const uniqueBtn = uniqueCatagory.map(element=>{
        return `<button class="menu-btn-items" type="button" data-target="${element}"> ${element} </button>`;
    }).join("");
    btnContainer.innerHTML = uniqueBtn;

    const allBtn = document.querySelectorAll(".menu-btn-items");

    //btn click logic

    allBtn.forEach(element=>{
        element.addEventListener("click",(e)=>{
            const targetCatagory = e.target.getAttribute("data-target");
            if(targetCatagory==='all'){
                processMenu(gallary);
                return;
            }

            const showMenu = gallary.filter(element=>{
                return element.catagory==targetCatagory;
            });
            processMenu(showMenu);
        });
    });
}


const activeBtn = ()=>{
    const allBtn = document.querySelectorAll(".menu-btn-items");
    allBtn[0].classList.add("active-btn");

    btnContainer.addEventListener("click",(e)=>{
        const currentElement = e.target;
        const id = currentElement.getAttribute("data-target");

        if(id){
            allBtn.forEach(element=>{
                element.classList.remove("active-btn");
            });

            currentElement.classList.add("active-btn");
        }

    })
}

window.addEventListener("DOMContentLoaded",()=>{
    processMenu(gallary);
    processBtn(gallary);
    activeBtn();
});

