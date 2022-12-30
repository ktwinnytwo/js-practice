const form = document.querySelector('form');
/*NOTE: I tried equaling product to document.querySelector('input')[0].value,
but by doing this, it was stopping the e.preventDefault from working. It either
has to be inside the function block, or not set to value up here.*/
const product = document.querySelector('input[name="product"');
const qty = document.querySelector('input[name="qty"');
const list = document.querySelector('#list');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = `${qty.value} ${product.value}`;
    list.appendChild(li);
    form.reset();
    
})

/* Alternative:

const form = document.querySelector('form');
const list = document.querySelector('#list');
 
form.addEventListener('submit', function (e){
    e.preventDefault();
    const prodName = form.elements.product;
    const qty = form.elements.qty;
    addProduct(prodName.value, qty.value);
    prodName.value ='';
    qty.value ='';
});
 
 
const addProduct = (prodName,q) => {
    const newProd = document.createElement('li');
    newProd.innerText = (`${q} ${prodName}s`);
    list.appendChild(newProd);
};

*/