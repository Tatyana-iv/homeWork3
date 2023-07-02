const playButton = document.getElementById("playButton");
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

playButton.addEventListener("click", playGame);

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function playGame() {
    const shuffledWords = shuffleArray([...words]);
    alert(`Перемешанный массив: ${shuffledWords.join(', ')}`);
    
    const firstWord = prompt("Чему равнялся первый элемент массива?");
    const lastWord = prompt("Чему равнялся последний элемент массива?");

    let correctCount = 0;
    if (firstWord === shuffledWords[0]) correctCount++;
    if (lastWord === shuffledWords[shuffledWords.length - 1]) correctCount++;

    switch (correctCount) {
        case 2:
            alert("Поздравляем! Вы угадали оба элемента!");
            break;
        case 1:
            alert("Вы были близки к победе!");
            break;
        default:
            alert("Вы не угадали ни одного элемента!");
    }
}
