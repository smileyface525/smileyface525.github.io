var secretNumber = 5;
var password = 'smileyface';
var allowedIn = true;
var members = ['eiko', 'alex', 'mookie'];
var members = ['John', 'alex', 'mookie'];
var codeVerifier = /bo*/;
var codeVerifier = /[abc].k..y$/;

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ['John', 'alex', 'mookie', 'Mary'];
var codeVerifier = /^[a-c].+k..y$/;

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
 
assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)
 
assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)
 
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)
 
assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)
 
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)
 
assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)
 
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)
 
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)
 
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
 
assert(
  codeVerifier instanceof RegExp,
  "The value of codeVerifier should be a regular expression.",
  "10. "
)
 
assert(
  codeVerifier.test("axxkxxy") === true
  && codeVerifier.test("bxxkxxy") === true
  && codeVerifier.test("cxxkxxy") === true
  && codeVerifier.test("cxxkxx") === false
  && codeVerifier.test("xxkxxy") === false
  && codeVerifier.test("wcxxkxxy") === false
  && codeVerifier.test("cxxkxxyw") === false
  && codeVerifier.test("bkaay") === false
  && codeVerifier.test("raakaay") === false
  && codeVerifier.test("aakay") === false
  && codeVerifier.test("wcxxvxxy") === false,
  "The value of codeVerifier should detect whether or not a string begins with an 'a','b', or 'c', followed by at least one of any character, followed by a 'k', followed by two of any character, followed by a 'y' that ends the string.",
  "11. "
)

