const socket = io();

const addProductBtn = document.getElementById("addProductBtn");
const deleteProductBtn = document.getElementById("deleteProductBtn");

addProductBtn.addEventListener("click", () => {

    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const price = document.getElementById("price").value
    const thumbnail = document.getElementById("thumbnail").value
    const code = document.getElementById("code").value
    const stock = document.getElementById("stock").value

    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };

    socket.emit("addProduct", product);
    title.value = "";
    description.value = "";
    price.value = "";
    thumbnail.value = "";
    code.value = "";
    stock.value = "";
    
});

deleteProductBtn.addEventListener("click", () => {
    const id = document.getElementById("productId").value;
    socket.emit("deleteProduct", id);
    id.value = "";
    alert("producto eliminado")
});

socket.on("updateProducts", (products) => {
    window.location.reload();
});