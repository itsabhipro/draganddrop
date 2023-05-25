const drag_area = document.querySelector(".drag_area");
const fileInput = document.querySelector("#file_input");

drag_area.addEventListener("dragover",(e)=>{
    e.preventDefault();
    drag_area.classList.add("drag_over");
});
drag_area.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    drag_area.classList.remove("drag_over");
})
drag_area.addEventListener("drop",(e)=>{
    e.preventDefault();
    drag_area.classList.remove("drag_over");
    setImage(e.dataTransfer.files[0]);
})
fileInput.addEventListener("change",(e)=>{
    setImage(fileInput.files[0]);
})
function setImage(image){
    const reader = new  FileReader();
    console.log(image);
    reader.readAsDataURL(image);
    reader.onload = ()=>{
        //console.log(reader.result);
        
        drag_area.style.background= "url("+reader.result+") no-repeat center";
        drag_area.querySelector("p").innerHTML=""
    }
}