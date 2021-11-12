let chorus = "let's dance!";
let repeat = 0
while (repeat < 10){
  if (repeat === 5){
    console.log("*change key*")
  } 
  else if (repeat === 7){
    console.log("new-key");
  } 
  console.log(chorus);
  repeat++; //similar to saying repeat = repeat + 1
}
console.log("Until the sun comes up!");
