/**MAUREL DAN*/

document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  /** to add a line when button is clicked */
  document.getElementById("btn-add-line").addEventListener("click",
    () => {
      for (let i=0; i<10; i++)
      {
        div = document.createElement("div");
        document.getElementById("grid").append(div);
        div.addEventListener("click",(event)=>
    {
      event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()
    }    
    )
      }
    });

  /**to change the color of a square*/
  for (let square of document.getElementById("grid").children)
  {
    square.addEventListener("click",(event)=>
    {
      event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()
    }    
    )
  }
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}
