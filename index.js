document.addEventListener("DOMContentLoaded", function() {
  const btnme = document.getElementById("me");
  const div = document.getElementById("profilemenu");

  btnme.addEventListener('click', function(e){
    e.stopPropagation();
    div.style.display = div.style.display === "block" ? "none" : "block";
  });

  document.addEventListener('click', function(e){
    if (!div.contains(e.target) && e.target !== btnme) {
      div.style.display = "none";
    }
  });
});
