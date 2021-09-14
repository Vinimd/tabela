import InitDeleteTr from "./05.deleteTr.js";
export default function InitCreateTable(array) {
    const thereIsTable = document.querySelector('table');

    if (thereIsTable) {
        CreateTr(thereIsTable);
    } else {
        const table = document.createElement('table');
        const form = document.querySelector('form');
        const father = form.parentElement;
        CreateTr(table);
        father.append(table);
    }

    function CreateTh(element) {
        element.innerHTML = `<thead> 
        <tr><th>Nome</th> 
        <th>E-mail</th>
         <th>Telefone</th>
         <th>CEP</th> 
         <th>Endereço</th>
         <th>Nºcasa</th>
         <th>Complemento</th>
         <th>bairro</th>
         <th>Cidade</th>
         <th>Estado</th><th>Data e Hora de Inscrição</th></tr>
         <thead>`
    }

    function CreateTr(element) {
        element.innerHTML = '';
        CreateTh(element)
        let arrayTd = [];
        array.forEach(obj => {
            let arrayInformation = [];
            for (let propertie in obj) {
                if (propertie !== 'verificar' && propertie !== 'index' && propertie !== 'date') {
                    arrayInformation.push(obj[propertie]);
                } else if (propertie === 'date') {
                    const date = `${(obj[propertie].getDate()) + '/' + (obj[propertie].getMonth()+ 1) + '/' + (obj[propertie].getFullYear())}`
                    const hour = ` ${(obj[propertie].getHours()) + ':' + (obj[propertie].getMinutes()+ 1) + ':' + (obj[propertie].getSeconds()) + 's'}`
                    const dateAndHour = date.concat(hour)
                    arrayInformation.push(dateAndHour);
                }
            }
            const td = `<tr class='${obj.index}'><td>${arrayInformation.join('</td><td>')}</td><td class='delete'><button class='btn-delete'>&#128465;</button></td></tr>`
            arrayTd.push(td)
        });
        const tbody = `<tbody>${arrayTd.join('')}</tbody>`;
        element.innerHTML += tbody;
    }

    InitDeleteTr(array);

}