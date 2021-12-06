let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let app = {
    start: function(){
        let alts = document.querySelectorAll('.alternative');
    
        alts.forEach(function(element, index){
            element.addEventListener('click', function(){
                console.log('check correct answer');
            });
        });
    
        this.showQuestion(question);
    },
    showQuestion: function(q){
        let titleDiv = document.getElementById('title');
    
        titleDiv.textContent = q.title;
    
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    }
};

app.start();