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


// Traversing The DOM

var itemList=document.querySelector('#items');
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor="#f4f4f4";

// parentElement

console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);


// CHILD NODES

console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// first Child

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hello2";

// last child

console.log(itemList.lastChild);

// lastElement Child

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello4";

// NEXT SIBLING

console.log(itemList.nextSibling);

// nextELementSibling

console.log(itemList.nextElementSibling);

// previous Sibling

console.log(itemList.previousSibling);

// previousELEMENTSIBLING

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';



// CREATING DOM FROM JS

// create a div

var newDiv=document.createElement('div');

// add class
newDiv.className='hello';

// add id 
newDiv.id='hello1';

// add attribute

newDiv.setAttribute('title','Hello Div');

console.log(newDiv);

// createTextNode

var newDivText=document.createTextNode('HelloWorld');
// add textto div


newDiv.appendChild(newDivText);
console.log(newDiv);

// insertBefore

var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');

newDiv.style.fontSIze='30px';

container.insertBefore(newDiv,h1);


// var button=document.getElementById('button');

// button.addEventListener('click',function(){
//     console.log(123);
// })

// button.addEventListener('click',buttonClick);

// function buttonClick(){
//     document.getElementById('header-title').textContent='Changed';
//     document.querySelector('#main').style.backgroundColor='#f4f4f4'
// }

function buttonClick(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output=document.getElementById('output');

    output.innerHTML='<h3>'+e.target.id+'</h3>';
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);


    console.log(e.altKey); //when pressed and click ->true
    console.log(e.ctrlKey); //when pressed and click ->true
    console.log(e.shiftKey); //when pressed and click ->true

}



// MOUSE ACTIONS

var btn=document.getElementById('button');

btn.addEventListener('click',runEvent);
// double click
btn.addEventListener('dblclick',runEvent);

btn.addEventListener('mousedown',runEvent);
btn.addEventListener('mouseup',runEvent);

function runEvent(e){
    console.log("Event Type:"+e.type);
}

// mouse events demo

var box=document.getElementById('box');

box.addEventListener('mouseenter',runEventTwo);

box.addEventListener('mouseleave',runEventTwo);
box.addEventListener('mouseout',runEventTwo);

box.addEventListener('mousemove',runEventTwo);

function runEventTwo(e){
    console.log('EventType :'+e.type);
    output.innerHTML='<h3>MoveX : '+e.offsetX+'</h3><h3> MouseY : '+e.offsetY+'</h3>';

    // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",50)";
    //  change color on mouse event
    document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",50)";
}


// EXTRA EVENTS

var itemInput=document.querySelector("Input[type='text']");

var form=document.querySelector('form');

itemInput.addEventListener('keydown',runEventThree);
itemInput.addEventListener('keypress',runEventThree);
itemInput.addEventListener('keyup',runEventThree);

function runEventThree(e){
    console.log('eventType: '+e.type);
    console.log(e.target.value);

    document.getElementById('output').innerHtml='<h3>'+e.target.value+'</h3>';

    
}

// focus -> click events

itemInput.addEventListener('focus',runEventFour);
itemInput.addEventListener('cut',runEventFour);
itemInput.addEventListener('blur',runEventFour);
itemInput.addEventListener('paste',runEventFour);
itemInput.addEventListener('input',runEventFour);

function runEventFour(e){
    console.log("eventType: "+e.type);
    // document.body.style="none";
}

