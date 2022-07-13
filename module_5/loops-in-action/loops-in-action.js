// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');


function calculateSum(){
    const userNumberInputElement = document.querySelector('#user-number');
    const enteredNumber = userNumberInputElement.value;
    let sum = 0;
    for (let i=0; i <= enteredNumber; i++){
        sum = sum + i;
    }
    const outputResultElement = document.getElementById('calculated-sum');
    
    outputResultElement.textContent = sum;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);


// Highlight links

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks)

// Display user data

const dummyUserData = {
    firstName: 'Max',
    lastName: 'Lunch',
    age: 32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key]
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData)

// Statistics / Roll the Dice

const rollDiceButtionElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumbrInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumbrInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls = numberOfRolls + 1;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent =  outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtionElement.addEventListener('click', deriveNumberOfDiceRolls);