// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // BASE CASE //
   // IF NUMBER IS 0
    if (n === 0) {
      // RETURN 1
       return 1
    }
    // IF NUMBER IS NEGATIVE 
     if (n < 0) {
      // RETURN NULL
       return null;
     }

    // RECURSION 
     return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    // BASE CASE // 
   // IF ARRAY LENGTH IS FALSEY
   if (!array.length) {
    // RETURN 0
     return 0
  }

 // RECURSION
  return array[0] + sum(array.slice(1));
  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // BASE CASE //
   // IF ARRAY LENGTH IS FALSEY
    if (!array.length) {
      // RETURN 0
       return 0;
      }

    // IF ARRAY INDEX IS AN ARRAY
     if (Array.isArray(array[0])) {
      // RETURN FUNCTION WITH ARRAY INDEX PLUS THE ARRAY BEING SLICED
       return arraySum(array[0]) + arraySum(array.slice(1));
      }

     // RECURSION
      return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function (n) {
  // BASE CASE //
  // TIME FOR DARIUS STYLE CODE
   // IF NUMBER IS 1
    if (n === 1) {
      // RETURN FALSE
       return false;
    } 
    // IF NUMBER IS LESS THAN 0
     if (n < 0) {
      // RECURSION ADD 2 TO NUMBER
       return isEven(n+2);
     }
    // IF NUMBER IS 0
     if (n === 0) {
      // RETURN TRUE
       return true;
     } else {
        // RECURSION SUBTRACT 2 FROM NUMBER
         return isEven(n-2);
     }  
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, def=n) {
  // BASE CASE // 
  //console.log(def)
   // IF N IS 0
   if (n === 0) {
    // RETURN N - def
     return n - def;
  }
// IF N IS NEGATIVE
 if (n < 0) {
   // RECURSION
    return n + sumBelow(n+1, def);
 }

 // RECURSION 
  return n + sumBelow(n-1, def);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, def=[]) {
   // BASE CASE //
   // IF X IS LESS THAN Y
   if (x < y) {
    // PUSH X INTO ARRAY
     def.push(x);
    // RECURSION
     return range(x + 1, y, def);
  }

// IF X IS GREATER THAN Y
 if (x > y) {
   // PUSH X INTO ARRAY
    def.push(x);
   // RECURSION
    return range(x - 1, y, def);
 }

// IF X EQUALS Y
if (x === y) {
  // RETURN DEF
   return def.slice(1);
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, count=0) {
   // BASE CASE // 
    // IF EXPONENT IS 0
     if (exp === 0) {
      // RETURN 1
       return 1;
      } // IF EXPONENT IS LESS THAN 0
         if (exp < 0) {
          // RECURSION
           return 1 / (base * exponent(base, -exp - 1, count));
          }
          // RECURSION
           return base * exponent(base, exp - 1, count);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, count=0) {
  // CREATING PRODUCT
  var product = count * count;
  // BASE CASE // 
   // IF N EQUALS 0
    if (n === 0) {
      // RETURN FALSE
       return false;
    }
    // IF PRODUCT EQUALS N
    if (product === n) {
      // RETURN TRUE
       return true;
    }

    // IF PRODUCT IS GREATER THAN N
     if (product > n) {
      // RETURN FALSE
       return false;
     }

  // RECURSION
   return powerOfTwo(n, count+1)
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, def=[]) {
  // BASE CASE //
   // IF STRING LENGTH IS FALSEY
   if (!string.length) {
    // CREATE VARIABLE
     var a;
    // RETURN STRING 
     a = def.reverse().join('');
    return a;

  }

// IF STRING LENGTH IS GREATER THAN 0
 if (string.length > 0) {
   // PUSH STRING INTO ARRAY
    def.push(string[0])
 }
 // RECURSION
  return reverse(string.slice(1), def);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // BASE CASE // 
   // TURNING STRING TO LOWERCASE
    // SPLITTING STRING INTO ARRAY
     // JOINING ARRAY OF STRINGS WITHOUT SPACES
     string = string.toLowerCase().split(' ').join('');
     console.log(string);
      // IF STRING LENGTH IS FALSEY
       if (!string.length) {
         // RETURN TRUE
          return true;
       }
   
   
       // IF FIRST INDEX IN STRING DOESN'T MATCH ANYTHING
        if (string[0] !== string[string.length - 1]) {
          // RETURN FALSE
           return false;
        }
     
       // IF FIRST INDEX IN STRING IS THE SAME AS THE LAST INDEX
        if (string[0] === string[string.length - 1]) {
          // RECURSION       USING SLICE METHOD
           return palindrome(string.slice(1, -1));
        } else {
          return false;
        }
      
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, count=1) { 
  if (count === y) {
     return x;
  }

    return x + multiply(x, y, count+1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, count=0) {
   if (x < y) {
     return count;
  }
  else {
    return divide(x - y, y, count+1);
}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
     // BASE CASE //
   // IF STRING LENGTH IS FALSEY
   if (!str1.length && !str2.length) {
    // RETURN TRUE
    return true;
  }

  // IF FIRST CHARACTER IN STRINGS MATCH
   if (str1[0] === str2[0]) {
     // RECURSION
      return compareStr(str1.slice(1), str2.slice(1));
   }

return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, def=[]){
  // BASE CASE //
  // IF STRING LENGTH IS FALSEY
   if (!str.length) {
     // RETURN ARRAY
      return def;
   } else {
     def.push(str[0]);
   }
 // RECURSION
  return createArray(str.slice(1), def);
  
};

// 17. Reverse the order of an array
var reverseArr = function (array, def=[]) {
  // BASE CASE // 
   // IF ARRAY LENGTH IS FALSEY
   if (!array.length) {
    // RETURN ARRAY
     return def.reverse();
  } else {
    // PUSH LAST INDEX OF ARRAY INTO DEFAULT 
     def.push(array[0]);
  }

 // RECURSION
  return reverseArr(array.slice(1), def)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, def=[]) {
  // BASE CASE // 
   // IF ARRAY LENGTH EQUALS LENGTH
   if (def.length === length) {
    // RETURN ARRAY
     return def;
  } else {
    // PUSH VALUE INTO ARRAY
     def.push(value);
  }

 // RECURSION
  return buildList(value, length, def);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
   // BASE CASE //
   // IF ARRAY LENGTH IS FALSEY
   if (!array.length) {
    // RETURN COUNT
     return count;
  }

  // IF ARRAY INDEX IS NOT VALUE
   if (array[0] !== value) {
     // RECURSION
      return countOccurrence(array.slice(1), value, count);
   }

return countOccurrence(array.slice(1), value, count+1);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  // BASE CASE //
    // IF ARRAY LENGTH IS FALSEY
    if (!array.length) {
      // RETURN OUTPUT
       return output;
    }
  // IF FIRST INDEX IS TRUTHY
   if (array[0]) {
     var a = array[0];
     // USE CALLBACK FUNCTION
      callback = function(num) {
        // NUMBERS WILL ADD TO ITSELF
         return num + num;
      }
     // PUSHING FUNCTION CALL INTO OUTPUT
      output.push(callback(a));
   }
   // THIS WAS A FUN FUNCTION TO DO
   // RECURSION
    return rMap(array.slice(1), callback, output);
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, array, count=0) {
  // BASE CASE // 
   // IF NUMBER IS NEGATIVE
   if (n < 0) {
    // RETURN NULL
     return null;
  }

 // IF COUNT IS NUMBER
  if (count === n) {
    // RETURN ARRAY INDEX
     return array[0];
  }
    // RECURSION
     return nthFibo(n, array.slice(1), count+1);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  // BASE CASE //
   // IF INPUT LENGTH EQUALS 0
   if (input.length === 0) {
    // RETURN DEF
     return output;
  }

 // IF ARRAY INDEX IS A STRING 
  if (typeof input[0] === 'string') {
    // USE UPPER CASE METHOD AND PUSH INTO output
     output.push(input[0].toUpperCase());
  }
 // RECURSION
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  // BASE CASE //
   // IF ARRAY LENGTH IS FALSEY
   if (!array.length) {
    // RETURN OUTPUT
     return output;
  }

 // PUSHING ARRAY INDEX INTO OUTPUT
  // USING CHAR AT METHOD AND UPPER CASE METHOD
  output.push(array[0].charAt().toUpperCase() + array[0].slice(1));
  
 // RECURSION
  return capitalizeFirst(array.slice(1), output)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  // BASE CASE //
   // IF STRING LENGTH IS FALSEY
   if (!str.length) {
    // RETURN OBJECT
     return obj;
  };

  // IF STRING INDEX IS A PROPERTY IN OBJECT
   if (obj[str[0]]) {
     // ADD 1 TO KEY VALUE
      obj[str[0]] += 1;
   } else {
     // CREATE OBJECT PROPERTY AND ASSIGN VALUE 1
      obj[str[0]] = 1;
   }
 // RECURSION
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]) {
    // BASE CASE //
   // IF ARRAY LENGTH IS 0
   if (!list.length) {
    // RETURN OUTPUT
     return output;
  }

 // IF OUTPUT DOESN'T INCLUDE ARRAY INDEX
  if (!output.includes(list[0])) {
    // PUSH INTO OUTPUT
     output.push(list[0]);
  }
 // RECURSION
  return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, count=0, output=[]) {
   // BASE CASE //
    // IF ARRAY LENGTH IS FALSEY
    if (!array.length) {
      // RETURN OUTPUT
       return output;
    }

   // IF ARRAY ELEMENT IS 0
    if (array[0] === 0) {
      // ADD 1 TO COUNT
       count += 1;
    }

   // IF ARRAY ELEMENT IS NOT IN OUTPUT
    if (!output.includes(array[0])) {
      // PUSH INTO OUTPUT
       output.push(array[0]);
    }
  
   // RECURSION 
    return minimizeZeroes(array.slice(1), count, output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // 
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------