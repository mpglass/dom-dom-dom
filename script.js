let container = document.createElement ('main')
container.className = 'container';

let row = document.createElement ('section');
row.className = 'row justify-content-center my-2';

let buttonAddSqr = document.createElement('button');
buttonAddSqr.className = 'btn.btn-primary m-2';
buttonAddSqr.textContent = 'Add Square'; 

row.appendChild(buttonAddSqr); 
container.appendChild(row); 
document.body.appendChild(container);

