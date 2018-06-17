// if number is divisible by 2 => print even
// else print odd
var number=16
if(number%2===0){
  if(number%3===0){
      console.log("The number is divisible by 6")
  }else{
      console.log("The number is even")
  }
}else if(number%3===0){
    console.log("The number is divisible by 3")
}
else{
    console.log("The number is odd")
}
