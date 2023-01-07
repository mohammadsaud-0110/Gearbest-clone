let inuser = localStorage.getItem("loggedinuser") || "";
document.querySelector("#loggeduser").textContent = `${inuser}`;

let cartitem = JSON.parse(localStorage.getItem("cart")) || [];

display(cartitem)

function display(data){
    document.querySelector(".item-list").innerHTML = "";
    data.forEach((ele,index) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",ele[1].image);
        let des = document.createElement("div");
        let title = document.createElement("h4");
        title.textContent = ele[1].title;
        let price = document.createElement("p");
        price.textContent = "₹ "+ ele[1].price;
        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click",()=>{
            removeItem(index);
        })
        des.append(title,price,btn);
        card.append(image,des);
        document.querySelector(".item-list").append(card);
    });
        
}

function removeItem(index){
    cartitem = cartitem.filter((item,i) => i!==index)
    localStorage.setItem("cart",JSON.stringify(cartitem));
    alert("Item removed from Cart.!");
    
    display(cartitem);
    calculateSum();
}

const calculateSum = () => {
    let total = 0;
    for(let i=0;i<cartitem.length;i++){
        let temp = Number(cartitem[i][1].price);
        total += temp;
    }
    if(total===0){
        document.querySelector("#paybtn").style.display = "none";
    }
    document.querySelector("#total-amount").innerHTML = total;
    document.querySelector("#total-item").innerHTML = cartitem.length;
}


calculateSum();