const limit = 100;
let out;

for (let num = 1; num <= limit; num++){
  out = "";
  if (num % 3 == 0) {
    out += "Fizz";
  }
  if (num % 5 == 0){
    out += "Buzz";
  }
  if (out == ""){
    out += num;
  }
  console.log(out);
}