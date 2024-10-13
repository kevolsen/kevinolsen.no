window.onload = function() {
    document.getElementById("curYear").innerHTML = new Date().getFullYear();

    var modal = document.getElementById("myModal");
    var btnCV = document.getElementById("btnCV");
    var span = document.getElementsByClassName("close")[0];

    btnCV.onclick = function(event) {
      event.preventDefault();
      modal.style.display = "block";
    }

    btnViewCV.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
      }

    span.onclick = function() {
      console.log('Close button clicked');
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        console.log('Clicked outside the modal');
        modal.style.display = "none";
      }
    }
}