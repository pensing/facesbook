var facesarr=["Maha","Jack","Jan-Willem","Sebastiaan","Frans","Alex","Eline","Paul"];

const voornaamarr=["Maha","Jack","Jan-Willem","Sebastiaan","Frans","Alex","Eline","Paul"];
const geslachtarr=["Vrouw","Man","Man","Man","Man","Man","Vrouw","Man"];

function printArr() {
		 for (i=0;i<8;i++) {
		 document.write(facesarr[i]+"<br/>");
		 }
}


var myFaces;

var face = {};

function buildFaces() {
var faces = new Array();
for (i=0;i<8;i++) {
	faces.push(facesarr[i]);
}
return faces;
}


function buildFacesObj() {
var faces = new Array();
for (i=0;i<8;i++) {
var obj={voornaam:voornaamarr[i],geslacht:geslachtarr[i],achternaam:"Anaam",
fullname : function() {
    return this.voornaam + " " + this.achternaam;
  }
};
faces.push(obj);
}
return faces;
}

function printFacesObj(mf) {
for (i=0;i<8;i++) {
var obj=mf[i];
document.write(obj.fullname+"  "+obj.geslacht);
}
}

