var e=document.querySelector("tbody"),n=document.querySelector(".container"),t=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),c=document.querySelector(".append-column"),o=document.querySelector(".remove-column");function a(){var n=e.children.length,a=l()[0].children.length;t.disabled=n>=10,r.disabled=n<=2,c.disabled=a>=10,o.disabled=a<=2}function l(){return e.querySelectorAll("tr")}n.addEventListener("click",function(n){var t,r=n.target;switch(!0){case r.classList.contains("append-row"):t=function(){for(var e=document.createElement("tr"),n=0;n<l()[0].children.length;n++){var t=document.createElement("td");e.appendChild(t)}return e}(),e.appendChild(t),a();break;case r.classList.contains("remove-row"):e.removeChild(e.lastElementChild),a();break;case r.classList.contains("append-column"):l().forEach(function(e){var n=document.createElement("td");e.appendChild(n)}),a();break;case r.classList.contains("remove-column"):l().forEach(function(e){e.removeChild(e.lastElementChild)}),a()}});//# sourceMappingURL=index.3405a6b8.js.map

//# sourceMappingURL=index.3405a6b8.js.map
