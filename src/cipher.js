window.cipher = {
  encode: (txtToCode, offsetCode) => {
    console.log('Ingresando en Cipher Code');
    // Concatenar en template string
    console.log(`La frase a cifrar es ${txtToCode} y se moverá ${offsetCode} carácteres`);
    // Variable vacía para guardar los caracteres cifrados
    let encodedMsg = '';
    // Ciclo que recorrerá el mensaje
    for (let i = 0; i < txtToCode.length; i++) {
      // En caso de que el usuario ingrese minúsculas
      if (txtToCode.charCodeAt(i) >= 97 && txtToCode.charCodeAt(i) <= 122) {
        let cipher = (txtToCode.charCodeAt(i) - 97 + parseInt(offsetCode)) % 26 + 97;
        encodedMsg += String.fromCharCode(cipher);
        // En caso de que el usuario ingree mayúsculas
      } else if (txtToCode.charCodeAt(i) >= 65 && txtToCode.charCodeAt(i) <= 90) {
        let cipher = (txtToCode.charCodeAt(i) - 65 + parseInt(offsetCode)) % 26 + 65;
        encodedMsg += String.fromCharCode(cipher);
        // En caso de espacios y carácteres especiales
      } else {
        encodedMsg += txtToCode[i];
      };
    };
    return encodedMsg;
  },
  decode: (txtToDecode, offsetDecode) => {
    console.log('Ingresando en Decipher Code');
    // Concatenar en template string
    console.log(`La frase a descifrar es ${txtToDecode} y se moverá ${offsetDecode} carácteres`);
    // Variable vacía
    let decodedMsg = '';
    // Ciclo que recorre el texto
    for (let i = 0; i < txtToDecode.length; i++) {
      // En caso de ingresar mayúsculas
      if (txtToDecode.charCodeAt(i) >= 65 && txtToDecode.charCodeAt(i) <= 90) {
        let cipher = (txtToDecode.charCodeAt(i) + 65 - parseInt(offsetDecode)) % 26 + 65;
        decodedMsg += String.fromCharCode(cipher);
      // En el caso deingresar  minúsculas 
      } else if (txtToDecode.charCodeAt(i) >= 97 && txtToDecode.charCodeAt(i) <= 122) {
        let cipher = (txtToDecode.charCodeAt(i) - 97 - parseInt(offsetDecode) + 52) % 26 + 97;
        decodedMsg += String.fromCharCode(cipher);
      // El resto de los carácteres se mantendrá igual
      } else {
        decodedMsg += txtToDecode[i];
      }  
    };
    return decodedMsg;
  }
};