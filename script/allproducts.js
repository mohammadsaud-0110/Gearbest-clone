let allproduct = JSON.parse(localStorage.getItem("allitems")) || [];

let numpro = allproduct.length;
document.querySelector("h3>span").innerText = "Total Products :"+ numpro;
for(let i=0;i<allproduct.length;i++){
    displayProduct(allproduct[i],i);
}

function getData()
{
    document.querySelector("#allprobody").innerHTML = "";
        allproduct.forEach((elem,index)=>{
            displayProduct(elem,index);
        })
    document.querySelector("h3>span").innerText = "Total Products :"+ numpro;
}

function displayProduct(val, i){
    let row = document.createElement("tr");

    let image = document.createElement("img");
    image.setAttribute("src",val.image);

    let td1 = document.createElement("td");
    td1.append(image);

    let td2 = document.createElement("td");
    td2.innerText= val.title;

    let td3 = document.createElement("td");
    td3.innerText = val.category;

    let td4 = document.createElement("td");
    td4.innerText = val.detail;

    let td5 = document.createElement("td");
    td5.innerText = val.price;

    let td6 = document.createElement("td");
    let button = document.createElement("button");
    button.innerHTML = "Remove Product";
    button.addEventListener("click",(e)=>{
        
        removeProduct(i)
    })
    td6.append(button);

    row.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("#allprobody").append(row);
}

function removeProduct(index)
{
    numpro--;
    allproduct = allproduct.filter((ele,ind)=>ind!==index)
    localStorage.setItem("allitems",JSON.stringify(allproduct))
    getData();
}
