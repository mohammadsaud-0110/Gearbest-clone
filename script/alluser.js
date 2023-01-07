let uzr = JSON.parse(localStorage.getItem("allregistration")) || [];
// console.log(uzr.length)
for(let i=0;i<uzr.length;i++){
    displayUsers(uzr[i],i);
}

function getData()
{
    document.querySelector("#alluserbody").innerHTML = "";
        uzr.forEach((elem,index)=>{
            displayUsers(elem,index);
        })
}

function displayUsers(val, i){
    // console.log(val);
    let row = document.createElement("tr");
    let tdi = document.createElement("td");
    tdi.innerText = +i + 1;
    let td1 = document.createElement("td");
    td1.innerText= val.name;
    let td2 = document.createElement("td");
    td2.innerText = val.email;
    let td3 = document.createElement("td");
    let button = document.createElement("button");
    button.innerHTML = "Remove";
    button.addEventListener("click",(e)=>{
        // console.log(i);
        removeUser(i)
    })
    td3.append(button);
    row.append(tdi, td1, td2, td3);
    document.querySelector("#alluserbody").append(row);
    
}

function removeUser(index)
{
    uzr = uzr.filter((ele,ind)=>ind!==index)
    localStorage.setItem("allregistration",JSON.stringify(uzr))
    getData();
}