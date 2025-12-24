// Context Menu
let contextMenu = document.querySelector("#context-menu");

function ShowContextMenu(dets){
    let menu = contextMenu;

    let rec = menu.getBoundingClientRect();
    let x = dets.clientX;
    let y = dets.clientY;
    if(x+rec.width > window.innerWidth - 10){
        x = x - rec.width;
    }else if(y+rec.height > window.innerHeight - 50){
        y = y - rec.height;
    }

    menu.classList.remove("open");
    menu.offsetWidth;
    menu.style.top = y + "px";
    menu.style.left = x + "px";
    contextMenu.classList.add("open");
}
function hideContextMenu() {
  contextMenu.classList.remove("open");
}

window.addEventListener("contextmenu", function(dets){
    if(!(window.innerHeight === screen.height)) return;
    dets.preventDefault();
    if (dets.target.closest(".folder") || dets.target.closest("#taskbar") || dets.target.closest("#context-menu")){return;}

    ShowContextMenu(dets);
})
window.addEventListener("keydown", function(dets){
    if(dets.key === "Escape") contextMenu.style.display = "none";
})
window.addEventListener("click",()=>{
    hideContextMenu();
})


// Files About 
let folder = document.querySelectorAll(".folder");
let timer;
let activeMenu;
folder.forEach(item => {
    let aboutMenu = item.querySelector(".about");
    item.addEventListener("mouseenter", function(){
        timer = setTimeout(() => {
            activeMenu = aboutMenu;
            aboutMenu.style.display = "block";
        }, 600);
    })
    item.addEventListener("mouseleave", () => {
        clearTimeout(timer);
        if (activeMenu === aboutMenu) {
        aboutMenu.style.display = "none";
        activeMenu = null;
    }
  })
})


// View Submenu
let viewlistSubmenu = document.querySelectorAll("#viewlist .submenu-items h5");
let computer = document.querySelector("#computer");
let icons = document.querySelectorAll(".icons .folder i");
let folderName = document.querySelectorAll(".icons .folder h6");

viewlistSubmenu.forEach(item => {
    item.addEventListener("click", ()=>{
        document.querySelector("#viewlist .submenu-items h5.active").classList.remove("active"); 
        
        item.classList.add("active");
        console.log(document.querySelector("#viewlist .submenu-items h5.active").innerHTML);
        if (document.querySelector("#viewlist .submenu-items h5.active").innerHTML === "Large Icons"){
            computer.style.width = 80 + "px";
            computer.style.height = 80 + "px";
            icons.forEach(items => {
                items.style.fontSize = 70 + "px";
            })
            folderName.forEach(item => {
                item.style.fontSize = "large";
            })
        }
        else if(document.querySelector("#viewlist .submenu-items h5.active").innerHTML === "Medium Icons"){
            computer.style.width = 60 + "px";
            computer.style.height = 60 + "px";
            icons.forEach(items => {
                items.style.fontSize = 60 + "px";
            })
            folderName.forEach(item => {
                item.style.fontSize = "medium";
            })
        }
        else if(document.querySelector("#viewlist .submenu-items h5.active").innerHTML === "Small Icons"){
            computer.style.width = 40 + "px";
            computer.style.height = 40 + "px";
            icons.forEach(items => {
                items.style.fontSize = 50 + "px";
            })
            folderName.forEach(item => {
                item.style.fontSize = "small";
            })
        } 
        
    })
})

//Submenu Hover
document.querySelectorAll(".has-submenu").forEach((item) =>{
    let submenu = item.querySelector(".submenu");

    item.addEventListener("mouseenter", () => {

        submenu.style.left = "100%";
        submenu.style.right = "auto";
        submenu.style.top = "-5px";
        submenu.style.bottom = "auto";

        const rect = submenu.getBoundingClientRect();
        console.log(rect.bottom);
        const usableheight = window.innerHeight - 50;

        if (rect.right > window.innerWidth){
            submenu.style.left = "auto";
            submenu.style.right = "100%";
        }

        if (rect.bottom > usableheight) {
            const overflow = rect.bottom - usableheight;
            submenu.style.top = `-${overflow}px`;
        }
    })
})