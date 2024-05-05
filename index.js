        document.getElementById('btn-login').addEventListener('click', function() {
            // Obtém os valores dos campos de entrada
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            
            // Verifica se os campos estão vazios
            if (username === '' || password === '') {
                // Exibe uma mensagem de erro se algum campo estiver vazio
                alert('Por favor, insira seu nome de usuário e senha.');
            } else {
                // Exibe um alerta com a mensagem
                alert('Dados recebidos. Estamos te redirecionando para o nosso quiz.');
                // Redireciona o usuário para quiz.html
                window.location.href = 'quiz.html';
            }
        });