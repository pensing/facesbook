function show() {
document.getElementById("faces").innerHTML = "Hello World";
}

function showface() {
var face = 'test';
return face;
}

function showface2() {
var face = '    <div class="col-sm-6 col-lg-3">
      <div class="card shadow mb-5">
        <img class="card-img-top" src="images/woman.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Eline</h5>
          <p class="card-text">...</p>
          <a href="#" class="btn btn-dark">Bezoek</a>
        </div>
      </div>
    </div>
';
return face;
}

function showfaces() {
var i;
for (i=0;i<=8;i++) {
showface(i);
}

}
