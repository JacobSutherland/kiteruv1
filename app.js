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
    const question = questionRandomizer();
    questionCounter += 1;
    
    //creates and displays a div element containing the random question
    const card = document.createElement('div');
    card.classList.add('card');
    const currentQuestion = document.createElement('h1');
    currentQuestion.textContent = `${characters[question].char}`
    card.appendChild(currentQuestion);

    //creates and populates answer div with random kana sounds
    const options = document.createElement('div');
    options.classList.add('answer-container');
    //create a p element 4 times and add 'answer' class
    for(let i = 0; i < 4; i++){
        const option = document.createElement('p');
        option.classList.add('answer');
        //the first answer option will be correct, while the subsequent options will be randomized
        if(i < 1){
        option.textContent = `${characters[question].sound}`
        } else {
        option.textContent = `${characters[questionRandomizer()].sound}`
        }
        //finally appends p element at the end of an itteration
        options.appendChild(option);
    }

    //appends game elements, removes the large PNG once game starts, and updates button text
    cardSection.removeChild(cardSection.firstElementChild);
        button.textContent = "Next Kana"
        game.appendChild(card);
        game.appendChild(options);

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