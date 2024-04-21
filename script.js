let eduBtn = document.querySelector("#eduBtn");
let skillBtn = document.querySelector("#skillBtn");
let expBtn = document.querySelector("#expBtn");
let contactBtn = document.querySelector("#contactBtn")

eduBtn.addEventListener("click", () =>{
    location="#eduPage";
    let eduPagelastchild = eduPage.lastElementChild;
    eduPagelastchild.classList.add("animate__animated", "animate__fadeInRight")
});


skillBtn.addEventListener("click", () =>{
    location="#skillpage";
    let skillContainer = document.querySelector(".skillsContainer");
    skillContainer.classList.add("animate__animated", "animate__fadeInRight");
});

expBtn.addEventListener('click', ()=>{
    location = "#workExpPage";
    let expContainer = document.querySelector(".experienceContainer");
    expContainer.classList.add("animate__animated", "animate__fadeInRight")
})

contactBtn.addEventListener("click", () =>{
    location="#contactPage";
});

