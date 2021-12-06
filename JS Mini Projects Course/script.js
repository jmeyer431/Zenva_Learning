let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let app = {
    start: function(){
        let alts = document.querySelectorAll('.alternative');

        // alts.forEach(function(element, index){
        //     element.addEventListener('click', function(){
        //         this.checkAnswer(index);
        //     }.bind(this));
        // }.bind(this));

        alts.forEach((element, index) =>{
            element.addEventListener('click', () =>{
                this.checkAnswer(index);
            });
        });
    
        this.showQuestion(question);
    },

    showQuestion: function(q){
        this.currentQuestion = q

        let titleDiv = document.getElementById('title');
    
        titleDiv.textContent = q.title;
    
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function(userSelected){
        if(this.currentQuestion.correctAnswer == userSelected){
            console.log('Correct!');
        }
        else{
            console.log('Incorrect!');
        }
    }
};

app.start();