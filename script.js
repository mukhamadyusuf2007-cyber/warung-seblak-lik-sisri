// ==========================
// KONFIGURASI
// ==========================

const whatsappNumber = "6282226362669";

// ==========================
// DATA PRODUK
// ==========================

const products = [

{
id:1,
name:"Seblak Original",
price:10000,
category:"makanan",
image:"https://anakkota.com/wp-content/uploads/2019/03/seblak-sultan.jpg",
desc:"Seblak original pedas nikmat"
},

{
id:2,
name:"Seblak Ceker",
price:12000,
category:"makanan",
image:"https://thumb.viva.id/intipseleb/665x374/2022/06/08/62a0adad0dfb4-resep-seblak-ceker.jpg",
desc:"Seblak ceker favorit"
},

{
id:3,
name:"Seblak Komplit",
price:15000,
category:"makanan",
image:"https://kabarbaik.co/wp-content/uploads/2024/07/seblak-komplit.jpeg",
desc:"Isi lengkap dan mantap"
},

{
id:4,
name:"Gorengan",
price:8000,
category:"makanan",
image:"https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/667d1712-d456-4fe0-ad76-00724630a5b5_7f9c4766-f058-443e-a555-4a02209775c8_Go-Biz_20200217_185211.jpeg?resize=728%2C500",
desc:"Gorengan hangat"
},

{
id:5,
name:"Mie Ayam",
price:10000,
category:"makanan",
image:"https://img.freepik.com/premium-photo/mie-ayam-indonesian-food_782296-6.jpg",
desc:"Mie ayam lezat"
},

{
id:6,
name:"Sempol",
price:8000,
category:"makanan",
image:"https://thumb.viva.id/vivaolret/1265x711/2024/07/13/6691bc18bf940-sempol-ayam_olret.jpg",
desc:"Sempol gurih"
},

{
id:7,
name:"Es Teh",
price:3000,
category:"minuman",
image:"https://i.pinimg.com/originals/5d/31/ef/5d31ef90cd6c389e07bc48a08e583122.jpg",
desc:"Es teh segar"
},

{
id:8,
name:"Es Buah",
price:10000,
category:"minuman",
image:"https://allofresh.id/blog/wp-content/uploads/2023/11/resep-es-buah-4.jpg",
desc:"Campuran buah segar"
},

{
id:9,
name:"Es Teler",
price:8000,
category:"minuman",
image:"https://cdn1-production-images-kly.akamaized.net/B6gV6yQSGrvYt1d_wz4itdVBDYM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4370114/original/080957600_1679639677-Instagram_nitya_dk.jpg",
desc:"Es teler spesial"
},

{
id:10,
name:"Marimas",
price:1000,
category:"minuman",
image:"https://www.maklonminuman.co.id/wp-content/uploads/2019/01/marimas.jpg",
desc:"Minuman favorit"
},

{
id:11,
name:"Tea Jus",
price:1000,
category:"minuman",
image:"https://i.pinimg.com/originals/ab/55/45/ab5545c373f782c6fea367e6c148c267.jpg",
desc:"Tea jus segar"
},

{
id:12,
name:"Matcha",
price:7000,
category:"minuman",
image:"https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg",
desc:"Matcha premium"
},

{
id:13,
name:"Kopi Panas",
price:5000,
category:"minuman",
image:"https://www.maklonminuman.co.id/wp-content/uploads/2018/12/kopi-indonesia.jpg",
desc:"Kopi panas"
},

{
id:14,
name:"Es Kopi",
price:5000,
category:"minuman",
image:"https://therecipemaster.com/wp-content/uploads/2024/11/Brown-Sugar-Shaken-Espresso-Recipe1.webp",
desc:"Kopi hangat nikmat"
}
];

// ==========================
// LOCAL STORAGE
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==========================

const foodContainer=document.getElementById("foodContainer");
const drinkContainer=document.getElementById("drinkContainer");

function renderProducts(){

foodContainer.innerHTML="";
drinkContainer.innerHTML="";

products.forEach(product=>{

const card=`
<div class="card product-card"
data-category="${product.category}"
data-name="${product.name.toLowerCase()}">

<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p>${product.desc}</p>
<h4>Rp ${product.price.toLocaleString()}</h4>

<button onclick="addToCart(${product.id}, this)">
Tambah ke Keranjang
</button>

</div>
</div>
`;

if(product.category==="makanan"){
foodContainer.innerHTML+=card;
}else{
drinkContainer.innerHTML+=card;
}

});
}

renderProducts();

// ==========================

function addToCart(id, button){

    function addToCart(id, button){

    animateToCart(button);

    // kode lainnya...
}
animateToCart(button);

const item = products.find(p => p.id === id);

// kode keranjang yang sudah ada...const item = products.find(p => p.id === id);

const exist = cart.find(i => i.id === id);

if(exist){
    exist.qty++;
}else{
    cart.push({...item, qty:1});
}

saveCart();

showToast("Produk ditambahkan");
const cartIcon = document.getElementById("cartBtn");

cartIcon.classList.add("cart-bounce");

setTimeout(() => {
    cartIcon.classList.remove("cart-bounce");
}, 500);
}

function flyToCart(button, imageSrc){

    const cart = document.getElementById("cartBtn");

    const rectStart = button.getBoundingClientRect();
    const rectEnd = cart.getBoundingClientRect();

    const fly = document.createElement("img");

    fly.src = imageSrc;
    fly.classList.add("fly-item");

    fly.style.left = rectStart.left + "px";
    fly.style.top = rectStart.top + "px";

    document.body.appendChild(fly);

    setTimeout(() => {
        fly.style.left = rectEnd.left + "px";
        fly.style.top = rectEnd.top + "px";
        fly.style.width = "20px";
        fly.style.height = "20px";
        fly.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        fly.remove();
    }, 900);
}

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

renderCart();
}

function updateCartCount(){

document.getElementById("cartCount").innerText=
cart.reduce((a,b)=>a+b.qty,0);

}

updateCartCount();

function renderCart(){

const container=document.getElementById("cartItems");

container.innerHTML="";

let total=0;
let items=0;

cart.forEach(item=>{

const subtotal=item.price*item.qty;

total+=subtotal;
items+=item.qty;

container.innerHTML+=`
<div class="cart-item">

<div>
<b>${item.name}</b><br>
Rp ${subtotal.toLocaleString()}
</div>

<div>

<button class="qty-btn"
onclick="changeQty(${item.id},-1)">-</button>

${item.qty}

<button class="qty-btn"
onclick="changeQty(${item.id},1)">+</button>

<button onclick="addToCart(${item.id}, this)">
Tambah ke Keranjang
</button>
</div>

</div>
`;
});

document.getElementById("totalItems").innerText=items;
document.getElementById("totalPrice").innerText=
total.toLocaleString();
}

renderCart();

function changeQty(id,val){

const item=cart.find(i=>i.id===id);

item.qty+=val;

if(item.qty<=0){
cart=cart.filter(i=>i.id!==id);
}

saveCart();
}

function removeItem(id, btn){

cart=cart.filter(i=>i.id!==id);

saveCart();

showToast("Produk dihapus");
}

document.getElementById("clearCart")
.onclick=()=>{

cart=[];

saveCart();

};

// ==========================
// MODAL
// ==========================

const modal=document.getElementById("cartModal");

document.getElementById("cartBtn")
.onclick=()=>modal.style.display="flex";

document.getElementById("closeCart")
.onclick=()=>modal.style.display="none";

// ==========================
// SEARCH
// ==========================

document.getElementById("searchInput")
.addEventListener("keyup",e=>{

const keyword=e.target.value.toLowerCase();

document.querySelectorAll(".product-card")
.forEach(card=>{

card.style.display=
card.dataset.name.includes(keyword)
? "block"
: "none";

});

});

// ==========================
// FILTER
// ==========================

document.querySelectorAll(".filter-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const category=btn.dataset.filter;

document.querySelectorAll(".product-card")
.forEach(card=>{

if(category==="all"){
card.style.display="block";
}else{
card.style.display=
card.dataset.category===category
? "block"
: "none";
}

});

});

});

// ==========================
// CUSTOMER DATA
// ==========================

["customerName",
"customerPhone",
"customerAddress",
"customerNote"]
.forEach(id=>{

const el=document.getElementById(id);

el.value=localStorage.getItem(id)||"";

el.addEventListener("input",()=>{

localStorage.setItem(id,el.value);

});

});

// ==========================
// CHECKOUT WA
// ==========================

document.getElementById("checkoutBtn")
.onclick=()=>{

if(cart.length===0){
alert("Keranjang kosong");
return;
}

const name=document.getElementById("customerName").value;
const phone=document.getElementById("customerPhone").value;
const address=document.getElementById("customerAddress").value;
const note=document.getElementById("customerNote").value;

let text=
`Pesanan Baru Warung Seblak Lik Sisri

Nama: ${name}
WhatsApp: ${phone}
Alamat: ${address}

Pesanan:
`;

let total=0;

cart.forEach(item=>{

text+=`• ${item.name} x${item.qty}
`;

total+=item.price*item.qty;

});

text+=`
Total: Rp${total.toLocaleString()}

Catatan:
${note}
`;

window.open(
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
"_blank"
);

showToast("Checkout berhasil");
};

// ==========================
// TOAST
// ==========================

function showToast(message){

const toast=document.getElementById("toast");

toast.innerText=message;

toast.classList.add("show-toast");

setTimeout(()=>{

toast.classList.remove("show-toast");

},2500);
}

function flyToCart(button, imageSrc){

    const cart = document.getElementById("cartBtn");

    const rectStart = button.getBoundingClientRect();
    const rectEnd = cart.getBoundingClientRect();

    const fly = document.createElement("img");

    fly.src = imageSrc;
    fly.classList.add("fly-item");

    fly.style.left = rectStart.left + "px";
    fly.style.top = rectStart.top + "px";

    document.body.appendChild(fly);

    setTimeout(() => {
        fly.style.left = rectEnd.left + "px";
        fly.style.top = rectEnd.top + "px";
        fly.style.width = "20px";
        fly.style.height = "20px";
        fly.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        fly.remove();
    }, 900);
    
}

function animateToCart(button){

    const card = button.closest(".card");
    if(!card) return;

    const img = card.querySelector("img");
    const cart = document.getElementById("cartBtn");

    if(!img || !cart) return;

    const flying = img.cloneNode(true);

    const start = img.getBoundingClientRect();
    const end = cart.getBoundingClientRect();

    flying.style.position = "fixed";
    flying.style.left = start.left + "px";
    flying.style.top = start.top + "px";
    flying.style.width = "200px";
    flying.style.height = "100px";
    flying.style.borderRadius = "50%";
    flying.style.zIndex = "99999";
    flying.style.transition = "all 0.8s ease";

    document.body.appendChild(flying);

    requestAnimationFrame(() => {
        flying.style.left = end.left + "px";
        flying.style.top = end.top + "px";
        flying.style.width = "20px";
        flying.style.height = "20px";
        flying.style.opacity = "0";
    });

    setTimeout(() => {
        flying.remove();
    }, 900);
}

function searchMenu(){
  const search = document.getElementById("searchInput").value.toLowerCase();

const foodList = document.getElementById("foodList");
const drinkList = document.getElementById("drinkList");

if(!foodList || !drinkList){
  console.error("Element foodList / drinkList tidak ditemukan di HTML");
  return;
}
  let targetElementId = null;

  products.forEach(p=>{
    const match = p.name.toLowerCase().includes(search);

    if((filter==="all" || filter===p.type) && match){

      const card = `
        <div class="card" id="item-${p.id}">
          <h3>${p.name}</h3>
          <p>Rp${p.price}</p>
          <button class="btn" onclick="addToCart(${p.id})">Tambah</button>
        </div>
      `;

      if(p.type === "makanan"){
        foodList.innerHTML += card;
      } else {
        drinkList.innerHTML += card;
      }

      // simpan item pertama yang ketemu
      if(!targetElementId){
        targetElementId = p.id;
      }
    }
  });

  // 🔥 SCROLL SETELAH RENDER
  setTimeout(()=>{
    if(targetElementId){
      document.getElementById(`item-${targetElementId}`)
        .scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    } else {
      toast("Menu tidak ditemukan");
    }
  }, 100);
}

function scrollToMenu(){
  document.getElementById("makanan")
    .scrollIntoView({behavior:"smooth"});
}

