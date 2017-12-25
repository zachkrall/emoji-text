// These Things Change

var emoji = '👏';
var newString;
var counter = 0;

// These Things Don't Change

var srcText = document.getElementById('srcText');
var result  = document.getElementById('result');
var hiddenResult  = document.getElementById('hiddenResult');
var active  = document.getElementById('active');
var social  = document.getElementById('social');
var copy  = document.getElementById('copy');
var tweet  = document.getElementById('tweet');

var dropDown  = document.getElementById('dropDown');
var emojiOption = dropDown.getElementsByClassName('option');

// Start things off right

active.innerHTML = emoji;

// Set Up Functions
function updateString(){

  if ( srcText.value ) {

    newString = emoji + ' ' + srcText.value.replace(/ /g, ' ' + emoji + ' ') + ' ' + emoji;
    result.innerHTML = newString;
    hiddenResult.value = newString;

    if ( counter > 0 ){ social.style.display = 'block'; }
    counter++;

  }

};


// Things Start Happening

srcText.onkeyup = function(){

  updateString();

};

for(var z = 0; z < emojiOption.length; z++) {

  emojiOption[z].onclick = function() {
    active.innerHTML = this.innerHTML;
    emoji = this.innerHTML;
    updateString();
  };

}

copy.onclick = function () {

    hiddenResult.select();
    document.execCommand("Copy");
    alert('Copied: ' + hiddenResult.value);

}

tweet.onclick = function () {

    window.open ('https://twitter.com/intent/tweet?text=' + newString.replace(/ /g, '%20'), 'twitter','width=600,height=430,toolbar=0,status=0');
    return false;

}
