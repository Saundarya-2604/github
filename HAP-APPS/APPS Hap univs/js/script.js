


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container1 .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active');
        }
    });
};
});

previewBox.forEach(close=>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let product = [...document.querySelectorAll('.container1 .products-container1 .product')];
   for (var i = currentItem; i < currentItem + 3; i++){
    product[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= produc.length){
      loadMoreBtn.style.display = 'none';
   };
};




setInterval(my_function,5000); 
    function my_function(){
      console.log("reloading...");
      $('#refresh').load(location.href);
    }




