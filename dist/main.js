(()=>{"use strict";let e=document.getElementById("main"),t=(document.getElementById("projectList"),document.getElementById("addProjectBtn"),0);const n=()=>t++,d=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},l=e=>{let t=document.createElement("li");return t.innerHTML=e,t};document.getElementById("main");let c=document.getElementById("projectList");document.getElementById("addProjectBtn").onclick=function(){((t,c)=>{let i=document.createElement("div");i.setAttribute("class","projectContainer");let m=n();i.dataset.index=m;let o=document.createElement("h3");o.innerText=t.getName(),i.appendChild(o);let r=(e=>{let t=document.createElement("button");return t.innerText=e,t})("Delete");i.appendChild(r),r.onclick=()=>{(e=>{e.remove()})(i)},i.onclick=function(){((e,t)=>{let n=document.getElementById("toDos");d(n);let c=document.createElement("ul");c.setAttribute("id","listContainer"),n.appendChild(c);let i=e.getList();const m=()=>{i.forEach((e=>{c.appendChild(e)}))};m();let o=document.getElementById("addNewItem").value,r=document.getElementById("listBtn");r.onclick=()=>{let t=l(o);e.addToList(t),m()},t.appendChild(r)})(t,e)},c.appendChild(i)})((e=>{let t=document.getElementById("projectTitle").value,n=[l("Sample Item"),l("Sample Item"),l("Sample Item")];return{getName:()=>t,getDescription:()=>projectDescription,addToList:e=>{n.push(e)},getList:()=>n}})(),c)}})();