document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let container = document.createElement('main')
    container.className = 'container';

    let row = document.createElement('section');
    row.className = 'row justify-content-center my-2';

    let buttonAddSqr = document.createElement('button');
    buttonAddSqr.className = 'btn.btn-primary m-2';
    buttonAddSqr.textContent = 'Add Square';


    row.appendChild(buttonAddSqr);
    container.appendChild(row);
    document.body.appendChild(container);

    let squareBlock = document.createElement('block');
    squareBlock.className = 'display-flex justifyContent-center flexWrap-wrap';
    container.appendChild(squareBlock);



    document.querySelector('button').addEventListener('click', function () {
        let squareDiv = document.createElement('div');
        squareDiv.className = 'square'
        document.querySelector('block').append(squareDiv);
    });

});

