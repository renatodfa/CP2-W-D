var form = document.getElementById('form');
        var successMessage = document.getElementById('success-message');
        var btnContainer = document.querySelector('.btn-container');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aqui você pode adicionar o código para enviar o formulário
            // Vou simular o envio apenas mostrando a mensagem de sucesso
            successMessage.style.display = 'block';
            btnContainer.style.display = 'block';
        });

        function resetForm() {
            form.reset();
            successMessage.style.display = 'none';
            btnContainer.style.display = 'none';
        }