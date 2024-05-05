function startQuiz() {
    document.querySelector('.btn-start').style.display = 'none'; // Esconde o botão "Iniciar Quiz"
    document.querySelector('.question').style.display = 'block'; // Exibe a primeira pergunta
    document.querySelector('.btn-next').style.display = 'block'; // Exibe o botão "Próxima Pergunta"
}

var currentQuestion = 0;
var questions = document.querySelectorAll('.question');
var quiz = document.getElementById('quiz');
var result = document.querySelector('.result');
var btnNext = document.querySelector('.btn-next');

function nextQuestion() {
    questions[currentQuestion].style.display = 'none'; // Esconde a pergunta atual
    currentQuestion++; // Avança para a próxima pergunta
    if (currentQuestion < questions.length) {
        questions[currentQuestion].style.display = 'block'; // Exibe a próxima pergunta
    } else {
        calculateScore(); // Exibe o resultado final
    }
}

function calculateScore() {
    var score = 0;
    var answers = document.querySelectorAll('input[type="radio"]:checked');
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].value === 'b') {
            score++;
        }
    }
    result.textContent = 'Você acertou ' + score + ' de ' + questions.length + ' perguntas.';
    result.style.display = 'block';
    btnNext.style.display = 'none'; // Remove o botão "Próxima Pergunta"
    
    // Redirecionar para a página inicial após um breve atraso
    setTimeout(function() {
        alert('Parabéns! Estou te redirecionando para o início novamente.');
        window.location.href = 'inicio.html';
    }, 1000); // 2000 milissegundos = 2 segundos
}

btnNext.addEventListener('click', nextQuestion);