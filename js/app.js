function calcularNotaFiscal(){
    const empresa = document.getElementById('empresa').value;
    const cliente = document.getElementById('cliente').value;
    const servico = document.getElementById('servico').value;
    const valor = parseFloat(document.getElementById('valor').value);

    const imposto = 0.1 * valor;

    const total = valor + imposto;

    const tbody = document.querySelector('#tbody');

    let data = new Date();

    tbody.innerHTML += `
    
    <tr>
        <td class="pad">${empresa}</td>
        <td class="pad">${cliente}</td>
        <td class="pad">${servico}</td>
        <td class="pad">${valor.toFixed(2)}</td>
        <td class="pad">${imposto.toFixed(2)}</td>
        <td class="pad">${total.toFixed(2)}</td>
        <td class="pad">${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</td>
        <td class="pad">${data.getUTCHours()-3}:${data.getMinutes()}</td>
    </tr>
    `
}