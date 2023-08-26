const size = 9;

const even = " ";
const odd = "#";

let board = "";
let rank;

for (let file = 1; file <= size; file++){
  rank ="";
  rank = file % 2 == 0?
    buildRank(even, odd):
    buildRank(odd, even)
  board = board + rank + "\n";
}

console.log(board)

function buildRank(first, second){
  let rank = "";
  for (let index = 0; index < size; index++){
    if (index % 2 == 0){
      rank += second;
    } else {
      rank += first;
    }
  }
  return rank
}
