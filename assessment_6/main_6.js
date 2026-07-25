import products from './assess_6.js';
console.log("importing");
console.log(products);

const container=document.getElementById('productContainer');

products.forEach(product =>{
    const card=document.createElement('div');
    card.className="card";

    card.innerHTML=`
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p><i class="fa-solid fa-tag"></i>${product.price}</p>
    `

    container.appendChild(card);
});