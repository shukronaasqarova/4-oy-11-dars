// at, charAt, charCodeAt, lenth

// 1 masala

// function getLastChar(str) {
//     let s = "hello";
//     console.log(s.at(-1))
// }

// getLastChar();

// 2 masala

// function getMiddleChar(str){
//     let res;
//     if (str.length % 2 ==1){
//         res = str.substring(middleIndex, middleIndex + 1)
//     } else {
//         let middleIndex = Math.trunc(str.length % 2)-1;
//         res = str.substring(middleIndex, middleIndex * 2)
//     }
//     return res;
// }
// console.log(getMiddleChar("kozimjon"));

// 3 masala

// function getFirstCharCode(str) {
//     let s = "hello";
//     console.log(s.charCodeAt(0));
// }
// getFirstCharCode();

// 4 masala

// function getStringLengthDescription(str) {
//   let s = "hello";
//   console.log(s.length);
//   if (s.length > 10){
//     console.log("Uzoq string");
// } else {
//     console.log("Qisqa string");
// }
// }
// getStringLengthDescription();

// 5 masala

// function getCharCodes(str) {
//   let s = "hello";
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//     console.log(s.charCodeAt(i));
//   }
// }
// getCharCodes();

// slice, substring,substr

// 1 masala

// function getFirstThreeChars(str) {
//     let s = "hello world";
//     let res = s.slice(0,3);
//     console.log(res);
// }
// getFirstThreeChars();

// 2 masala

// function getMiddleChars(str) {
//   let s = "hello world";
//   let res = s.slice(6, 11);
//   console.log(res);
// }

// getMiddleChars();

// 3 masala

// 4 masala

// function getThreeCharsFromFifthIndex(str) {
//   let s = "helloworld";
//   let res = s.substr(5,3);
//   console.log(res);
// }
// getThreeCharsFromFifthIndex();

// 5 masala

// function getFirstTenChars(str) {
//   let s = "hello world";
//   let res = s.substring(0, 11);
//   console.log(res);
// }
// getFirstTenChars();

// 6 masala

// function getLastThreeChars(str) {
//   let s = "hello world";
//   let res = s.substring(8, 11);
//   console.log(res);
// }
// getLastThreeChars();

// 7 masala

// function getSubstringFromSecondIndex(str) {
//   let s = "hello world";
//   let res = s.substring(2, 11);
//   console.log(res);
// }
// getSubstringFromSecondIndex();

// 'toUpperCase`, `toLowerCase`, `concat`, `trim`, `padStart`, `trimEnd`, va `padEnd`

// 1 masala

// function convertToUpperCase(str) {
//   let s = "hello world";
//   let res = s.toUpperCase();
//   console.log(res);
// }
// convertToUpperCase();

// 2 masala

// function convertToLowerCase(str) {
//     let s = "Hello World";
//     let res = s.toLowerCase();
//     console.log(res);
//   }
//   convertToLowerCase();

// 3 masala

// function concatStrings(str1, str2) {
//   let x = "Hello";
//   let s = "World"
//   let res = x.concat(s);
//   console.log(res);
// }
// concatStrings();

// 4 masala

// function trimString(str) {
//   let s = "            salom                   bolalar             ";
//   let res = s.trim();
//   console.log(res);
// }
// trimString();

// 5 masala

// function padStringStart(str, maxLength, padChar){
//     let s = "hello";
//     let padded = s.padStart(9,"*");
//     console.log(padded);
// }
// padStringStart();

// 6 masala

// function padStringEnd(str, maxLength, padChar) {
//   let s = "hello";
//   let padded = s.padEnd(9, "*");
//   console.log(padded);
// }
// padStringEnd();

//  7 masala

// function trimEndString(str) {
//   let s = "            salom                   bolalar             ";
//   let res = s.trimEnd();
//   console.log(res);
// }
// trimEndString();

// 8 masala

// function trimStartString(str) {
//   let s = "            salom                   bolalar             ";
//   let res = s.trimStart();
//   console.log(res);
// }
// trimStartString();

// 9 masala

// function padStringWithZerosStart(str, maxLength) {
//   let s = "8";
//   let padded = s.padStart(9, "0");
//   console.log(padded);
// }
// padStringWithZerosStart();

// 10 masala

// function padStringWithSpacesEnd(str, maxLength) {
//   let s = "8";
//   let padded = s.padEnd(9, "0");
//   console.log(padded);
// }
// padStringWithSpacesEnd();

// `repeat`, `replace`, `replaceAll`, va `split`

// 1 masala

// function repeatString(str, N){
//     let s = "Hello world";
//     let res = s.repeat(2);
//     console.log(res);
// }
// repeatString();

// 2 masala

// function replaceAppleWithOrange(str) {
//     let res = str.replace('apple', 'orange');
//     return res;
// }
// console.log(replaceAppleWithOrange("apple"));

// 3 masala

// function FirstSmallAToBigA(str){
//     let res = str.replace('a' , 'A') ;
//     return res;
//     }
//     console.log(FirstSmallAToBigA('ant'));

// 4 masala

// function replaceAllCatsWithDogs(str){
//     let res = str.replaceAll('cat' , 'dog') ;
//     return res;
//     }
//     console.log(replaceAllCatsWithDogs('dog cat dog cat',));

// 5 masala

// function replaceAllSmallEToBigE(str){
//     let res = str.replaceAll('e' , 'E') ;
//     return res;
//     }
//     console.log(replaceAllSmallEToBigE('elephant, egg, esim'));

// 6 masala

// function splitBySpaces(str) {
//   let s = "Hello World";
//   let res = s.split(" ");
//   console.log(res);
// }
// splitBySpaces();

// 7 masala

// function splitByCommas(str){
//     let s = "Hello World";
//     let res = s.split(" ");
//     console.log(res);
// }
// splitByCommas();

// 8 masala

// function splitByEachCharacter(str) {
//   let s = "Hello World";
//   let res = s.split("");
//   console.log(res);
// }
// splitByEachCharacter();

// 9 masala
// function splitByDelimiter(str, delimiter) {
//   let s = "Hello World";
//   let res = s.split("*");
//   console.log(res);
// }
// splitByDelimiter();

// 10 masala

// function processString(str) {
//     let s = "salom Shukrona";
//     let res = s.replaceAll("a","*");
//     console.log(res);
//     let rep = res.repeat(3);
//     console.log(rep);
//     let splited = rep.split (" ")
//     console.log(splited);
// }
// processString();

// Massiv va stringlar

// 1 masala xatoooooooooooooo

// function processString(str) {
//   let s = "salom Shukrona";
//   let res = s.split(" ");
//   console.log(res);
//   let l = s.toUpperCase();
//   console.log(l);
//   let j = str.join(" , ");
//   console.log(j);
// }
// processString();

// 2 masala

//  3masala

// 4 masala xatooo

// function stringToUnicodeArray(str) {
//   let s = "Hello World";
//   let res = s.split("");
//   console.log(res);
// //   let u = res.charCodeAt(s.length);
//   console.log(u);
// }
// stringToUnicodeArray();

// indexOf`, `search`, `includes`, va `startsWith`

// 1 masala

// function findFirstAppleIndex(str) {
// return str.indexOf("apple")
// }
// console.log(findFirstAppleIndex( "orange, peach,apple, cherry"));

// 2 masala

//  function findFirstAtSymbolIndex(str){
//     return str.indexOf("@");
// }
// console.log(findFirstAtSymbolIndex("hello world @"));

// 3 masala

// function searchBanana(str){
//     return str.search("banana");
// }
// console.log(searchBanana("apple, peach, banana, cherry"));

// 4 masala xatooooooooooooooooooooooooo

// function searchForDigit(str){
//     return str.search(Number);
// }
// console.log(searchForDigit(" 1 hello world"));

// 5 masala

// function includesCat(str) {
//     return str.includes("cat");
// }
// console.log(includesCat("dog, cat, mouse"));

// 6 masala

// function includes2024(str){
//     return str.includes(2024);
// }
// console.log(includes2024("2023 , 2024"));

// 7 masala

// let str = "Hello world";
// let startsWithHello = str.startsWith("Hello");
// console.log(startsWithHello); 








// function processString(str) {
//   let s = "salom Shukrona";
//   let res = s.split(" ");
//   console.log(res);
//   let l = s.toUpperCase();
//   console.log(l);
//   let j = str.join("  " ,);
//   console.log(j);
// }
// processString();