let sideMenu = document.querySelector('#side-menu');
let sideBar = document.querySelector('.side-bar');

sideMenu.onclick = () =>{
   sideMenu.classList.toggle('fa-times');
   sideBar.classList.toggle('active');
};


let galleryImages = document.querySelectorAll('.image-container  img');
let imagePop = document.querySelector('.image-popup');


// -----------------------------------------------------------------------------------------------------
let categoryBtn1 = document.querySelectorAll('.category .btn');
let typeBtn1 = document.querySelectorAll('.type .btn');
let boxItems = document.querySelectorAll('#box1 .image1');

categoryBtn1.forEach(btn => {
  btn.onclick = () => {
    categoryBtn1.forEach(remove => remove.classList.remove('active'));
    let dataCategory = btn.getAttribute('data-category');
    boxItems.forEach(item => {
      let itemCategory = item.querySelector('img').getAttribute('data-cat');
      if (dataCategory === 'all' || dataCategory === itemCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    btn.classList.add('active');
  };
});

typeBtn1.forEach(btn => {
  btn.onclick = () => {
    typeBtn1.forEach(remove => remove.classList.remove('active'));
    let dataType = btn.getAttribute('data-type');
    boxItems.forEach(item => {
      let itemType = item.querySelector('img').src.split('.').pop();
      if (dataType === 'all' || dataType === itemType) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    btn.classList.add('active');
  };
});



//------------------------------------------------------------------------------------------------------
// let bookTitle ;
// console.log(bookTitle);

galleryImages.forEach(img =>{
   img.onclick = () =>{
    
    
    
    let cardTitle=document.querySelector(' .card-body .card-title');
    let imageTitle =img.getAttribute('data-search');
    cardTitle .   textContent =imageTitle;


    let cardText=document.querySelector('.frame  .image-popup .card  .card-body .card-text');
    let imageText=img.getAttribute('alt');
    cardText.   textContent = imageText

    
      
      let CardPop = document.querySelector('.frame');
      
    
      let imageSrc = img.getAttribute('src');
      imagePop.style.display = 'flex';
      imagePop.querySelector('img').src = imageSrc;
   };
  

});

imagePop.onclick = () =>{
   imagePop.style.display = 'none';
};



//edited
/* let carddetailes = document.querySelectorAll(' .card-body .card-title');
let CardPop = document.querySelector('.image-popup');


carddetailes.forEach(h5 =>{
   h5.textContent = bookTitle;
    h5.onclick = () =>{
        let CardSrc = h5.getAttribute('class');
        CardPop.style.display = 'flex';
        CardPop.querySelector('img').className = CardSrc;

    }
}) */
//------------------------------------------------------------------------------------------------

document.querySelector('#search-box').oninput = () =>{
   var value = document.querySelector('#search-box').value.toLowerCase();
   galleryImages.forEach(img =>{
      var filter = img.getAttribute('data-search').toLowerCase();
      if(filter.indexOf(value) > -1){
         img.style.display = 'block';
      }else{
         img.style.display = 'none';
      };
   });


   
};

let categoryBtn = document.querySelectorAll('.category .btn');

categoryBtn.forEach(btn =>{
   btn.onclick = () =>{
      categoryBtn.forEach(remove => remove.classList.remove('active'));
      let dataCategory = btn.getAttribute('data-category');
      galleryImages.forEach(img =>{
         var imgCat = img.getAttribute('data-cat');
         if(dataCategory == 'all'){
            img.style.display = 'block';
         }else if(dataCategory == imgCat){
            img.style.display = 'block';
         }else{
            img.style.display = 'none';
         }
      });
      btn.classList.add('active');
   };
});

let typeBtn = document.querySelectorAll('.type .btn');

typeBtn.forEach(btn =>{
   btn.onclick = () =>{
      typeBtn.forEach(remove => remove.classList.remove('active'));
      let datatype = btn.getAttribute('data-type');
      galleryImages.forEach(img =>{
         var imgtype = img.getAttribute('src').split('.').pop();
         if(datatype == 'all'){
            img.style.display = 'block';
         }else if(datatype == imgtype){
            img.style.display = 'block';
         }else{
            img.style.display = 'none';
         }
      });
      btn.classList.add('active');
   };
});

document.querySelector('.reset-btn .btn').onclick = () =>{
   window.location.reload();
};

let heartIcon = document.querySelector('#heart');

heartIcon.addEventListener('click', () => {
  alert('Item added to favorites!');
});