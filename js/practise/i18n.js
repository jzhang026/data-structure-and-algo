function abbr(str) {
    let wordArr = str.split (' ');
    return wordArr.map(word => subAbbr(word)).join(' ');
  }
  function subAbbr(str) {
    if (str.length < 4) return str;
    let strArr = str.split('');
    let i = 0, result = [], prevChar;
    strArr.forEach((char, index) => {
      if(i === 0) {
        result.push(char);
        i++;
      } else if(index == str.length - 1) {
        result = result.concat([i-1, char])
      } else {
        switch(char) {
          case '-':
            result = result.concat([i-2, prevChar, '-']);
            i = 0;
            break;
          default:
            i++;
            prevChar = char;
        }
      }
    })
    return result.join('');
  }
  

// reursing
function abbr(str) {
    
}