var axios = require('axios');
var Promise = require('es6-promise');
var fs = require('fs');

var emojiArray = [];

axios.get('https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json')
.then((item)=>{

  item.data.map((item) =>{
    if (item.emoji != null){
      emojiArray.push(item.emoji);
    }
  });

}).catch((err)=>{

  return console.log(err);

}).then(()=>{

  let newJson = {
    "emoji": emojiArray
  };
  fs.writeFile('../src/emoji.json', JSON.stringify(newJson), 'utf8', (err)=>{
    if (err) throw err;
    console.log('file written');
  });

});


//
// data.map((item) =>{
//   emojiArray.push(item.emoji);
// });
//
// console.log(emojiArray);
//
// module.exports = emojiArray;
//
