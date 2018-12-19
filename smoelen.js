
function selectall() {
showhidegender("male","block");
showhidegender("female","block");
}

function selectfemale() {
showhidegender("male","none");
showhidegender("female","block");
}

function selectmale() {
showhidegender("female","none");
showhidegender("male","block");
}

function showhidegender(g,sh) {
var x;
x = document.getElementsByClassName(g);
  for (i=0; i<x.length; i++) {
      x[i].style.display = sh;
  }
}

function tel() {
var x = document.getElementsByClassName("male").length;
alert(x);
}

function zoekFunction() {
    var input, filter, divs, h, i, txtValue;
    input = document.getElementById("zoekInput");
    filter = input.value.toUpperCase();
    divs = document.getElementsByClassName("person");

    for (i = 0; i < divs.length; i++) {
        h = divs[i].getElementsByTagName("h3")[0];
        txtValue = h.textContent || h.innerText;
		txtValue = h.innerText;
        if (txtValue.toUpperCase().indexOf(filter) == 0) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
}




function show() {
document.getElementById("faces").innerHTML = "Hello World";
}

function showface() {
var face = 'test';
return face;
}

function showface2(vnaam,anaam,geslacht) {
  imgvar = "man";
  colvar = "bc";
  genvar = "male";
  if (geslacht == "Vrouw") { imgvar = "woman"; colvar = "pc"; genvar = "female";};
  var face = "<div class='person "+genvar+" col-sm-6 col-lg-3'><div class= 'card shadow mb-5 "+colvar+"'>" +
          "<img class='card-img-top' src='images/"+imgvar+".png' alt='Card image cap'>" +
          "<div class='card-body'><h3 class='card-title'>"+vnaam+" "+anaam+"</h3 >" +
          "<p class='gender card-text'>"+geslacht+"</p></div></div></div>";
  return face;
}


function buildfaces() {
  var htmlstr; htmlstr = "";
  for (i=0;i<8;i++) {
  	htmlstr = htmlstr + showface2(voornaamarr[i],achternaamarr[i],geslachtarr[i]);
  }
  document.getElementById("faces").innerHTML = htmlstr;
}


function showfaces() {
  var i;
  for (i=0;i<=8;i++) {
  showface(i);
  }
}
