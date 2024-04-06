const emailInput = document.getElementById('e-mail');
const mensagemValidacao = document.getElementById('mensagemValidacao');

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim(); // Removendo espaços em branco
    if (email.includes('@')) {
        mensagemValidacao.style.backgroundColor = "green";
        mensagemValidacao.style.color = "white";
        mensagemValidacao.textContent = "Email Válido";
    } else {
        mensagemValidacao.textContent = ""; // Limpa a mensagem se o e-mail não for válido
    }
});

emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim(); // Removendo espaços em branco
    if(email === ''){
        resetFields();
    } else {
        validarEmail();
    }
});

function validarEmail() {
    const email = emailInput.value.trim(); // Removendo espaços em branco
    if (email.includes('@')) {
        resetFields();
    } else {
        mensagemValidacao.style.backgroundColor = "red";
        mensagemValidacao.style.color = "white";
        mensagemValidacao.textContent = "Email Inválido";
    }
}

function resetFields(){
    mensagemValidacao.style.backgroundColor = "";
    mensagemValidacao.style.color = "";
    mensagemValidacao.textContent = "";
}
