//Creates initial container to hold our '16x16 grid' of divs
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = "flex";
gridContainer.style.flexDirection = "column";
gridContainer.style.justifyContent = "space-around";
gridContainer.style.alignItems = "center";

//Button Container Properties
const buttonContainer = document.querySelector('.button-container');
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.alignItems = "center";
buttonContainer.style.height = "100px";

//Reset Button Properties
const resetButton = document.createElement('button');
resetButton.style.fontSize = "20px";
resetButton.classList.add('resetButton');
resetButton.textContent = "Reset"
resetButton.addEventListener("click", resetGrid);
buttonContainer.appendChild(resetButton);

for(let i = 0; i < 16;i++)
{
    const horizontalContainers = document.createElement('div');//Creates 16 divs that are appended to gridcontainer. The divs are spaced around by the gridContainer
    horizontalContainers.style.display = "flex";
    horizontalContainers.style.height = "55px";
    //horizontalContainers.style.border = "3px solid black";
    //horizontalContainers.textContent = i + 1;
    gridContainer.appendChild(horizontalContainers);

    for(let j = 0; j < 16; j++)
    {
        const verticalContainers = document.createElement('div');
        verticalContainers.classList.add("grid-cell");
        verticalContainers.addEventListener("mouseover", function() {
            verticalContainers.style.backgroundColor = "red";
        }); 
        verticalContainers.style.display = "flex";
        verticalContainers.textContent = j + 1;
        verticalContainers.style.width = "55px";
        verticalContainers.style.border = "2px solid black";
        horizontalContainers.appendChild(verticalContainers);


        
    }//Creates 16 divs horizontal grids
    
}//Creates 16 vertical divs with class name 'grid-square' that append to gridContainer

function resetGrid()
{
    let gridPrompt;
    do {

        gridPrompt = parseInt(prompt("Please enter the grid number you would want to have: ", 16), 10);

    }while(isNaN(gridPrompt) || gridPrompt < 1 || gridPrompt > 100);    

        while(gridContainer.hasChildNodes())
        {
            gridContainer.firstChild.remove();
        }
        for(let i = 0; i < gridPrompt;i++)
            {
                const horizontalContainers = document.createElement('div');//Creates X divs that are appended to gridcontainer. The divs are spaced around by the gridContainer
                horizontalContainers.style.display = "flex";
                horizontalContainers.style.height = "55px";
                gridContainer.appendChild(horizontalContainers);

                for(let j = 0; j < gridPrompt; j++)
                {
                    const verticalContainers = document.createElement('div');
                    verticalContainers.classList.add("grid-cell");
                    verticalContainers.addEventListener("mouseover", function() {
                        verticalContainers.style.backgroundColor = "red";
                    }); 
                    verticalContainers.style.display = "flex";
                    verticalContainers.textContent = j + 1;
                    verticalContainers.style.width = "55px";
                    verticalContainers.style.border = "2px solid black";
                    horizontalContainers.appendChild(verticalContainers);
                }//Creates X divs horizontal grids
            }//Creates X vertical divs with class name 'grid-square' that append to gridContainer
}