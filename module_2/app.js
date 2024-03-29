// console.log(window.document); //window object는 전역적이며 생략 가능
// console.log(document)
// console.dir(document) // 표준 자바스크립트 객체를 보는 방법

// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = "https://google.com"

anchorElement = document.querySelector('#external-link');
anchorElement.href = "https://google.com"

anchorElement = document.querySelector('p a');
anchorElement.href = "https://google.com"

// anchorElement = document.querySelectorAll('p a');
// anchorElement.href = "https://google.com"


// Element 추가
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to  Google!';

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);


// Element 삭제

let firstH1Element = document.querySelector('h1');
// firstH1Element.remove();

firstH1Element.parentElement.removeChild(firstH1Element); // for older browser



// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>.'