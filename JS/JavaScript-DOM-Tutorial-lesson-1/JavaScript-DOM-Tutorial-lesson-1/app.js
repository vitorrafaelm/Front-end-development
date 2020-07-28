//EVENT BUBBLING
const list = document.querySelector('#book-list ul'); 

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
}); 

//Add book list
const addForm = document.forms['add-book']; 
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    //Create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //Add content
    deleteBtn.textContent = 'delete'; 
    bookName.textContent = value;

    //Add classes
    bookName.classList.add('name'); 
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName); 
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

//hide books
const hideBox = document.querySelector('#hide'); 

hideBox.addEventListener('change', (e) => {
    if(hideBox.checked){
        list.style.display = "none";
    }else{
        list.style.display = "initial";
    }
})

//filter book

const searchBar = document.forms["search-books"].querySelector('input');

searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase(); 
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        
        //first element child é a tag span
        
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block'; 
        }else{
            book.style.display = 'none'; 
        }

    })

})

//tabbed content
const tabs = document.querySelector('.tabs'); 
const panels = document.querySelectorAll('.panel'); 

tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        
        const targetPanel = document.querySelector(e.target.dataset.target); 
        
        panels.forEach((panel) => {
            if(panel == targetPanel){
                panel.classList.add('active'); 
            }else{
                panel.classList.remove('active'); 
            }
        })
    }
})

/* var button = document.querySelectorAll('#book-list .delete');

Array.from(button).forEach(function(btn){
    btn.addEventListener('click', function(e){ 
        const li = e.target.parentElement; 

        li.parentNode.removeChild(li); 
    });
});

const link = document.querySelector('#page-banner a'); 

link.addEventListener('click', (e) => {
    e.preventDefault(); 
    console.log('Navigation to ', e.target.textContent, ' was prevented');
})

const bookList = document.querySelector('#book-list');

console.log('Book-list next siblings is: ', bookList.nextSibling);
console.log('Book-list next siblings is: ', bookList.nextElementSibling);

console.log('Book-list previous siblings is: ', bookList.previousSibling);
console.log('Book-list previous siblings is: ', bookList.previousElementSibling);

bookList.previousElementSibling
.querySelector('p')
.innerHTML += '<br> Too cool for everyone else'; 

console.log('The parent node is: ', bookList.parentNode);
console.log('The parent element is: ', bookList.parentElement.parentElement);

console.log(bookList.children); 

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is: ', banner.nodeType);
console.log('#page-banner node name is: ', banner.nodeName); 
console.log('#page-banner has child nodes: ', banner.hasChildNodes());

const cloneBanner = banner.cloneNode(true); 
console.log(cloneBanner);

var books = document.querySelectorAll('#book-list li .name'); 

//Esse código adiciona texto ao elemento +=/concatena com o texto ja existente
Array.from(books).forEach(book => {
    book.textContent += '(book title)';
});

//Update Text
const bookList = document.querySelector('#book-list'); 

bookList.innerHTML = '<h2>Books and more books...</h2>';

bookList.innerHTML += "<p>This is how you add HTML</p>";

const wmh = document.querySelector('#book-list li:nth-child(2) .name'); 

//console.log(wmh);

//var title = document.getElementsByClassName('title'); 
//Array.from(title).forEach( item => console.log(item)); 

var books = document.querySelectorAll('#book-list li .name'); 

//console.log(books);
Array.from(books).forEach(book => console.log(book));
*/