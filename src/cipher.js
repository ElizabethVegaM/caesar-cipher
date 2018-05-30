window.cipher = {
  encode: () => {
    console.log(`Ingresando en Cipher Code`);   
    let txtToCode = document.getElementById('txtToCode').value.toUpperCase();
    let offsetCode = document.getElementById('numToMove').value; 
    console.log(`La frase a cifrar es ${txtToCode} y se moverá ${offsetCode} carácteres`);
    
    let encodedMsg = '';

    for(let i = 0; i < txtToCode.length; i++) {
      let cipher = (txtToCode.charCodeAt(i) - 65 + parseInt(offsetCode)) % 26 + 65;
      if(txtToCode.charCodeAt(i) === 32) {
        cipher = ' ';
        encodedMsg += ' ';
      }
      console.log(cipher);     
      encodedMsg += String.fromCharCode(cipher);
    }
    return encodedMsg;
    //(x - 65 + n) % 26 + 65
  },
  decode: () => {
    /* Acá va tu código */
  }
}


