let malee=document.getElementById("male")
let tmalee=document.getElementById("tmale")
let tfemalee=document.getElementById("tfemale")
let tstud=document.getElementById("tstu")
console.log(tstud);
console.log(malee);
console.log(tmalee);
console.log(tfemalee);
let count = 0;
function male(){
count=count + 1
malee.innerText=count
tmalee.innerText=count
}
function malec(){
  count=count-1
  malee.innerText=count
  tmalee.innerText=count
}

let femalee=document.getElementById("female")
console.log(femalee);
let count1 = 0;
function female(){
count1=count1 + 1
femalee.innerText=count1
tfemalee.innerText=count1
}
function femalec(){
  count1=count1-1
  femalee.innerText=count1
  tfemalee.innerText=count1
}
function tstu(){
  let total=count+count1;
tstud.innerText=total;
}


function reset(){
  count=0;
  count1=0;
  total=0;
  malee.innerText=count;
  femalee.innerText=count1;
  tmalee.innerText=count;
  tfemalee.innerText=count1;
  tstud.innerText=total;
}