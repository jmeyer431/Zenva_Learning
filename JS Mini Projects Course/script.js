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

        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) =>{
            element.addEventListener('click', () =>{
                this.checkAnswer(index);
            });
        });
    
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
        }
        else{
            console.log('Incorrect!');
        }

        this.increasePosition();
        this.showQuestion(questions[this.currentPosition]);
    },

    increasePosition: function(){
        this.currentPosition++;

        if(this.currentPosition == questions.length){
            this.currentPosition = 0;
        }
    }
};

app.start();