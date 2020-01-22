function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

document.getElementById("about").addEventListener("click", function(){
  alert("Dwarfs 2019\nGPLv3\nMade with love by mvasilkov and yutyo.");
});

document.getElementById("quit-game").addEventListener("click", function(){
      window.close();
});
