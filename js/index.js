// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  let subtotal=price*quantity;
  product.querySelector('.subtotal span').innerHTML=subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products=document.getElementsByClassName('product');
  /*let total=0;
  for(p of products){
    total+= updateSubtotal(p);
  }
  */
  let total=0;
  
  for(let i=0;i<products.length;i++){
    total+=updateSubtotal(products[i]);
    
  };
 
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML=total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target);
  console.log('The target in remove is:', target.parentNode);
  let product=target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let new_prod=
console.log("Presiona aqui!!!!")

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... para añadir funcionalidad al boton remove
  const removeBtn = document.getElementsByClassName('btn btn-remove');

  for(btn of removeBtn){
    btn.addEventListener('click',removeProduct);
  }
  
  //... para añadir el btn create product
  const addBtn = document.getElementById('create');
  addBtn.addEventListener('click',createProduct);

   
});
