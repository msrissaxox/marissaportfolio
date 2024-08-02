'use strict';

// function([string1, string2, string3],target id,[color1,color2, color3])    

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);

  //first function inside of the main function
//This method on window calls a function or executes a 
//code snippet, with a fixed time delay between each call.
  
window.setInterval(function() {
//this logic occurs when the letters are deremented to 0
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      // The global setTimeout() method sets a timer which executes a 
      //function or specified piece of code once the timer expires.
      window.setTimeout(function() {
        //removes the first color from the colors array
        var usedColor = colors.shift();
        //adds the removed color to the end of the colors array
        colors.push(usedColor);
        //removes the first word from the words array
        var usedWord = words.shift();
        //adds the removed word to the end of the words array
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        //this increases the letter count by 1
        letterCount += x;
        waiting = false;
      }, 1000)

    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)

    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 130)




//second function inside of main function creates the blinking effect every 400 milliseconds
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}
//calling the function here and inputting the parameters
consoleText(['Marissa Lamothe', 'Front End Engineer', 'Freelancer'], 'text',['#00FF00','#FFBF00','#00FFFF']);


