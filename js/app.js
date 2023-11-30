function calcularNotaFiscal(){
    const cliente = document.getElementById('cliente').value;
    const servico = document.getElementById('servico').value;
    const valor = parseFloat(document.getElementById('valor').value);

    const imposto = 0.1 * valor;

    const total = valor + imposto;

    const tbody = document.querySelector('#tbody');

    tbody.innerHTML += `
    
    <tr>
        <td class="pad">${cliente}</td>
        <td class="pad">${servico}</td>
        <td class="pad">${valor.toFixed(2)}</td>
        <td class="pad">${imposto.toFixed(2)}</td>
        <td class="pad">${total.toFixed(2)}</td>
    </tr>
    `
}