const lispChecker = (arg) => {
  // variables
  let arr = arg.split(""); // parsing input string to array
  let out = [];
  let validation = [];

  // pulling parenthesis from input string array
  arr.forEach((element) => {
    if (element === "(" || element === ")") out.push(element);
  });

  // if out is empty then there is no parenthesis, can assume string is invalid
  if (!out.length) return false;

  // iterating through out array, if there is an opening bracket
  // it is pushed to the validation array and removed from the out array.
  // If there is a closing bracket, that is removed from the out array
  // and an opening bracket is removed from the end of the validation array.
  for (let i = 0; i < out.length; ) {
    if (out[i] === "(") {
      validation.push(out.shift()); // putting opening bracket on validation array
    } else if (out[i] === ")") {
      // if validation array is empty but there are still closing brackets, code is invalid
      if (!validation.length) return false;
      // else removing opening bracket from validation array and removing closing bracket from out array
      validation.pop();
      out.shift();
    } // if
  } // for

  // if there is nothing in the validation array return true
  // if there is something in the validation array return false
  return !validation.length ? true : false;
};

// Test inputs
console.log(lispChecker("()")); // valid
console.log(lispChecker("()()))")); // invalid
console.log(lispChecker("()(words)(text)()((()))(()())(())")); // valid
console.log(lispChecker("")); // invalid
console.log(lispChecker("((")); // invald
console.log(lispChecker("))")); // invalid
console.log(lispChecker("USER(1): (* 2 (cos 0) (+ 4 6))")); // valid
console.log(
  lispChecker(
    "(defun negate (X)" +
      "'Negate the value of X.'  ; This is a documentation string." +
      "(- X))      "
  )
); // valid
console.log(
  lispChecker(
    "())defun negate (X)" +
      "'Negate the value of X.'  ; This is a documentation string." +
      "(- X))      "
  )
); // invalid
