var noDrumBtn = document.querySelectorAll("img").length;
console.log('No of Buttons :' +noDrumBtn);
var x  = document.querySelectorAll("img");
console.log(x);
var resetBtn = document.getElementById('reset');
var verifyBtn = document.getElementById('verify');
var verifyText = document.getElementById('verifyMsg');



// const images = document.getElementsByTagName("img");

function toggleImageClass(event) {
    const imgElement = event.target;
    const isImageSelected = imgElement.classList.toggle('selected');
  
    // Check the number of selected images
    const selectedImages = document.querySelectorAll('.selected');



    // Allow up to two selected images
    if (selectedImages.length > 2) {
      imgElement.classList.remove('selected');
      
    }
    if(selectedImages.length > 0){
        resetBtn.classList.remove('d-none')
    }
    if(selectedImages.length <= 0){
        resetBtn.classList.add('d-none')
        verifyBtn.classList.add('d-none');
    }
    if(selectedImages.length == 1){
        verifyBtn.classList.add('d-none');
    }
    if(selectedImages.length == 2){
        verifyBtn.classList.remove('d-none');
    }
  }

  const images = document.getElementsByTagName('img');
  for (const img of images) {
    img.addEventListener('click', toggleImageClass);
  }

  function removeSelectedClass(){
    for (const img of images) {
        if(img.classList.contains('selected')){
            img.classList.remove('selected')
        }
    }
    verifyBtn.classList.add('d-none');
    resetBtn.classList.add('d-none')
    verifyText.innerHTML = '';
  }

  function checkCommonClass(){
    const classNameSet = new Set();
    const selectedImages = document.querySelectorAll('.selected');
    console.log(selectedImages)
    selectedImages.forEach(el => {
        const classList = Array.from(el.classList);
        classList.forEach(className => {
            classNameSet.add(className)
        })
        
    });
    const uniqueClassName = Array.from(classNameSet);
    console.log(uniqueClassName.length);
    if(uniqueClassName.length == 2){
        verifyText.innerHTML = 'You are human!! Congratulations';
    }else{
        verifyText.innerHTML = `We can't verify you as human!!`;
    }
  }

  function verifySelectedImg(){
    checkCommonClass()
  }

  resetBtn.addEventListener('click', removeSelectedClass);
  verifyBtn.addEventListener('click', verifySelectedImg);


