
let counter = 0;
let demo = document.querySelector("#demo");
let stopCondition =  document.querySelector(".displayStop")
let myInterval;

const startTimer = () =>{
   myInterval = setInterval(() =>{
    demo.innerText = ++counter;
  },1000)
  
}

const stopTimer = () =>{
  let para = document.createElement("p");
  para.classList.add("display");
 para.innerText = `You are stop on ${counter}`
 stopCondition.append(para);
 clearInterval(myInterval);

}

const resetTimer = () =>{
  counter = 0;
  demo.innerText = counter;
  clearInterval(myInterval);
}

const getTimeFromTimer = () =>{
  let para = document.createElement("p");
  para.classList.add("display");
 para.innerText = `You are stop on ${counter}`
 stopCondition.append(para);
}

let start = document.querySelector("#start").addEventListener("click", () =>{
  startTimer();
 })
 

let stop = document.querySelector("#stop").addEventListener('click',() =>{
 stopTimer();
 
})

let restart = document.querySelector("#Reset").addEventListener('click',() =>{
  resetTimer();
})


let getTime = document.querySelector("#getTime").addEventListener('click',() =>{
  getTimeFromTimer();
})

let clearTime = document.querySelector("#clearTime").addEventListener('click',() =>{
  stopCondition.innerHTML = "";
})