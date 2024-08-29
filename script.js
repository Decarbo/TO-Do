const inputbox = document.getElementById('inputbox')
const listcontainer = document.getElementById('listcontainer')
function addtask(){
    if(inputbox.value===''){
        alert("Bro First Add your Task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value= "";
    save();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
show();