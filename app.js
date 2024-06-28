let users = [
  {
    "pic": "./pic/saree.JPG",
  },
  {
    "pic":"./pic/SGP07359.JPG",
  },
  {
    "pic":"./pic/shawl1.JPG",
  },
  {
    "pic":"./pic/store.JPG",
    
  },
]
function thedots (idx) {
  let dots =document.querySelector(".dots");
 dots.innerHTML = ''; 
  
   for (const [index, item] of users.entries()) {
    let btn = document.createElement('button');
    btn.className = "dot";
    if (index === idx) {
      btn.classList.add('dot--active');
    }
    dots.append(btn);
  }
}
function main () {
  let idx = 0;
  
  let p = document.getElementById("dp")
  p.src = users[idx]["pic"];
  thedots(idx);
  
  document.querySelector(".btn--left").addEventListener('click',() =>{
    idx = idx-1;
    if(idx === -1) {

idx = users.length-1;
    }
    p.src = users[idx]["pic"];
    thedots(idx);
  });
  
  document.querySelector(".btn--right").addEventListener('click',() =>{
    idx = idx+1;
    if(idx === users.length) {
      idx = 0;
    }
    p.src = users[idx]["pic"];
    thedots(idx);
  });
}
main();

