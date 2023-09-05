function primitiveMultiply(a, b) {

}

function retryMultiply(a, b) {
  for (; ;) {
    try {
      console.log(primitiveMultiply(a, b));
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Try again");
      } else {
        throw e
      }
    }
  }
}