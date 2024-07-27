function addProduct() {
     const optionCategory = document.getElementById("optionCategories");

     categoriesData.forEach(element => {
        optionCategory.innerHTML += `<option value="${element.id}">${element.nameCategory}  ${element.nameBrand}</option>`
     });

}