var varr=[];
var aarr=[];
var garr=[];

function stripTabel() {
 
  var trs = document.getElementById("myTable").rows;
  
  for (i=1; i<trs.length; i++) {
  varr.push(trs[i].cells[1].innerHTML);
  aarr.push(trs[i].cells[2].innerHTML);
  garr.push(trs[i].cells[3].innerHTML);
  }

}
  
function buildTabel(){

  s="";
  
  for (i=0; i<trs.length-1; i++) {
  s=s+"<tr>";
  s=s+"<td>"+i+"</td>";
  s=s+"<td>"+varr[i]+"</td>";
  s=s+"<td>"+aarr[i]+"</td>";
  s=s+"<td>"+garr[i]+"</td>";
  s=s+"</tr>";
  }
  
  tablestr = "<table style='background-color: yellow;'>" + s + "</table>";
  
  document.getElementById("test").innerHTML = tablestr;
  

}
