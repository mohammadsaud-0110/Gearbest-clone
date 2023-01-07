
let inuser = localStorage.getItem("loggedinuser") || "";
document.querySelector("#loggeduser").textContent = `${inuser}`;
console.log(inuser)
let gridview = JSON.parse(localStorage.getItem("allitems"));

let selecteditem = JSON.parse(localStorage.getItem("cart")) || [];

display(gridview)

function display(data){
    for(let i=0;i<16;i++){
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",data[i].image);
        let title = document.createElement("h4");
        title.textContent = data[i].category;
        let price = document.createElement("p");
        price.textContent = "₹ "+ data[i].price;
        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.addEventListener("click",()=>{
            
                let a = [];
                a.push(1);
                a.push(data[i]);
                selecteditem.push(a);
                localStorage.setItem("cart",JSON.stringify(selecteditem));
                alert("Product Added to cart..!");
            
        })
        card.append(image,title,price,btn);
        document.querySelector(".grid-view").append(card);
    }
    
}

