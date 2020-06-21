// ................ CHAPTER N0 20 to 25...............................//
// ...........................Task 1
/*var first_Name=prompt("Enter First Name :");
var last_Name=prompt("Enter Last Name :");
document.write("FULL_NAME: "+first_Name+" "+last_Name);
..............................Task 2
var Fav_mob=prompt("Enter Favorite Mobile Model?");
document.write("My Favorit Phone is : "+ Fav_mob+ "\n"+"Length of string : "+ Fav_mob.length); 
..............................Task 3
var word="Pakistani";
var index=word.indexOf("n");
document.write("String : "+word+"<br>"+"Index of 'n' :"+index);
...............................Task 4
var word="Hello World";
var last_index= word.lastIndexOf("l");
document.write("String : "+word +"<br>"+"Last Index of 'l' :"+last_index);

...............................Task 5
var word="Pakistani";
var index_ch=word.charAt(3);
document.write("String : "+word +"<br>"+"Character at index 3 : "+index_ch);
...............................Task 6
var first_Name=prompt("Enter First Name :");
var last_Name=prompt("Enter Last Name :");
var FULL_NAME=first_Name.concat( " " +last_Name);
document.write("Full Name: " +FULL_NAME);
...............................Task 7
var city="Hyderabad";
var replace=city.replace("Hyder","Islam");
document.write("City: "+city+ "<br>"+
"After replacement: "+ replace);
var messsage="Ali and Sami are best friends.They play circket and football together";
var replace=messsage.splice(/and/g,"&");
document.write(replace);
................................Task 8

var string ="472";
document.write("Value: "+string+"<br>"+ " Type: "+ (typeof string)+"<br>");
var number =parseInt(string);
document.write("Value: "+ number +"<br>"+ " Type: "+ (typeof number));

.................................Task 9
var user=prompt("Enter any word ");
var capital_letter= user.toUpperCase();
document.write("User input: "+user +"<br>"+"Upper case: "+capital_letter);
................................Task 10
var text=prompt("Enter any word");
var first_letter=text.slice(0,1);
first_letter= first_letter.toUpperCase();
var rem_words=text.slice(1);
rem_words= rem_words.toLowerCase();
var title=first_letter+rem_words;
document.write("Title case: "+title);
..............................Task 11
var num=35.36;
var string=num.toString();
var convert=string.replace(".","");
document.write("Number: "+num+"<br>"+"Result : "+convert);
 .............................Task 12
var user=prompt("ENTER USERNAME");
for(var i=0; i<user.length; i++)
{
    var text= user.charCodeAt(i);
    if(text===33)
    {
    alert("Please enter a valid username");
    }
    if(text===44)
    {
    alert("Please enter a valid username");
    }
    if(text===46)
    {
    alert("Please enter a valid username");
    }
    if(text===64)
    {
    alert("Please enter a valid username");
    }
   

    
}
...........................................Task 13
var array=['cake','apple pie','cokeie','chips','patties'];
var user=prompt("Welcome to ABC Bakery.What do you went to order sir/ma'am?");
user=user.toLowerCase();
var items=array.indexOf(user);
if (array.indexOf(user)!=-1)
{
alert(user+" is avaliable at index "+items+" in our bakery");
}
else
{
    alert("We are sorry. "+  user +" is not avaliable in our bakery");
  
}

Task 14
var uni="University of Karachi";
var spilt= uni.split("");
{
    for(var i=0; i<spilt.length; i++)
    document.write(spilt[i]+"<br>");
}
.......................................Task 15
                        

.......................................Task 16
var user=prompt("Enter any word");
var last_ch=user.slice(-1);
document.write("User input: "+user+"<br>"+"Last character of input: "+last_ch);

var string=" The quick brown fox jumps over the lazy dog";
var small=string.toLowerCase();
var spilt=small.split(" ");
var match= 'the';
var count=0;
for(var i=0; i<spilt.length; i++)
{
     if(spilt[i]==match)
     count++;
}
document.write("Text: "+string+ "<br>"+"There are "+count+" occurrence of the word "+ match);


// ................ CHAPTER N0 26 to 30...............................//
// ...........................Task 1



var positive_Integer=prompt("Enter any positive value");
var float=positive_Integer /1964;
document.write("number: "+float+"<br>");
var round_off=Math.round(float);
document.write("round off value: "+round_off+"<br>");
var floor =Math.ceil(float);
document.write("ceil value: "+floor); 

 ...........................Task 2
var negative_Integer=prompt("Enter any positive value");
var float=negative_Integer /23;
document.write("number: "+float+"<br>");
var round_off=Math.round(float);
document.write("round off value: "+round_off+"<br>");
var floor =Math.ceil(float);
document.write("ceil value: "+floor);

 ...........................Task 3
var absoulute_Value=prompt("Enter Absoulute Value ");
var answer=Math.abs(absoulute_Value);
document.write("The absolute value of "+absoulute_Value+" is " +answer);
 ...........................Task 4

var dicRoll=Math.floor(Math.random()*6)+1;
document.write("random dice value: "+dicRoll+'<br>');
var dicRoll=Math.floor(Math.random()*6)+1;
document.write("random dice value: "+dicRoll); 

 ...........................Task 5
var toss=(Math.random()*2)+1;
var floor=Math.floor(toss);
if(floor == 2)
{
    document.write(floor+"<br>"+"random coin value: Heads"+"<br>");
}

    else
    {

    document.write(floor+"<br>"+"random coin value: Tails"+"<br>"); 
    }
  ...........................Task 6
  var start=(Math.random()*100)+1;
  var floor=Math.floor(start);
  document.write("Random Number between 1 and 100: "+floor);

 ...........................Task 7
  var user=prompt("Enter your weight in kilogram");
  var a=parseFloat(user);
  alert("The weight of user is: "+ user +" kilograms");
  var user=prompt("Enter a number between 1 to 10");
  var random=(Math.random()*10)+1;
  var floor=Math.floor(random);

   if(floor==2)
  {
      alert("Congratulation the user !");
  }
  else
  {
      alert("Try again");
  }*/

  
  // ................ CHAPTER N0 30 to 34...............................//
// ...........................Task 1

 /*var date=new Date();
 document.write(date);
...........................Task 2
 
 var month=["Jan","Feb","March","April","May","June","July","August","September","Octuber","November","December"];
 var date=new Date();
 document.write("Current month: "+month[date.getMonth()]);

 ...........................Task 3
 var date=new Date();
 var String =date.toString();
 var today=String.slice(0,3);
 document.write("Today is "+today);

 ...........................Task 4

var day=["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];
var date=new Date();
var today=date.getDay();

if(day[today]==="Sun"||day[today]==="Sat")
{
    document.write("It's Fun day")
}
...........................Task  5
var date = new Date();
var Today_date=date.getDate();
if(Today_date<16)
{
    document.write("First fifteen days of the month");
}
else
{
    document.write("Last days of the month");
}
//...........................Task 6

var date = new Date();
var min_Milli =date.getTime();
var convert= min_Milli/(1000*60*60);
++++document.write("Current Date: "+date+"<br>");
document.write("Elapsed millisecond since January 1,1970: "+min_Milli+"<br>");
document.write("Elapsed minutes since January 1, 1970: "+convert);



function date(){
  document.write(new Date)  
}
date(); */























   