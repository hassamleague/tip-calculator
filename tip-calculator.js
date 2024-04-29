let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let btn = document.getElementById('btn')
let para = document.getElementById('para')

btn.addEventListener('click',()=>{

  if((input1.value||input2.value)==''){
alert('please enter some amount and the persons')
  }

 else if(input1.value==''){
    alert('please enter some amount')
  }

 else if(input2.value==''){
    alert('please enter the person')
  }

  else{

 let value = (input1.value/input2.value)

 let value1 = Math.floor(Math.round((input1.value/input2.value)/input3.value))

  para.innerText = `Each person gives ${value}$ bill The tip given by the each person is ${value1}$`
  }

})