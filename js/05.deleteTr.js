export default function InitDeleteTr(array) {
    const deleteBtns = document.querySelectorAll('.btn-delete');
    const span = document.querySelector('[data-usuarios-cadastrados]');

    function DeleteTr(e) {
        const father = e.path[3]
        const tr = e.path[2];
        const index = +e.classList
        array.forEach((obj, i) => {
            for (let propertie in obj) {
                if (obj[propertie] === index) index = i
            }
        })
        father.removeChild(tr);
        array.splice(index, 1);
        span.innerText = `Usuarios cadastrados: ${array.length}`;
    }
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', DeleteTr)
    });
}