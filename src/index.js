window.onload = () => {
  const welcomeBox = document.getElementById('welcomeBox');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const toMainBtn = document.getElementById('toMain');
  const cipherBtn = document.getElementById('cipherBtn');
  const decipherBtn = document.getElementById('decipherBtn');
  const decodedBox = document.getElementById('decodedBox');

  //Para mostrar la caja con el proceso de cifrado
  encodeBtn.addEventListener('click', () => {
    document.getElementById('encodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  //Para mostrar el proceso de descifrado
  decodeBtn.addEventListener('click', () => {
    document.getElementById('decodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  //Cifrado
  cipherBtn.addEventListener('click', () => {
    let txtToCode = document.getElementById('txtToCode').value.toUpperCase();
    let offsetCode = document.getElementById('numToMove').value;
    
    console.log(txtToCode.charCodeAt(offsetCode));

    document.getElementById('encodedBox').style.display = 'block';
  });

  //Descifrado
  decipherBtn.addEventListener('click', () => {
    let txtToDecode = document.getElementById('txtToDecode').value;
    let offsetDecode = document.getElementById('numToMoveDec').value;
    
  
    //aquí lo de la fórmula de decode xD
    document.getElementById('decodedBox').style.display = 'block';
  });
  
  
  //Para "volver" a la página principal
  toMainBtn.addEventListener('click', () => {
    location.reload();
    });

}

