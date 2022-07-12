const productNameInputElement = document.getElementById('product-name')
const remainingCharsElement = document.getElementById('remaining-chars')

const maxAllowedChars = productNameInputElement.maxLength;

// 함수 내의 변수가 변하는가?
// 아니오. 함수가 실행될 때마다 새로 초기화되므로 변하는 것이 아님.
function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)