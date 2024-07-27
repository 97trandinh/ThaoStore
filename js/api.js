const urlCategory ="http://localhost:3000/categories";
const urlProduct ="http://localhost:3000/products";
//#region Get All
async function getAll(url, callback) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error( "lỗi:", error);
    }
}


function deleted(url,id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {      
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}

function add(url,object) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => console.error('Error creating post:', error));
  }

  function edit(url,id,object) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Đơn hàng đã được cập nhật', data);
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}