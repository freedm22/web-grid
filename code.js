/**MAUREL DAN*/

document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  /** to add a line when butten is clicked */
  document.getElementById("btn-add-line").addEventListener("click",
    () => {
      for (let i=0; i<10; i++)
      {
        div = document.createElement("div");
        document.getElementById("grid").append(div)
      }
    });

  for (let square of document.getElementById("grid").children)
  {
    square.addEventListener("click",(event)=>
    {
      event.target.style.backgroundColor="blue"
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
