document.addEventListener('DOMContentLoaded', (event) => {

    let colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let number = 0

    let container = document.createElement('main')
    container.className = 'container';


    let row = document.createElement('section');
    row.className = 'row justify-content-center my-2';

    let buttonAddSqr = document.createElement('button');
    buttonAddSqr.className = 'btn btn-primary m-2';
    buttonAddSqr.textContent = 'Add Square';


    row.appendChild(buttonAddSqr);
    container.appendChild(row);
    document.body.appendChild(container);

    let squareBlock = document.createElement('div');
    squareBlock.className = 'd-flex justify-content-center flex-wrap';
    container.appendChild(squareBlock);



    buttonAddSqr.addEventListener('click', function () {
        let squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        let squareText = document.createTextNode(number);
        squareDiv.id = number++
        squareBlock.append(squareDiv);
       

        squareDiv.addEventListener('click', function () {
            let randomIndex = Math.floor(Math.random() * colorArray.length)
            squareDiv.style.backgroundColor = colorArray[randomIndex]
        })
        squareDiv.onmouseover = function () {
            squareDiv.appendChild(squareText);
        };
        squareDiv.onmouseout = function () {
            squareDiv.removeChild(squareText)
        };

        squareDiv.addEventListener('dblclick', function () {
            if (squareDiv.id % 2 == 0) {
                if (squareDiv.nextSibling == null) {
                    console.log('nope')
                } else {

                    squareBlock.removeChild(squareDiv.nextSibling)
                }
            }
            else {
                if (squareDiv.previousSibling == null) {
                    console.log('aint gonna happen')
                } else {
                    squareBlock.removeChild(squareDiv.previousSibling)

                }

            }

        });
        //end of add square button  
    });
    //end of DOM content load 
})

