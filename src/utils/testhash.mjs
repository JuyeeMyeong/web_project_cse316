import { hashutil } from "./hashutil.mjs";

let fname1 = "Harry";
let lname1 = "Chung";
let pw1 = "abc123";
let th1 = hashutil(fname1 + lname1, pw1);

let fname2 = "Matt";
let lname2 = "Lee";
let pw2 = "abc123";
let th2 = hashutil(fname2 + lname2, pw2);

let fname3 = "SUE";
let lname3 = "Park";
let pw3 = "abc123";
let th3 = hashutil(fname3 + lname3, pw3);

let fname4 = "John";
let lname4 = "Doe";
let pw4 = "abc123";
let th4 = hashutil(fname4 + lname4, pw4);

let fname5 = "Jane";
let lname5 = "Doe";
let pw5 = "abc123";
let th5 = hashutil(fname5 + lname5, pw5);

let fname6 = "Bob";
let lname6 = "Smith";
let pw6 = "abc123";
let th6 = hashutil(fname6 + lname6, pw6);

let fname7 = "Alice";
let lname7 = "Johnson";
let pw7 = "abc123";
let th7 = hashutil(fname7 + lname7, pw7);

let fname8 = "Charlie";
let lname8 = "Brown";
let pw8 = "abc123";
let th8 = hashutil(fname8 + lname8, pw8);

console.log("hash1=|" + th1 + "|\n");
console.log("hash2=|" + th2 + "|\n");
console.log("hash3=|" + th3 + "|\n");
console.log("hash4=|" + th4 + "|\n");
console.log("hash5=|" + th5 + "|\n");
console.log("hash6=|" + th6 + "|\n");
console.log("hash7=|" + th7 + "|\n");
console.log("hash8=|" + th8 + "|\n");

export default hashutil;
