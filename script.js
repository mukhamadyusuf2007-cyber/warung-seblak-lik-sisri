let totalItems = 0;
let totalHarga = 0;

function addToCart(harga){

    totalItems++;
    totalHarga += harga;

    document.getElementById("cart-count").innerText =
    totalItems;

    document.getElementById("total-items").innerText =
    totalItems;

    document.getElementById("total-price").innerText =
    totalHarga.toLocaleString("id-ID");

    showNotification();
}

function showNotification(){

    const notif =
    document.getElementById("notification");

    notif.innerText =
    "Produk berhasil ditambahkan ke keranjang!";

    notif.style.display = "block";

    setTimeout(()=>{
        notif.style.display = "none";
    },2000);
}

document.querySelector(".checkout")
.addEventListener("click",()=>{

    if(totalItems === 0){
        alert("Keranjang masih kosong!");
        return;
    }

    alert(
        `Checkout berhasil!\nTotal Bayar: Rp ${totalHarga.toLocaleString("id-ID")}`
    );
});

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const keyword =
    searchInput.value.toLowerCase();

    document.querySelectorAll(".card")
    .forEach(card=>{

        const nama =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        if(nama.includes(keyword)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });
});

document.getElementById("filterMenu")
.addEventListener("change", function(){

    const value = this.value;

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        if(value === "all"){
            card.style.display = "block";
        }
        else if(card.classList.contains(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});