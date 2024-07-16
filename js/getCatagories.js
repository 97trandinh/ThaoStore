getAll(urlCategory, displayCatagories);
function displayCatagories(data){
    let categories = document.getElementById("data-categories");
    data.forEach((element,index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>
            <img style="width: 50px;" src="${element.logo}" alt="">
        </td>
        <td>${element.nameCategory}</td>
        <td>${element.nameBrand}</td>

        <td>
            <button type="botton" class=" btn btn-primary"> <i class="fa-solid fa-pen-to-square"></i></button>
            <button type="botton" class=" btn btn-danger"> <i class="fa-solid fa-trash"></i></button>
        </td>`;
        categories.appendChild(tr);
    });

}