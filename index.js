// Code your solutions in this file
let wrapGiftsArray = []

function writeCards(names,event){
  for (let i = 0; i < names.length; i++){
    wrapGiftsArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
 return wrapGiftsArray
}

function countDown(startNum){

  while(startNum >= 0){

  console.log(startNum);
  startNum--;

  }

}