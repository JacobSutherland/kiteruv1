const kanaSection = document.querySelector('#kana-chart');

for(let i = 0; i < characters.length; i++){
    const kanaExample =
    `
        <div class="chart-card">
            <h1>${characters[i].char}</h1>
            <p>${characters[i].sound}</p>
        </div>
    `
    kanaSection.insertAdjacentHTML('beforeend', kanaExample); 
}