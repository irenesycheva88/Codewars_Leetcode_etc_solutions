'use strict'

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Follow up: The overall run time complexity should be O(log (m+n)).
*/

// My solution:
// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = []
//     nums.push(...nums1, ...nums2);
//     nums.sort((a, b) => a - b);
//     return (nums.length % 2 === 1) ? nums[(nums.length - 1) / 2] : (nums[(nums.length) / 2 - 1] + nums[(nums.length) / 2]) / 2;
// };

// // let nums1 = [1, 3];
// // let nums2 = [2];
// // console.log(findMedianSortedArrays(nums1, nums2), 2);

// // let nums1 = [1, 2];
// // let nums2 = [3, 4];
// // console.log(findMedianSortedArrays(nums1, nums2), 2.5);

// let nums1 = [];
// let nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2), 2);


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
*/

// // My solution:
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let lenLongest = 0;
//     let strLongest = "";
//     for (let char of s) {
//         strLongest = strLongest.slice(strLongest.indexOf(char) + 1) + char;
//         lenLongest = Math.max(lenLongest, strLongest.length)
//     }
//     return lenLongest;
// };


// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring("bbbabc"), 3); // 2 3
// console.log(lengthOfLongestSubstring("bbbbbba"), 2);


// // The next approach is completely wrong!
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let lenLongest = 0;
//     let charsLongest = new Set();
//     for (let char of s) {
//         if (charsLongest.has(char)) {
//             lenLongest = Math.max(lenLongest, charsLongest.size);
//             charsLongest.clear();
//         }   
//         charsLongest.add(char);
//         console.log(charsLongest);
//     }
//     lenLongest = Math.max(lenLongest, charsLongest.size);
//     return lenLongest;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring("bbbabc"), 3); // 2 3
// console.log(lengthOfLongestSubstring("bbbbbba"), 2); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Medium

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case)
*/

// // My solution:
// /**
//  * @param {string} s
//  * @return {string}
//  */
//  function longestPalindrome(s) {
//     function isPalindrom(s){
//         let len = s.length;
//         for (let i = 0; i < len / 2; i++) {
//             if (s[i] != s[len - 1 - i]) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = s.length; i > 0; i--) {
//         for (let start = 0; start < s.length - i + 1; start++) {
//             let subStr = s.slice(start, start + i);
//             if (isPalindrom(subStr)) {
//                 return subStr;
//             }
//         }
//     }
// };

// console.log(longestPalindrome('tanata'));
// console.log(longestPalindrome('tanat'));
// console.log(longestPalindrome('tana'));
// console.log(longestPalindrome('tan'));
// console.log(longestPalindrome('ta'));
// console.log(longestPalindrome('t'));
//console.log(longestPalindrome(''));

// Some tests with substrings:
// console.log('abcd'.slice(-1, -3, -1)); // '' видимо, slice не умеет "ходить" из начала в конец, а 3-й аргумент вообще лишний
// console.log('abcd'.slice(-1, -3));  // '' видимо, slice не умеет "ходить" из начала в конец, а 3-й аргумент вообще лишний
// console.log('abcd'.slice(1, 3, 2)); // 'bc', да точно 3-й аргумент вообще лишний
// console.log('abcd'.substr(-4, -4)); // '', тоже не умеет обрабатывать отрицательные аргументы
// console.log('abcd'[-1]);


/////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 6. ZigZag Conversion
// https://leetcode.com/problems/zigzag-conversion/  
// Medium

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display 
// this pattern in a fixed font for better legibility)

// P   A   H   N  
// A P L S I I G  
// Y   I   R  
// And then read line by line: "PAHNAPLSIIGYIR"  

// Write the code that will take a string and make this conversion given a number of rows:  

// string convert(string s, int numRows);
 

// Example 1:  
// Input: s = "PAYPALISHIRING", numRows = 3  
// Output: "PAHNAPLSIIGYIR"  

// Example 2:  
// Input: s = "PAYPALISHIRING", numRows = 4  
// Output: "PINALSIGYAHRPI"  
// Explanation:  
// P     I    N  
// A   L S  I G  
// Y A   H R  
// P     I  

// Example 3:  
// Input: s = "A", numRows = 1  
// Output: "A"
 
// Constraints:  
// 1 <= s.length <= 1000   
// s consists of English letters (lower-case and upper-case), ',' and '.'.  
// 1 <= numRows <= 1000
*/

// // My solution:
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     if (numRows == 1) {   // special case
//         return s;
//     }
//     let resStr = '';
//     let cols = Math.ceil(s.length / (2 * numRows - 2));
//     for (let i = 0; i < numRows; i++) {
//         for(let j = 0; j < cols; j++) {
//             let cur = j * (2 * numRows - 2) + i;
//             resStr += s[cur] || '';
//             if (i != 0 && i != numRows - 1) {
//                 cur = (2 * j + 1) * (2 * numRows - 2) - cur;
//                 resStr += s[cur] || '';
//             }
//         }
//     }
//     return resStr;
// };

// console.log(convert('PAYPALISHIRING', 1), 'PAYPALISHIRING');
// console.log(convert('PAYPALISHIRING', 2), 'PYAIHRNAPLSIIG');
// console.log(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
// console.log(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');

// // Some my test and attempts:
// console.log(Math.floor(4.3)); // 4
// console.log(Math.floor(4.0)); // 4
// console.log(Math.floor(4.7)); // 4
// console.log(Math.floor(Infinity));  // Infinity
// console.log(10 % Infinity); // 10
// console.log(10 / 0);  // Infinity
// console.log(10 % 0);  // NaN
// console.log(Infinity + 10); // Infinity

// let numRows = 3;  // numRows == 1 - особый случай 
// let ind = [];
// let len = 16;
// //let cols = Math.floor(len / (2 * numRows - 2)) + Math.floor(len % (2 * numRows - 2) / numRows);
// let cols = Math.ceil(len / (2 * numRows - 2));
// console.log(cols);
// for (let i = 0; i < numRows; i++) {
//     for(let j = 0; j < cols; j++) {
//         let cur = j * (2 * numRows - 2) + i;
//         ind.push(cur);
//         if (i != 0 && i != numRows - 1) {
//             ind.push((2 * j + 1) * (2 * numRows - 2) - cur)
//         }
//     }
// }
// console.log(ind);

///////////////////////////////////////////////////////////////////////////////////////////
// 20210308     
/*
1. Two Sum
// https://leetcode.com/problems/two-sum/
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
*/

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let diff = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (diff.has(nums[i])) {
//             return [i, diff.get(nums[i])]
//         } else {
//             diff.set(target - nums[i],  i);
//         }            
//     } 
// };

// console.log(twoSum([2,7,11,15], 9));

/////////////////////////////////////////////////////////////////////////////////////////
// 20210309
/*
15. 3Sum
https://leetcode.com/problems/3sum/
Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets 
in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
// // My solution:
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let triples = [];
//     let tripleHashes = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         let diffs = new Map();
//         for (let j = 0; j < nums.length; j++) {
//             if (i != j) {
//                 if (diffs.has(nums[j])) {
//                     let triple = [nums[i], nums[j], diffs.get(nums[j])];
//                     let curHash = triple.sort().toString();
//                     if (tripleHashes.has(curHash) === false) {
//                         tripleHashes.add(curHash);
//                         triples.push(triple);
//                     }
//                 } else {
//                     diffs.set(-(nums[i] + nums[j]), nums[j]);
//                 }
//             }
//         }
//     }
//     return triples;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]])
// console.log(threeSum([]), [])
// console.log(threeSum([0]), [])
// console.log(threeSum([0,0,0]), [[0,0,0]])

////////////////////////////////////////////////////////////////////////////////////
// 20210312
/*
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/
Easy

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

Constraints:
-231 <= x <= 231 - 1
*/
// // My solution
// /**
//  * @param {number} x
//  * @return {number}
//  */
//  var reverse = function(x) {
//     // [-1, 1][x > 0] returns undefined; [-1, 1][Number(x > 0)] - ok
//     // Second multiplier will be implicitly converted in Number
//     x = ((x > 0) ? 1 : -1) * Array(...String(Math.abs(x))).reverse().join(''); 
//     return ((-2)**31 <= x && x <= 2**31 - 1) ? x : 0;
// };

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
// console.log(reverse(0));

///////////////////////////////////////////////////////////////////////////////////////
// 20210314
/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/
// // My solution
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     let prefix = '';
//     if (strs.length > 0) {
//         for (let i = 0; i < strs[0].length; i++) {
//             for (let j = 1; j < strs.length; j++) {
//                 if (strs[0][i] !== strs[j][i]) {
//                     return prefix
//                 }
//             }
//             prefix += strs[0][i];
//         }
//     }
//     return prefix;
// };

// console.log(longestCommonPrefix([]), '');
// console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl');
// console.log(longestCommonPrefix(["dog","racecar","car"]), '');

///////////////////////////////////////////////////////////////////////////////////////
// 20210315
/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets. Open brackets must be 
closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2: Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true
*/
// // My solution
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//    let stack = [];
//    let d = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
//    for (let char of s) {
//         if ('({['.includes(char)) {
//             stack.push(char);
//         } else {
//             if (stack.length === 0 || d.get(stack.pop()) !== char) {
//                 return false;
//             }
//         }
//    }
//    return stack.length === 0;
// };

// console.log(isValid("()"), true);
// console.log(isValid("()[]{}"), true);
// console.log(isValid("(]"), false);
// console.log(isValid("([)]"), false);
// console.log(isValid("{[]}"), true);
// console.log(isValid("]"), false);

/////////////////////////////////////////////////////////////////////////////////////
// 20210316
/*
26. Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
easy

Given a sorted array nums, remove the duplicates in-place such that each element 
appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the 
input array in-place with O(1) extra memory.

Clarification: Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the 
input array will be known to the caller as well.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of 
nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums 
being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set 
beyond the returned length.

Constraints:
0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.
*/
// // My solutions:
// // #1
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let pr = 0;
//     let cur = 1;
//     let initialLen = nums.length;
//     let deletedAmount = 0;
//     while (cur + deletedAmount < initialLen) {
//         if (nums[cur] !== nums[pr]) {
//             nums.splice(pr + 1, cur - pr - 1);
//             deletedAmount += cur - pr - 1;
//             pr++;
//             cur = pr + 1;
//         }
//         else {
//             cur++;
//         }
//     }
//     nums.splice(pr + 1, cur - pr - 1);
//     return nums.length;
// };

// // #2
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let pr = 0;
//     let cur = 1;
//     while (nums[cur] !== undefined) {
//         if (nums[cur] !== nums[pr]) {
//             nums.splice(pr + 1, cur - pr - 1);
//             pr++;
//             cur = pr + 1;
//         }
//         else {
//             cur++;
//         }
//     }
//     nums.splice(pr + 1, cur - pr - 1);
//     return nums.length;
// };

// // Almost the #2 but better
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let pr = 0;
//     let cur = 1;
//     while (cur < nums.length) {
//         if (nums[cur] !== nums[pr]) {
//             nums.splice(pr + 1, cur - pr - 1);
//             pr++;
//             cur = pr + 1;
//         }
//         else {
//             cur++;
//         }
//     }
//     nums.splice(pr + 1, cur - pr - 1);
//     return nums.length;
// };

// console.log(removeDuplicates([1, 1, 2]), 2);
// console.log(removeDuplicates([1, 1, 1, 1, 1]), 1);
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), 5);
// console.log(removeDuplicates([]), 0);

////////////////////////////////////////////////////////////////////////////////////////////
// 20210317
/*
27. Remove Element
https://leetcode.com/problems/remove-element/
Easy

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) 
extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known 
to the caller as well.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or 
nums = [2,2,0,0], your answer will be accepted.

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. 
Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
*/
// // My solutions:
// // #1
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
//  var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums.length; 
// };

// // #2 Using Lodash' _.remove method
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
//  var removeElement = function(nums, val) {
//     _.remove(nums, (item) => item === val);
//     return nums.length;
// };

// console.log(removeElement([3,2,2,3], 3), 2);
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
// console.log(removeElement([1, 1, 1, 1, 1], 1), 0);
// console.log(removeElement([1, 1, 1, 1, 1], 2), 5);
// console.log(removeElement([], 3), 0);