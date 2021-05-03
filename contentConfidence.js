
////////////// search luka

document.onmouseover=me1;
console.log("run luka........");

function me1()
{
document.onmouseover=lu;
//var img=document.getElementsByTagName("img")[1];
//img.onclick=newtap;
var i=document.getElementsByTagName("span")[23].setAttribute("id","button1");
var query=document.getElementsByTagName("span")[24].textContent;
var button = document.getElementById('button1');
// click borrow or narrow
var nr=document.getElementsByName("Narrow")[0].checked;
var br=document.getElementsByName("Broad")[0].checked;
var utd=document.getElementsByName("Unable to Determine")[0].checked;
var countwords=query.split(" ");
countwords=countwords.length;
if(nr==false && br==false && utd==false)
{
	if(countwords==2){
	  document.getElementsByName("Broad")[0].click();
	}
	else
	{
			  document.getElementsByName("Narrow")[0].click();

	}

}
// Analyst Confidence level  radio box
var High=document.getElementsByName("High")[0].checked;
var Medium=document.getElementsByName("Medium")[0].checked;
var Low=document.getElementsByName("Low")[0].checked;
if(High==false && Medium==false && Low==false)
{
document.getElementsByName("High")[0].click();
}
//else{
//	return;
//}
    button.onclick = function() {
  var x=query;
  var x = x.replace(":","");
 

//var url="https://www.google.com/search?q=";
var url="https://www.google.com/search?tbm=isch&q=";
window.open(url+x);

    };

}
/////////////// end search luks
console.log("contents script running");
function newtap()
{
	
	var src=document.getElementsByTagName("img")[1].src;
	var join="/";
	window.open(src+join);
}
function Hilitor(id, tag)
{

  // private variables
  var targetNode = document.getElementById(id) || document.body;
  var hiliteTag = tag || "MARK";
 // var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM|SPAN)$");
   var skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM)$");

  var colors = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"];
  var wordColor = [];
  var colorIdx = 0;
  var matchRegExp = "";
  var openLeft = false;
  var openRight = false;

  // characters to strip from start and end of the input string
  var endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', "g");

  // characters used to break up the input string into words
  var breakRegExp = new RegExp('[^\\w\'-]+', "g");

  this.setEndRegExp = function(regex) {
    endRegExp = regex;
    return endRegExp;
  };

  this.setBreakRegExp = function(regex) {
    breakRegExp = regex;
    return breakRegExp;
  };

  this.setMatchType = function(type)
  {
    switch(type)
    {
      case "left":
        this.openLeft = false;
        this.openRight = true;
        break;

      case "right":
        this.openLeft = true;
        this.openRight = false;
        break;

      case "open":
        this.openLeft = this.openRight = true;
        break;

      default:
        this.openLeft = this.openRight = false;

    }
  };

  this.setRegex = function(input)
  {
    input = input.replace(endRegExp, "");
    input = input.replace(breakRegExp, "|");
    input = input.replace(/^\||\|$/g, "");
    if(input) {
      var re = "(" + input + ")";
      if(!this.openLeft) {
        re = "\\b" + re;
      }
      if(!this.openRight) {
        re = re + "\\b";
      }
      matchRegExp = new RegExp(re, "i");
      return matchRegExp;
    }
    return false;
  };

  this.getRegex = function()
  {
    var retval = matchRegExp.toString();
    retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
    retval = retval.replace(/\|/g, " ");
    return retval;
  };

  // recursively apply word highlighting
  this.hiliteWords = function(node)
  {
    if(node === undefined || !node) return;
    if(!matchRegExp) return;
    if(skipTags.test(node.nodeName)) return;

    if(node.hasChildNodes()) {
      for(var i=0; i < node.childNodes.length; i++)
        this.hiliteWords(node.childNodes[i]);
    }
    if(node.nodeType == 3) { // NODE_TEXT
      if((nv = node.nodeValue) && (regs = matchRegExp.exec(nv))) {
        if(!wordColor[regs[0].toLowerCase()]) {
          wordColor[regs[0].toLowerCase()] = colors[colorIdx++ % colors.length];
        }

        var match = document.createElement(hiliteTag);
        match.appendChild(document.createTextNode(regs[0]));
        match.style.backgroundColor = wordColor[regs[0].toLowerCase()];
        match.style.color = "#000";

        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    };
  };

  // remove highlighting
  this.remove = function()
  {
    var arr = document.getElementsByTagName(hiliteTag);
    while(arr.length && (el = arr[0])) {
      var parent = el.parentNode;
      parent.replaceChild(el.firstChild, el);
      parent.normalize();
    }
  };

  // start highlighting at target node
  this.apply = function(input)
  {
    this.remove();
    if(input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) {
      return;
    }
    if(this.setRegex(input)) {
      this.hiliteWords(targetNode);
    }
    return matchRegExp;
  };

}
//document.onmouseover=lu;
function lu()
{   
document.onmouseover=me1;
//document.getElementsByTagName("span")[22].setAttribute("id", "lu");
//var text=document.querySelector("h1").innerText;
        var myHilitor2 = new Hilitor("body");
        myHilitor2.setMatchType("left");
      var text=document.querySelectorAll("span")[24].textContent;
          myHilitor2.apply(text);
		  //	var el=document.getElementsByClassName("react-grid-item static cssTransforms")[9].textContent;
//if(el=="special_offers: ")
//{
	var el=document.getElementsByClassName("react-grid-item static cssTransforms")[9].style.width="500px";
		 //el.id="removeluka";
		// var element=document.getElementById("removeluka");
		     //element.parentNode.removeChild(element);
//}
//else{
	
//}
		  console.log("run highlet luka");
findrefurbished();
      }
// find refurbished
function findrefurbished() {
			var r = document.getElementsByClassName("react-grid-item static cssTransforms")[5].innerText;
var rcount= (r.match(/Refurbished|Renewed|used|open box|open-box|Re-certified|PREOWNED|Pre-Owned|Pre Owned|Re certified|Like New|Scratch & Dent|Scratch And Dent|Refurbsihed|Scratch and Dent/gi)).length;
            //alert((r.match(/Geeks/gi)).length);
			if(0<rcount){
				document.getElementsByClassName("react-grid-item static cssTransforms")[5].style.backgroundColor="#FFB6C1";
			}
		}


