/*
1. EnsureJAVASCRIPT LANGUAGE PUBLIC
Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. 
Otherwise it should return the given value.
*/
function ensure(value) {
  if(value === undefined)
    throw new Error()
  return value;

}

/*
Remove PropertyJAVASCRIPT LANGUAGE PUBLIC
Implement the removeProperty function which takes an object and property name, and does the following:
If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.
*/
function removeProperty(obj, prop) {
  if (Object.keys(obj).indexOf(prop) != -1){
    delete obj[prop];
    return true;
  }
  return false;
}
/*
 Check DigitJAVASCRIPT STRINGS PUBLIC NEW
Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.
*/
/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  var str = "" + membershipId;
  var result = 0;
  for(var i = 0 ; i< str.length; i ++){
     result += parseInt(str[i])
  }
  return result <10 ? result : createCheckDigit(result);
}

console.log(createCheckDigit("55555"));

/*DateJAVASCRIPT STRINGS PUBLIC
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.*/
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var dates = userDate.split("/");
   
  return dates[2] + (dates[0].length >1 ? dates[0] : "0"+ dates[0]) + (dates[1].length >1 ? dates[1] : "0"+ dates[1]);
}

console.log(formatDate("12/31/2014"));

/*
Image GalleryJAVASCRIPT DOM MANIPULATION PUBLIC
An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:

<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>
Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it's HTML code should look like this:

<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</di>
*/
function setup() {
  // Write your code here.
  var as = document.getElementsByClassName('remove'); 
  for (var i = 0; i < as.length; i++) { 
    as[i].onclick = function() {
      var parentNode = this.parentNode;
      this.parentNode.parentNode.removeChild(parentNode); 
    }
    
  }
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
/*
6. ClosuresJAVASCRIPT BUG FIXING CLOSURES PUBLIC
Fix the bugs in the registerHandlers function. An alert should display anchor's zero-based index within a document instead of following the link.

For example, in the document below, the alert should display "2" when Google anchor is clicked since it is the third anchor element in the document and its zero-based index is 2.

<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/
function registerHandlers() {
  var as = document.getElementsByTagName('a');
   
  for (var i = 0; i < as.length; i++) {
    as[i].id = i;
    as[i].onclick = function() {
      alert(this.id);
      return false;
    }
    
  }
}

/* LoopJAVASCRIPT BUG FIXING DOM MANIPULATION PUBLIC
Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.

For example, after appendChildren is executed, the following divs:

<div id="a">
  <div id="b">
  </div>
</div>
should take the following form (assuming decorateDiv does nothing):

<div id="a">
  <div id="b">
    <div></div>
  </div>
  <div></div>
</div>
The code below should do the job, but for some reason it goes into an infinite loop. Fix the bugs.*/