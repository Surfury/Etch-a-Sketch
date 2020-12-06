const colour=document.getElementById("color"),rainbow=document.getElementById("rainbow"),
    reset=document.getElementById("reset"),resize=document.getElementById("resize"),
    container = document.querySelector("div.grid");
let root=document.documentElement,cell=[];

reset.addEventListener('click',() => {
    document.querySelectorAll(".filled").forEach(e => e.removeAttribute("style"));
});

function createGrid(squaresPerSide) {

    container.style.gridTemplateColumns=(`repeat(${squaresPerSide}, 1fr`);
    container.style.gridTemplateRows=(`repeat(${squaresPerSide}, 1fr`);

    let numberOfCells=resize.value*resize.value;
    for (let i=0;i<numberOfCells;i++) {
        cell[i]=document.createElement('span');
        container.appendChild(cell[i]);
    }
    document.querySelectorAll("span").forEach(E => E.addEventListener('mouseover',(M) => {
        if (M.ctrlKey) {
            if (rainbow.checked===false) {
                M.target.style.backgroundColor=colour.value;
            } else if (rainbow.checked) {
                M.target.style.backgroundColor=`hsl(${Math.random()*360}, 100%, 50%)`
            }
            M.target.classList.add("filled");
        }
    }));
}
document.querySelector("div.grid").addEventListener("mouseleave",() => document.getElementById("advice").opacity=0);
document.querySelectorAll("div.grid").addEventListener("mouseover",() => document.getElementById("advice").opacity=1);

createGrid(resize.value);
resize.addEventListener('change',() => createGrid(resize.value));
