let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function(){
        this.currentPosition = 0;
        this.score = 0;

        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) =>{
            element.addEventListener('click', () =>{
                this.checkAnswer(index);
            });
        });
    
        this.updateStats();
        this.showQuestion(questions[this.currentPosition]);
    },

    showQuestion: function(q){
        let titleDiv = document.getElementById('title');
    
        titleDiv.textContent = q.title;
    
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function(userSelected){
        let currentQuestion = questions[this.currentPosition];

        if(currentQuestion.correctAnswer == userSelected){
            console.log('Correct!');
            this.score++;
            this.showResult(true);
        }
        else{
            console.log('Incorrect!');
            this.showResult(false);
        }

        this.updateStats();
        this.increasePosition();
        this.showQuestion(questions[this.currentPosition]);
    },

    increasePosition: function(){
        this.currentPosition++;

        if(this.currentPosition == questions.length){
            this.currentPosition = 0;
        }
    },

    updateStats: function(){
        let scoreDiv = document.getElementById('score');

        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect){
        let resultDiv = document.getElementById('result');
        let result = "";

        if(isCorrect){
            result = 'Correct Answer!';
        }
        else{
            let currentQuestion = questions[this.currentPosition];
            let correctAnswerIndex = currentQuestion.correctAnswer;
            let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex];

            result = `Wrong! Correct answer: ${correctAnswerText}`;
        }

        resultDiv.textContent = result;
    }
};

app.start();