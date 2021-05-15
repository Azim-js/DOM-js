console.log("ALL ABOUT DOM");

// Examining the Document OBJECT

console.dir(document);

console.log(document.URL);
console.log(document.title);

// document.title=123;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

// document.all[10].textContent="Hello";

console.log(document.forms);
console.log(document.links);
console.log(document.forms[0]);

// GET ELEMENT BY ID

console.log(document.getElementById('header-title'));

var headertitle=document.getElementById('header-title');

// headertitle.textContent="Hello";

// headertitle.innerText="Goodbye";

// console.log(headertitle.innerText);

// headertitle.title.innerHTML='<h3> Hello</h3>';

var header=document.getElementById("main-header");

// STYLE CHANGES

header.style.borderBottom='solid 3px #000';


// GET ELEMENT BY CLASS NAME 

var items=document.getElementsByClassName('list-group-item');
console.log(items);

console.log(items[1]);

items[1].style.fontWeight='bold';

// items[1].style.backgroundColor='yellow'; 

// items[1].style.backgroundColor='#f4f4f4';


for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}



// GET ELEMENETS BYTAGNAME


var li=document.getElementsByTagName('li');
console.log(li);
li[0].style.fontWeight='bold';

// li[0].style.backgroundColor='yellow';


for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}


// QUERY SELECTOR

var header=document.querySelector('#main-header');
header.style.border.borderBottom="solid 4px #ccc";

var input =document.querySelector('input');
input.value="Hello I AM AZIM";

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color="coral";


// QUERY SELECTOR ALL

var titles=document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent="Hello";

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="#f4f4f4";
    even[i].style.backgroundColor="#ccc";
    
}