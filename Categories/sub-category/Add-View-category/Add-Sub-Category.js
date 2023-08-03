
let chosenimage = document.getElementById('chosen-image')
let uploadButton = document.getElementById('uploadButton')
let fileName = document.getElementById('file-name')

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () => {
        chosenimage.setAttribute("src", reader.result);

    }
}



    let CategoryMove = document.querySelector('#Category-move');       
    CategoryMove.addEventListener('click', function (e) {
         e.preventDefault();
         let firstInput=document.getElementById('first-input').value;
             console.log(firstInput);        
             location.href = "../Sub-Category.html";
    })