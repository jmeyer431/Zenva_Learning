let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
}

function start(){
    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.addEventListener('click', function(){
            console.log('check correct answer');
        });
    });

    showQuestion(question);
}

function showQuestion(q){
    let titleDiv = document.getElementById('title');
    
    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
    });
}

start();