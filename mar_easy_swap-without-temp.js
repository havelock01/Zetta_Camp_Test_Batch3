/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
 };

function result(numbers) {
   //destructuring assignment way
   [numbers.a, numbers.b] = [numbers.b, numbers.a]
   
   /*Addition and difference way
   numbers.a = numbers.a + numbers.b
   numbers.b = numbers.a - numbers.b
   numbers.a = numbers.a - numbers.b*/

   /*Bitwise XOR operator way
   numbers.a = numbers.a ^ numbers.b
   numbers.b = numbers.a ^ numbers.b
   numbers.a = numbers.a ^ numbers.b*/
   
   return numbers

   /*I make 3 option for swap the number.
   1. Dectructuring assignment way
   2. Addition and difference way
   3. Bitwise XOR operator way
   You can try it option 2 and 3 by remove the comment*/
}
 
console.log(result(numbers));
 