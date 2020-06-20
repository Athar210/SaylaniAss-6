// //chapter 21 - 25
// //1
var f = prompt("Enter first name: ");
var l = prompt("Enter last name: ");

alert("Hello " + f + " " + l);

//2
var model = prompt("Enter your favourite mobile model: ");
var len = model.length;
alert("My favourite phone is: " + model + "\n" + "Length of string: "+len);

//3
var pak = "Pakistani";
var index;
for(var i=0; i<pak.length; i++)
{
    if(pak[i] === 'n')
    {
        index = i;
        break;
    }
}

alert("String: " + pak + "\n" + "Index of 'n' : " + index);

//4
var s = "Hello World";
var index2;
for(var i=s.length-1; i>=0; i--)
{
    if(s[i] === 'l')
    {
        index2 = i;
        break;
    }
}

alert("String: " + s + "\n" + "Last index of 'l' : " + index2);

//5
var pak2 = "Pakistani";
var index3;
for(var i = 0; i<4; i++)
{
    index3 = pak2[i];
}
alert("String: " + pak2 + "\n" + "Character at index 3: " + index3);

//6
var f2 = prompt("Enter first name: ");
var l2 = prompt("Enter last name: ");
var name = f2 + " " + l2;

alert("Hello " + name);

//7
var s2 = "Hyderabad";
s2 = s2.replace("Hyder","Islam");
document.write(s2);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//8
var message = "Ali and Sami are best friends. They play cricket and football together."; 

message = message.replace(/and/g ,"&");

document.write("<br>" + "<br>" + "<br>" + "<br>" + message);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//9
var s3 = "472";
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + s3 + "<br>" + "Type: " + "string");
s3 = parseInt(s3);
document.write("<br>" + "Value: " + s3 + "<br>" + "Type: " + "number");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//10
var s4 = prompt("Enter string: ");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + "User input: " + s4 );
s4 = s4.toUpperCase();
document.write("<br>" + "Value: " + "Upper case: " + s4 );



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//11
var s5 = prompt("Enter string: ");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s5 );
var first = s5.slice(0,1);
first = first.toUpperCase();
s5 = first + s5.slice(1);
document.write("<br>" + "Title case: " + s5);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//12
var num = 35.36;
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Number: " + num );
num = num.toString();
num = num.slice(0,2) + num.slice(3);
document.write("<br>" + "Result: " + num );

//13
var s6 = prompt("Enter your name: ");
for(var i=0; i<s6.length; i++)
{
    if(s6.charCodeAt(i) === 33 || s6.charCodeAt(i) === 44 || s6.charCodeAt(i) === 46 || s6.charCodeAt(i) === 64)
    {
        alert("Please enter valid username");
    }
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var n = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
n = n.toLowerCase();
for(var i=0; i<A.length; i++)
{
    if(A[i] === n)
    {
        document.write("<br>" + "<br>" + "<br>" + "<br>" + n + " is " + "<b>" + "available " + "</b>" + "at index " + i + " in our bakery");
    }
}



//15
var password = prompt("Enter password: ");
password = password.toLowerCase();
var flag = -1;
var flag2 = -1;
var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arr2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

if(password.length < 6)
{
    document.write( "<br>" + "Password cannot be of less than 6 characters Please enter a valid password!");
}
else if(password.slice(0,1) === "0" || password.slice(0,1) === "1" || password.slice(0,1) === "2" || password.slice(0,1) === "3" || password.slice(0,1) === "4" || password.slice(0,1) === "5" || password.slice(0,1) === "6" || password.slice(0,1) === "7" || password.slice(0,1) === "8" || password.slice(0,1) === "9")
{
    document.write( "<br>" + "Password cannot begin with a number Please enter a valid password!");
}


for(var i=0; i<password.length; i++)
{
    for(var j=0; j<arr.length; j++)
    {
        if(password[i] === arr[j])
        {
            flag2 = 0;
        }
        else if(password[i] === arr2[j])
        {
            flag = 0;
            break;
        }
    }
}

if(flag2 === -1)
{
    document.write( "<br>" + "Password must contain alphabets Please enter a valid password");
}

if(flag === -1)
{
    document.write( "<br>" + "Password must contain a number Please enter a valid password");
    
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//16
var university = "University of Karachi";

document.write("<br>" + "<br>" + "<br>" + "<br>")
university = university.split("");
for(var i = 0; i<university.length; i++)
{
    document.write("<br>" + university[i]);
}



// 13 and 16 are not correct


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//17
var s1 =  prompt("Enter here: ");
var v = s1[s1.length-1];
document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s1 + "<br>" + "Last character of input: " + v);



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//18  
var text = "The quick brown fox jumps over the lazy dog";
var a = 0;

document.write("<br>" + "<br>" + "<br>" + "<br>" + "Text: " + text);

text = text.toLowerCase();

for(var i=0; i<text.length; i++)
{
    if(text.slice(i, i+3) === "the")
    {
        a++;
    }
}

document.write( "<br>" + "There are " + a + " occurance(s) of 'the' ");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//chapter 26 - 30

//1 (a)
var b = +prompt("Enter a positive integer: ");
while(1)
{
    if(b < 1)
    {
        b = +prompt("Enter a positive integer: ");
    }
    else
    {
        break;
    }
}
document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + b);

var c = Math.round(b);
document.write("<br>" + "round off value: " + c);

var d = Math.floor(b);
document.write("<br>" + "floor value: " + d);

var e = Math.ceil(b);
document.write("<br>" + "ceil value: " + e);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//2
var f = +prompt("Enter a negative floating point number: ");
while(1)
{
    if(f >= 0)
    {
        f = +prompt("Enter a negative floating point number: ");
    }
    else
    {
        break;
    }
}
document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + f);

var g = Math.round(f);
document.write("<br>" + "round off value: " + g);

var h = Math.floor(f);
document.write("<br>" + "floor value: " + h);

var i = Math.ceil(f);
document.write("<br>" + "ceil value: " + i);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//3
var a2 = +prompt("Enter number to have absolute value: ");
if(a2 < 0)
{
    var a3 = a2*(-1);
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a3);
}
else 
{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a2);
}


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//4
var a3 = Math.random();
a3 = (a3 * 6) + 1;
a3 = Math.floor(a3);
document.write("<br>" + "<br>" + "<br>" + "<br>" + "random dice value: " + a3);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//5
// var a4 = Math.random();
// a4 = (a4 * 2) + 1;
// a4 = Math.floor(a4);
// document.write("<br>" + "<br>" + "<br>" + "<br>" + a4 + "<br>" + "random coin value: ");

// if(a4 === 2)
// {
//     document.write("Heads");
// }
// else if(a4 === 1)
// {
//     document.write("Tails");
// }

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//6
// var a5 = Math.random();
// a5 = (a5 * 100) + 1;
// a5 = Math.floor(a5);

// document.write("<br>" + "<br>" + "<br>" + "<br>" + "random number between 1 and 100: " + a5);

// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//7
// var a6 = prompt("Enter your weight in kilograms");
// var a7 = parseFloat(a6);
// //a7 = Math.random() * a7;
// document.write("<br>" + "<br>" + "<br>" + "<br>" + "The weight of user is " + a7 + " kilograms");


// document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");




//8
// var a8 = Math.random();
// a8 = (a8 * 10) + 1;
// a8 = Math.floor(a8);
// var a9 = +prompt("Enter a number: ");

// if(a9 === a8)
// {
//     document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
//     document.write("<br>" + "Congratulation!");
// }
// else{
//     document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
    
// }


// QUESTION 1
// var a = new Date();
// document.write(a)



// QUESTION 2
// function x(a,b){
//     document.write("Hello "+a+" "+b);
// }
// x("Alex","Bhau")





// QUESTION 3
// function x(a,b){
//     document.write("sum is "+(a+b));
// }
// x(3,3)



// QUESTION 4
// function x(a,b,c){
//     if (b==="+")
//     { 
//         document.write("sum is ",((+a)+(+c)))
//     }
//     else if (b==="-")
//     {
//         document.write("subtraction is ",a-c)
//     }
//     else if (b==="*")
//     {
//         document.write("multiplication is ",a*c)
//     }
//     else if (b==="/")
//     {
//         document.write("division is ",a/c)
//     }
//     else if (b==="%")
//     {
//         document.write("remainder is ",a%c)
//     }
//     else
//     {
//         document.write("Invalid operator")
//     }
// }

// x(prompt("Enter num 1"),prompt("Enter operator"),prompt("Enter num 2"))






// QUESTION 5

// function x(a){
//     document.write(a*a)
// }
// x(3)



// QUESTION 6
// function x(a)
// {
//     if (a==0 || a==1){
//         return 1
//     }
//     else{
//         var fact=1;
//         for(i=a;i>1;i--){
//             fact *= (i)
//         }
//         document.write("Factorial is ",fact)
//     }

// }
// x(5)





// QUESTION 7

// function x(a,b)
// {
//     for(var i =a; i<=b;i++)
//     {
//         document.write(i+" ")
//     }

// }
// x(1,55)




// QUESTION 8
// function x(a,b){
//     document.write("H is ",Math.sqrt((a*a) + (b*b)))
// }
// x(5,5)



// QUESTION 9
// function x(a,b){
//     document.write("Area is ",(a*b))
// }
// x(prompt("Enter height"),prompt("Enter width"))


// QUESTION 10
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         document.write(str, " is not a palindrome")
  
//         return false;
//                 }
//     }
//     document.write(str," is a palindrome")
//    }
//    palindrome("CIVIC2");

// QUESTION 11
// function X(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     // Directly return the joined string
//     return splitStr.join(' '); 
//  }
 
//  document.write(X("the quick brown fox"));




//  QUESTION 12

// function x(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(X("Web Development Tutorial"));







//  QUESTION 13


// function x(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(x('w3resource.com', 'o'));






//  QUESTION 14

// function calcCircumference(radius) {
//     var circumference = (Math.PI * 2) * radius;
//     var area = (Math.pow(radius, 2)) * Math.PI;
//    document.write("The circumference of a circle with a radius of " + radius + " is " + circumference + " The area for this circle is " + area)
//   }
//    calcCircumference(37);
   











