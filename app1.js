let btn = document.querySelector("Button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);//.nodeName batata hain ki kiss cheez ne button ko trigger kiya
    // console.log("Button clicked");
    if(event.target.nodeName == "BUTTON"){
        let ListItem = event.target.parentElement;
        ListItem.remove();
        console.log("deleted");
    }
});

// let delbtns = document.querySelectorAll(".Delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

