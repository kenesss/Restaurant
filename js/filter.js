const data = [
  {
    title: "PIZZA",
    src: "img/product-1.jpg",
    category: ["PIZZA"],
    name: "DOUBLE CHEESE PIZZA",
    price: "$15.30",
  },
  {
    title: "DESERTS",
    src: "img/product-2.jpg",
    category: ["DESERTS"],
    name: "SEAFOOD",
    price: "$23.99",
  },
  {
    title: "BURGERS",
    src: "img/product-3.png",
    category: ["BURGERS", "SALADS"],
    name: "DOUBLE MAC BURGER",
    price: "$13.80",
  },
  {
    title: "PASTA",
    src: "img/product-4.jpg",
    category: ["PASTA", "SALADS", "DESERTS"],
    name: "PASTA",
    price: "$16.99",
  },
  {
    title: "SALADS",
    src: "img/product-5.jpg",
    category: ["STEAKS", "BURGERS", "SALADS"],
    name: "BEEF CHEESE BURGER",
    price: "$11.50",
  },
  {
    title: "PIZZA",
    src: "img/product-6.jpg",
    category: ["PIZZA", "STEAKS"],
    name: "GRAND ITALIANO PIZZA",
    price: "$21.30",
  },
  {
    title: "DRINKS",
    src: "img/product-7.jpg",
    category: ["DRINKS", "STEAKS"],
    name: "LEMONADE",
    price: "$5.00",
  },
  {
    title: "DRINKS",
    src: "img/product-8.jpg",
    category: ["BURGERS", "STEAKS", "SALADS"],
    name: "CHICKEN BURGER",
    price: "$14.35",
  },
]; 

let topContent = document.getElementById("menu_header");
let items = document.getElementById("menu_content");

// let categories = []
// for(let item of data){
//     categories.push(item.category)
// }
// categories = [...new Set(categories)]

// let output = `<button class = "book-a-table menu-a-table" onclick = "filterItems('all')">all</button>`
// for(let category of categories){
//     output += `<button class = "book-a-table menu-a-table" onclick = "filterItems('${category}')">${category}</button>`;
// }
// topContent.innerHTML = output

let outputItems = ``
for(let item of data){
    outputItems += `
        <div class = "slider_item menu_item">
            <img src="${item.src}" alt="">
            <h3>${item.name}</h3>
            <p>Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.</p>
            <p class = "price">${item.price}</p>
        </div>
    `;
    items.innerHTML = outputItems
}

function filterItems(cat){
    let outputFilter = ``
    for(let item of data){
        for (let a of item.category){
            if (a == cat) {
                outputFilter += `
                    <div class = "slider_item menu_item">
                        <img src="${item.src}" alt="">
                        <h3>${item.name}</h3>
                        <p>Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.</p>
                        <p class = "price">${item.price}</p>
                    </div>
                `;
            } 
        }if (cat == "all") {
            outputFilter += `
                <div class = "slider_item menu_item">
                    <img src="${item.src}" alt="">
                    <h3>${item.name}</h3>
                    <p>Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.</p>
                    <p class = "price">${item.price}</p>
                </div>
            `;
        }
    }
    items.innerHTML = outputFilter
} 
