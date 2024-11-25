const cardPrice = document.querySelectorAll(".card h2")
const check = document.getElementById("check");
check.addEventListener("change",function(){
    const annual = check.checked
    cardPrice.forEach(function(myprice){
        const newPrice = annual ? myprice.dataset.annual : myprice.dataset.month;
        console.log(newPrice)
        myprice.innerHTML = `&dollar;${newPrice}`
    })
})
