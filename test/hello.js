let box = document.querySelectorAll('.box');
let delete1 = document.querySelector('.delete');


box.forEach( (element) => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.style.margin = '10px';
    element.style.padding = '10px';
    element.style.border = '1px solid black';
    element.style.borderRadius = '5px';
})

box.forEach( (element) => {

    element.addEventListener('click', () => {
        if(element.classList.contains('delete')) {
            element.style.backgroundColor = 'red';
            element.classList.remove('delete');
        }
        else {
            element.style.backgroundColor = 'blue';
            element.classList.add('delete');
        }

        delete1.addEventListener('click', () => {
            if(element.classList.contains('delete')) {
                element.style.display = 'none';
            }
        })  
    })


})


let data = [
    {
        name: 'hello',
        age: 20
    },
    {
        name: 'world',
        age: 21
    }
]

localStorage.setItem('data', JSON.stringify(data));

let data1 = JSON.parse(localStorage.getItem('data'));

console.log(data1);

