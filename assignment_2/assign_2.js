

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

arr1 = [1, 2, 3, 4, 5, 1, 3];
// console.log(arr1.indexOf(2));
var input = 3;
var output = []

if (arr1.indexOf(input) == -1) {
    console.log('-1');
}

for (a = 0; a < arr1.length; a++) {
    if (input == arr1[a]) {
        output.push(a);
        continue;
    }

}
console.log(output);

console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5


for (p = 1; p <= 5; p++) {
    for (q = 5; q >= p; q--) {

        console.log(q);
    }


}

console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order2
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
arr3 = [3, 2, 1, 4, 5, 45]
arr3.sort(function (x, y) {
    return x - y;
})
console.log(arr3);


console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
str1 = 'listen';
str2 = 'silent';

var p = str1.split('').sort().join('');
var q = str2.split('').sort().join('');

console.log(p == q);







console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH


var str3 = 'hello';
var i = str3.split('')
var j = i.reverse();
console.log(j.join(''));


console.log("Q5 END =====================")













