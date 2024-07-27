getAll(urlCategory, displayCategories);
const storage = firebase.storage();
let idDelete;
var categoriesData;
var urlImg ;

function displayCategories(data){
    let categories = document.getElementById("data-categories");
    categoriesData =data; 
    data.forEach((element,index) => {
   
        categories.innerHTML += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>
            <img style="width: 50px;" src="${element.logo}" alt="">
        </td>
        <td>${element.nameCategory}</td>
        <td>${element.nameBrand}</td>
        <td>
            <button type="button" data-bs-toggle="modal" data-bs-target="#modalEdit" class="btn btn-success" onclick="editById(${element.id})" > <i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="getthao(${element.id})" type="button" data-bs-toggle="modal" data-bs-target="#deleteCategories" class="btn btn-danger" > <i class="fa-solid fa-trash"></i></button>
        </td>
        <tr/>
        `;
    });
}
function getthao(id){
   
   console.log("thao",id);
};
function deleteCategories(){
    deleted(urlCategory,idDelete);
}
function editById(id) {
    var title2 = document.getElementById("updateCategory");
    title2.innerText = "UPDATE";
    var title = document.getElementById("add-category");
    title.innerText = "EDIT CATEGORY";
    idDelete= id;
    var name = document.getElementById("nameCategory");
    var brand = document.getElementById("brandCategory");
    var img = document.getElementById("img-category");
  const category =  categoriesData.find(element => element.id == id);
  name.value = category.nameCategory;
  brand.value = category.nameBrand;
  img.src = category.logo;
}


function handleFileChange(event){
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById ("img-category").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

}

document.getElementById("addCategory").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
        console.log("validate error");
        return;
    }
    var name = document.getElementById("nameCategory").value;
    var brand = document.getElementById("brandCategory").value;
    var imgUploading = await  uploadImage();
    var category = {
        nameCategory: name,
        nameBrand: brand,
        logo: imgUploading
    }
    if(idDelete) {
        edit(urlCategory,idDelete,category)
    }else {
        add(urlCategory,category);
    }
  
})

function uploadImage() {
    return new Promise((resolve, reject) => {
        const file = document.getElementById("fileInput").files[0];
        if (file) {
            const imgPath = "images/" + file.name;
            const storageRef = storage.ref(imgPath);
            const uploadTask = storageRef.put(file);
  
            uploadTask.on(
                "state_changed",
                null, 
                (error) => {
                    reject(error); // Handle errors
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        resolve(downloadURL); // Resolve the promise with the downloadURL
                    });
                }
            );
        } else {
            reject(new Error("No file selected"));
        }
    });
  }
  
  function addCatogory () {
    document.getElementById("addCategory").reset();
    document.getElementById("img-category").src = "../img/logo.png";
    var title2 = document.getElementById("updateCategory");
    title2.innerText = "SAVE";
    var title = document.getElementById("add-category");
    title.innerText = "ADD CATEGORY";
  }