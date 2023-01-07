let productArr = JSON.parse(localStorage.getItem("allitems")) || [];

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj = {
        title : form.title.value,
        price : form.price.value,
        image : form.image.value,
        detail : form.detail.value,
        category : form.category.value
    };
    if(form.category.value == ""){
        alert("Select the catergory first !");
    }
    else{
        productArr.push(obj);
        localStorage.setItem("allitems", JSON.stringify(productArr));
        alert('product added successfully')
        form.reset();
    }
    // console.log("Submitted successfully");
})