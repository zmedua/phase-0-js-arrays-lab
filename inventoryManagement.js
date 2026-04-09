// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct()
  {   
      console.log(products[0]);
  }
logFirstProduct(products);

 const addProduct = function( productName)
  {
    products.push(productName);
  }
addProduct(products,"bike");


const updateProductName = function(position,newName)
  {
    products.splice(position, 1, newName);
    return products;
    
  }
  updateProductName(1,"Tablet");
  

  const removeLastProduct = function()
    {
      products.pop()
    }
    removeLastProduct(products);
    
//Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
