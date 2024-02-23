let inp = document.querySelector("input");

let ul = document.querySelector("ul");

let btn = document.querySelector("#taskbtn");

let circle = document.querySelector(".box");

btn.addEventListener("click",function(){
    console.log("task was added");
    let item = document.createElement("li");
    if(inp.value != ""){
        item.innerText = inp.value;
        let dlt = document.createElement("button");
        dlt.innerText = "Delete";
        dlt.classList.add("delete");
        item.appendChild(dlt);
        
        ul.appendChild(item);
    }

    inp.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

circle.addEventListener("click",function(){
    console.log("task was added");
    let item = document.createElement("li");
    if(inp.value != ""){
        item.innerText = inp.value;
        let dlt = document.createElement("button");
        dlt.innerText = "Delete";
        dlt.classList.add("delete");
        item.appendChild(dlt);
        
        ul.appendChild(item);
    }

    inp.value = "";
})