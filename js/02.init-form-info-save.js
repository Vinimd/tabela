import InitCreateTable from './04.init-create-table.js'
let arrayInfo = [];
export default function InitFormInfoSave() {
    const btn = document.querySelector('button');
    const span = document.querySelector('[data-usuarios-cadastrados]');

    function SaveInfo() {
        const inputs = document.querySelectorAll('input');
        let empty = [];
        inputs.forEach(input => {
            const element = document.querySelector(`[name=${input.name}]`)
            element.style.border = 'none';

            if ((input.value === '') && (input.disabled !== true)) {
                empty.push(input);
            }
        });
        if (empty.length === 0) {
            const obj = {};
            inputs.forEach(input => {
                obj[input.name] = input.value
                if (input.type !== 'radio') {
                    input.value = null;
                }
            });
            obj.date = new Date();
            obj.index = arrayInfo.length;
            arrayInfo.push(obj);
            InitCreateTable(arrayInfo);
            if (!span.classList.contains('ativo')) span.classList.add('ativo')
            span.innerText = `Usuarios cadastrados: ${arrayInfo.length}`;
        } else {
            empty.forEach(input => {
                input.style.border = '2px solid red';
            })
            alert('Preencha todos os Campos');
        }
    }
    btn.addEventListener('click', SaveInfo);
}