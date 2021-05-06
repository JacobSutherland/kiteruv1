const body = document.querySelector('body');
const game = document.querySelector('.card-section');
const button = document.querySelector('button');
const cardSection = document.querySelector('.card-section');


let questionRandomizer = () => {
    const roll = Math.floor(Math.random() * characters.length);
    return roll;
}

let questionCounter = 0;


button.addEventListener('click', () => {
    questionCounter += 1;
    const question = questionRandomizer();

    function generateQuestion(){
        const card = document.createElement('div');
        card.classList.add('card');
        const currentQuestion = document.createElement('h1');
        currentQuestion.textContent = `${characters[question].char}`
        card.appendChild(currentQuestion);
        game.appendChild(card);
    }
    
        //creates and populates answer div with random kana sounds
    function generateAnswers(){
        const options = document.createElement('div');
        options.classList.add('answer-container');
        //creates a p element 4 times and add 'answer' class
        for(let i = 0; i < 4; i++){
        const option = document.createElement('p');
        option.classList.add('answer');
        options.appendChild(option);
        game.appendChild(options);
        }
        const answers = options.children;
        for(let i = 0; i < 4; i++){
            answers[i].textContent = `${characters[Math.floor(Math.random() * characters.length)].sound}`
            answers[Math.floor(Math.random() * 4)].textContent = `${characters[question].sound}`
        }
    }
    
    generateQuestion();
    generateAnswers();
    

    //appends game elements, removes the large PNG once game starts, and updates button text
    cardSection.removeChild(cardSection.firstElementChild);
    button.textContent = "Next Kana"
    button.style.backgroundColor = "white"
    button.style.border = "1px  solid black"
    button.style.color = "#4A4949"

    //removes the last set of questions and answers
    if(questionCounter > 1){
        cardSection.removeChild(cardSection.firstElementChild);
    }

    //checks if the answer is correct when clicked
    const answer = document.querySelectorAll('.answer');
    answer.forEach( i => {

        i.addEventListener('click', (e) => {
            if(e.target.textContent === characters[question].sound){
                i.style.backgroundColor = '#22eaaa'
                i.style.border = 'none'
            } else {
                i.style.backgroundColor = '#F46363'
                i.style.border = 'none'
            }
        })
    })

})