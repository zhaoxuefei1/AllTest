let btn = document.querySelector('button');
let Heading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name',myName);
  Heading.textContent = '名字是：' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  Heading.textContent = '名字是:' + storedName
}

btn.onclick = function() {
  setUserName();
}