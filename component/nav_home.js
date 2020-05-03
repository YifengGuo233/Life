document.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="home.html">Exam guide</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="home.html">Home</a>
    </li>
    <li class="nav-item">
      <div class="form-inline my-2 my-lg-0">
        <input id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button id="searchfriend" class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModal">Search</button>
      </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="account.html">Account</a>
    </li>
  </ul>
</div>
</nav>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="modal-body" class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

`);

document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred
  document.getElementById("searchfriend").addEventListener("click", searchfriend, false)
})


function searchfriend(e){
  friend = document.getElementById("searchinput").value;
  document.getElementById("searchinput").value = "";
  body = document.getElementById("modal-body");
  var ref = db.collection("User");
  ref.where("name", "==", friend)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var div = document.createElement("div");
            var p = document.createElement("p");
            p.innerHTML = doc.data().name;
            var button = document.createElement("button");
            button.innerHTML = "Add";
            button.id = doc.id;
            button.className = "btn btn-primary";
            div.appendChild(p);
            div.appendChild(button);
            document.getElementById("modal-body").appendChild(div);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  console.log("click");
}