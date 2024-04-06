const emailInput = document.getElementById('e-mail'); //Captura o Email
const mensagemValidacao = document.getElementById('mensagemValidacao'); // Captura o texto de validação do email

// Adiciona evento de Input ao campo de email
emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim(); // Remove espaços em branco
    
    // Se o email incluir o @
    if (email.includes('@')) {
        mensagemValidacao.style.backgroundColor = "green"; // Cor de Fundo - Verde
        mensagemValidacao.style.color = "white"; // Cor de Fundo - Branco
        mensagemValidacao.textContent = "Email Válido"; // Adiciona o Texto Email Válido
    } else {
        mensagemValidacao.textContent = ""; // Limpa a mensagem se o e-mail não for válido
    }
});

// Evento ao sair do input
emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim(); // Removendo espaços em branco
    // Se o campo do email for vazio
    if(email === ''){
        resetFields(); // Resetar os Campos
    } else {
        validarEmail(); // Senão chamar a funçao Validar Email
    }
});

// Função Validar Email
function validarEmail() {
    const email = emailInput.value.trim(); // Removendo espaços em branco
    // Se o email incluir o @
    if (email.includes('@')) {
        resetFields(); // Reseta os campos
    } else {
        mensagemValidacao.style.backgroundColor = "red"; // Senão a cor de fundo é vermelha
        mensagemValidacao.style.color = "white"; // Texto Branco
        mensagemValidacao.textContent = "Email Inválido"; // Adiciona no texto email inválido
    }
}

// Reseta os Campos
function resetFields(){
    mensagemValidacao.style.backgroundColor = ""; // Reseta a cor de fundo
    mensagemValidacao.style.color = ""; // Reseta a cor do texto
    mensagemValidacao.textContent = ""; // Reseta o texto do email inválido
}
