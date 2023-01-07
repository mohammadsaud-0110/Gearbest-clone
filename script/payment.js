let inuser = localStorage.getItem("loggedinuser") || "";
document.querySelector("#loggeduser").textContent = `${inuser}`;
let cartitem = JSON.parse(localStorage.getItem("cart")) || [];
const calculateSum = () => {
    let total = 0;
    for(let i=0;i<cartitem.length;i++){
        let temp = Number(cartitem[i][1].price);
        total += temp;
    }
    if(total===0){
        document.querySelector("#paybtn").style.display = "none";
    }
    document.querySelector("#total-amount").innerHTML = "₹: "+total;
    document.querySelector("#total-item").innerHTML = cartitem.length;
}


calculateSum();

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    cartitem = [];
    localStorage.setItem("cart",JSON.stringify(cartitem));
    alert("Order Placed Successfully.! Redirecting to homepage");
    window.location.href = "./homepage.html"
})