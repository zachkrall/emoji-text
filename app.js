var emoji = '👏';
var newString;
var counter = 0;

function updateString(){

  newString = emoji + ' ' + document.getElementById('srcText').value.replace(/ /g, ' ' + emoji + ' ') + ' ' + emoji;
  document.getElementById('result').innerHTML = newString;
  document.getElementById('hiddenResult').value = newString;

  if ( counter > 0 ){
    document.getElementById('social').style.display = 'block';
  }

  counter++;
  console.log(counter);
};

document.getElementById('active').innerHTML = emoji;

document.getElementById('srcText').onkeyup = function(){
  updateString();
};

var choices = document.getElementById('dropDown').getElementsByClassName('option');
for(var z = 0; z < choices.length; z++) {
    var elem = choices[z];
    elem.onclick = function() {
      document.getElementById('active').innerHTML = this.innerHTML;
      emoji = this.innerHTML;
      updateString();
      console.log(this.innerHTML);
    };
}

document.getElementById('copy').onclick = function () {

  var copyInput = document.getElementById('hiddenResult');
  copyInput.select();
  document.execCommand("Copy");

  console.log('copied: ' + copyInput.value);

  alert('Copied to your clipboard!');

}

document.getElementById('tweet').onclick = function () {

  if ( !newString ) {

    alert('write something first!');

  } else {
  window.open ('https://twitter.com/intent/tweet?text=' + newString.replace(/ /g, '%20'), 'twitter','width=600,height=430,toolbar=0,status=0');
  return false;
  }

}
