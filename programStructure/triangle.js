const limit = 7;

for (let lines = 1; lines <= limit; lines++){
  let out = "";
  for (let dots = 1; dots <= lines; dots++){
    out += "#";
  }
  console.log(out);
}