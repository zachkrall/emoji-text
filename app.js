document.getElementById('srcText').onkeyup = function(){
  document.getElementById('result').innerHTML = '👏 ' + document.getElementById('srcText').value.replace(/ /g, ' 👏 ') + ' 👏' ;
};
