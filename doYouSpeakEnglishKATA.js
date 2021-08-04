// Done 8/4/21

function spEng(sentence){
//write your code here

//** /english/i is Regex (Regular expression). 
// english (or whichever word placed between / /) 
// is taken literally, but the i will make the whole
// string case-insensitive. .test() will test the 
// given string to see if it satisfies the regex.
  return /english/i.test(sentence);
  
// first attempt worked on test but durring attempt  
// passed:84 failed: 52, exit code 1
//   return sentence.includes("english");
}


// Sample tests
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(spEng("english"), true);
Test.assertEquals(spEng("egnlish"), false);
  });
});
