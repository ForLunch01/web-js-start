let paragraphElement = document.body.querySelector('p');

let countVal = 0

function changeParagraphText(event) {
    countVal += 1;
    paragraphElement.textContent = 'Clicked!' + countVal;
    console.log(event)
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data;
    console.log(enteredText);
    // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);