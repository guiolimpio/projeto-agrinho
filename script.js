document.querySelector('header h1').addEventListener('click', function() {
    alert("Bem-vindo ao Meu Site!");
});

// Função para alterar o texto do botão de "Serviços" quando o usuário passa o mouse
document.querySelector('#servicos h2').addEventListener('mouseover', function() {
    document.querySelector('#servicos h2').textContent = "Nossos Serviços Oferecidos";
});

document.querySelector('#servicos h2').addEventListener('mouseout', function() {
    document.querySelector('#servicos h2').textContent = "Serviços";
});

// Função para alterar a cor de fundo da seção "Sobre"
document.querySelector('#sobre').addEventListener('click', function() {
    this.style.backgroundColor = '#e0e0e0'; // Mudando o fundo para um tom claro
});

// Função para mostrar um alerta ao clicar no link de contato
document.querySelector('nav ul li a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão (navegação)
    alert("Clique em 'Contato' em breve!");
});





