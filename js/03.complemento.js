export default function InitComplemento() {
    const divComplemento = document.querySelector('.complemento');

    function ChangeInput(e) {
        const input = document.querySelector('#complemento')
        const type = e.target.type
        if ((type === 'radio') && (e.target.value === 'sim')) {
            input.disabled = false
        } else if ((type === 'radio') && (e.target.value === 'nao')) {
            input.value = ''
            input.disabled = true;
        }
    }
    divComplemento.addEventListener('change', ChangeInput)
}