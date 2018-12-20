var counter=0;

var voornaamarr=["Maha","Jack","Jan-Willem","Sebastiaan","Frans","Alex","Eline","Paul"];
var achternaamarr=["Almasri","Sleebos","Haeke","Prins","Heijnen","Coenen","Eijkelenkamp","Ensing"];
var geslachtarr=["Vrouw","Man","Man","Man","Man","Man","Vrouw","Man"];

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

function loadArrays() {
 varr = JSON.parse(localStorage.getItem('varray'));
 aarr = JSON.parse(localStorage.getItem('aarray'));
 garr = JSON.parse(localStorage.getItem('garray'));
}

function editRec(index){
		 alert(index);
	var Rec = JSON.parse(localStorage.getItem(index));
}

function deleteRec(index){
    var i = index.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}


function addRec(index){
    var x = document.getElementById("myTable").rows.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = x-1		  ;
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
    cell5.innerHTML = '<i class="fas fa-pencil-alt" style="color:white;font-size:24px" onclick="editRec(this)"></i>';
    cell6.innerHTML = '<i class="fas fa-trash-alt" style="color:white;font-size:24px" onclick="deleteRec(this)"></i>';
}


function addRecInput(index){
    var x = document.getElementById("myTable").rows.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = x-1;
    cell2.innerHTML = document.getElementById("txtVNaam").value;
    cell3.innerHTML = document.getElementById("txtANaam").value;
    cell4.innerHTML = document.getElementById("txtGeslacht").value;
    cell5.innerHTML = '<i class="fas fa-pencil-alt" style="color:white;font-size:24px" onclick="editRec(this)"></i>';
    cell6.innerHTML = '<i class="fas fa-broom" style="color:white;font-size:24px" onclick="editRec(this)"></i>';
    cell7.innerHTML = '<i class="fas fa-trash-alt" style="color:white;font-size:24px" onclick="deleteRec(this)"></i>';
}


var index = 1;
function insertRow(){
            var table=document.getElementById("myTable");
            var row=table.insertRow(table.rows.length);

            var cell1=row.insertCell(0);
            var t1=document.createElement("input");
                t1.id = "txtVNaam"+index;
                cell1.appendChild(t1);

            var cell2=row.insertCell(1);
            var t2=document.createElement("input");
                t2.id = "txtANaam"+index;
                cell2.appendChild(t2);

            var cell3=row.insertCell(2);
            var t3=document.createElement("input");
                t3.id = "txtGeslacht"+index;
                cell3.appendChild(t3);

            var cell4=row.insertCell(3);
            var t4=document.createElement("input");
                t4.id = "txtOccupation"+index;
                cell4.appendChild(t4);
      index++;

}


function deleteRec2(index){
	localStorage.removeItem(index);
}



function saveRec(index){
	localStorage.setItem(index, "");
}

function clearRec(){
}



function initDB(){ 
	var table = '<table class="table table-striped table-dark" id="myTable"><thead><tr><th scope="col">#</th><th scope="col">Voornaam</th><th scope="col">Achternaam</th><th scope="col">Geslacht</th><th scope="col">Edit</th><th scope="col">Del</th></tr></thead><tbody>';
	for (i=0;i<8;i++) {
	row = '<tr id="regel'+i+'"><td scope="row">'+i+'</td><td>'+voornaamarr[i]+'</td><td>'+achternaamarr[i]+'</td><td>'+geslachtarr[i]+'</td>'+
	'<td><i class="fas fa-pencil-alt" style="color:white;font-size:24px" onclick="editRec(this)"></i></td>'+
	'<td><i class="fas fa-trash-alt" style="color:white;font-size:24px" onclick="deleteRec(this)"></i></td></tr>';
	table = table + row;
	}
	table = table + '</tbody></table>';
	document.getElementById("dbView").innerHTML = table;
}


function clearDB(){ 
	var table = '<table class="table table-striped table-dark" id="myTable"><thead><tr><th scope="col">#</th><th scope="col">Voornaam</th><th scope="col">Achternaam</th><th scope="col">Geslacht</th><th scope="col"></th><th scope="col"></th></tr></thead><tbody>';
	table = table + '</tbody></table>';
	document.getElementById("dbView").innerHTML = table;
}


function loadDB(){ 
	document.getElementById("dbView").innerHTML = JSON.parse(localStorage.getItem('tabel'));
}

function saveDB(){ 
	localStorage.setItem('tabel', JSON.stringify(document.getElementById("dbView").innerHTML));
	
	stripTabel();
	localStorage.setItem('varray', JSON.stringify(varr));
	localStorage.setItem('aarray', JSON.stringify(aarr));
	localStorage.setItem('garray', JSON.stringify(garr));
}

function buildView() {
	var table = '<table class="table table-striped table-dark"><thead><tr><th scope="col">#</th><th scope="col">Voornaam</th><th scope="col">Achternaam</th><th scope="col">Geslacht</th><th scope="col"></th><th scope="col"></th></tr></thead></table>';
	document.getElementById("dbView").innerHTML = table;
	
}

function wis(){
    /*location.reload();*/
    localStorage.clear()
}


function sortDB(column) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

    while (switching) {

    switching = false;
    rows = table.rows;
	
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
