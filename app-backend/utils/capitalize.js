

function capitalizeOneWord(value){
  const firstLetter = value[0].toUpperCase();

  const final = firstLetter + value.substring(1);

  return final 
}


function capitalizeWords(value){
  const nameArr = value.split(' ');
  nameArr.forEach((word, index) => {

    let firstLetter = word[0].toUpperCase();
    // console.log('Is this being run?');
    word = firstLetter + word.substring(1);
    nameArr[index] = word;

  })
  let words = nameArr.join(' ')
  return words
}
  
module.exports = { capitalizeOneWord, capitalizeWords }