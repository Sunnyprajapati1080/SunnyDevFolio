const navbar = document.querySelector("nav");
const about_heading = document.querySelector(".about .heading");
const about_img = document.querySelector(".about .main img");
const about_txt = document.querySelector(".about .main .about_txt");
const about_main = document.querySelector(".about .main");
const menu = document.getElementById("menu");
const sidebar = document.querySelector("header .sidebar");
const sidebar_items = document.querySelectorAll("header .sidebar .items");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("bg-white", scrollY > 15);
})
function visible(element) {
    const rect = element.getBoundingClientRect();
    if (rect.bottom < 0) return false;
    else if (rect.top > document.documentElement.clientHeight) return false
    else if (rect.top + (rect.height) <= rect.bottom) {
        return true
    }
}

window.addEventListener("scroll", () => {
    if (visible(about_img) == true || visible(about_txt) == true) {
        about_heading.style.visibility = "visible";
        about_img.style.visibility = "visible";
        about_txt.style.visibility = "visible";
        about_heading.style.animation = "slide_heading 1.2s ease-in 1 forwards";
        about_img.style.animation = "slide_img 1.2s ease-in 1 forwards";
        about_txt.style.animation = "slide_about 1.5s ease-in 1 forwards";
    } else if (visible(about_heading) == false && visible(about_main) == false) {
        about_heading.style.visibility = "hidden";
        about_img.style.visibility = "hidden";
        about_txt.style.visibility = "hidden";
        about_heading.style.animation = "none";
        about_img.style.animation = "none";
        about_txt.style.animation = "none";
    }
});
let isopen = false;
menu.addEventListener("click",()=>{
    if(isopen==true){
        sidebar.style.animation = "sidebar_in 0.2s ease-in 1 forwards";
    isopen = false;
    }else if(isopen==false){
    sidebar.style.display = "flex";
    sidebar.style.animation = "sidebar_out 0.2s ease-in 1 forwards";
    isopen = true;
    }
})
sidebar_items.forEach((item)=>{
    item.addEventListener("click",()=>{
        sidebar.style.animation = "sidebar_in 0.2s 1 forwards";
        isopen = false;
    })
})
const contact_btn = document.getElementById("btn_contact");
contact_btn.addEventListener("click",()=>{
    let perams = {
        from_name:document.getElementById("from_name").value,
        to_name:"sunny",
        message:document.getElementById("message").value,
        email:document.getElementById("email").value,
    };
    emailjs.send("service_3gi0dxb","template_ma2upkm",perams)
})
