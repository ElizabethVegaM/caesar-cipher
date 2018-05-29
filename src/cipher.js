window.cipher = {
  encode: () => {
    let txtToCode = document.getElementById('txtToCode').value.toUpperCase();
    let offsetCode = document.getElementById('numToMove').value; 
    let encodedMsg = '';
    for(let i = 0; i < txtToCode.length; i++) {
      let cipher = (txtToCode.charCodeAt(i) + parseInt(offsetCode)) % 26 + 65;
      console.log(cipher);
      let ciphered = String.fromCharCode(cipher[i]);
      console.log(ciphered);
      encodedMsg += ciphered[i];
      console.log(encodedMsg);
          }


    //(x - 65 + n) % 26 + 65
  },
  decode: () => {
    /* Acá va tu código */
  }
}


