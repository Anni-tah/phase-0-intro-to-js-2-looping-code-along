let names = ['Anne', 'Ethan', 'Steve'];
function writeCards(names, eventName){
let message =[];
for(let i=0; i<names.length; i++){
 message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)

}
return message;

}

function countDown(){
  let count =10;
  while (count>=0){
    console.log(count);
    count--;
  }
}
