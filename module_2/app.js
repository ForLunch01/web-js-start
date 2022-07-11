// console.log(window.document); //window object는 전역적이며 생략 가능
// console.log(document)
// console.dir(document) // 표준 자바스크립트 객체를 보는 방법

// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = "https://google.com"

anchorElement = document.querySelector('#external-id');
anchorElement.href = "https://google.com"

anchorElement = document.querySelector('p a');
anchorElement.href = "https://google.com"

// anchorElement = document.querySelectorAll('p a');
// anchorElement.href = "https://google.com"