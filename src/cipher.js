window.cipher = {
  encode: (txtToCode, offsetCode) => {
    console.log(`Ingresando en Cipher Code`);   
    
    console.log(`La frase a cifrar es ${txtToCode} y se moverá ${offsetCode} carácteres`);
    
    let encodedMsg = '';

    for(let i = 0; i < txtToCode.length; i++) {
      let cipher = (txtToCode.charCodeAt(i) - 65 + parseInt(offsetCode)) % 26 + 65;
      if(txtToCode.charCodeAt(i) === 32) {
        cipher = ' ';
        encodedMsg += ' ';
      } 
      encodedMsg += String.fromCharCode(cipher);
    }
    return encodedMsg;
  },
  decode: () => {    
  console.log(`Ingresando en Decipher Code`);   
  let txtToDecode = document.getElementById('txtToDecode').value.toUpperCase();
  let offsetDecode = document.getElementById('numToMoveDec').value; 
  console.log(`La frase a descifrar es ${txtToDecode} y se moverá ${offsetDecode} carácteres`);
  
  let decodedMsg = '';

  for(let i = 0; i < txtToDecode.length; i++) {
    let cipher = (txtToDecode.charCodeAt(i) - 65 - parseInt(offsetDecode)) % 26 + 65;
    if(txtToDecode.charCodeAt(i) === 32) {
      cipher = ' ';
      decodedMsg += ' ';
    }
    console.log(cipher);     
    decodedMsg += String.fromCharCode(cipher);
  }
  return decodedMsg;
  }
}


