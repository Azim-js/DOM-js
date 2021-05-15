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

