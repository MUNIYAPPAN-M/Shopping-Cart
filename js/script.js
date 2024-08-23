const stock_products=[
    {
        id:1,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81BTRVfsuFL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
  
    {
        id:2,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/91ItZJh1FDL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" ,
    },
    {
        id:3,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81WimZLWH1L._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
    {
        id:4,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81BTRVfsuFL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
    {
        id:5,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81BTRVfsuFL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
    {
        id:6,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81BTRVfsuFL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
    {
        id:7,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81BTRVfsuFL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
    {
        id:8,
        name:"samsung galaxy M15",
        Brand:"samsung",
        image:"https://m.media-amazon.com/images/I/81BTRVfsuFL._SX679_.jpg",
        mrp:1699,
        price:14999,
        ram:"6gb",
        internal:"128gb" 
    },
]

const productSection=document.getElementById("productpage");

function loadStockProducts(){

    let output="";
    stock_products.forEach((product)=>{
        output+=`
        <div class="col">
            <div class="card h-100">
                <img class="card-img-top" src="${product.image}" alt="">
        
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5>${product.name}</h5>
                        <span class="text-muted"><b>Brand</b> : ${product.Brand}</span>
                        <span class="text-muted d-block "><b>storage</b>:${product.ram}/${product.internal}</span>
                        <span class="text-muted text-decoration-line-through">Rs${product.mrp}</span>
                        <span class="fw-bold text-success">Rs ${product.price}</span>
                    </div>
                </div>
        
            <div class="card-footer p-4 bg-transparent border-top-0">
        
                <div class="text-center">
                    <button class="btn  btn-primary"><i class="bi bi-cart-fill"></i>add to cart</button>
                </div>
            </div>    
        
        
            </div>
        </div>
        `;
    });
    productSection.innerHTML=output;
}
loadStockProducts()