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
    let readyMsg = window.cipher.encode();
    document.getElementById('encodedMsg').value = readyMsg;
    document.getElementById('encodedBox').style.display = 'block';
    });
    

  //Descifrado
  decipherBtn.addEventListener('click', () => {
    let readyMsg = window.cipher.decode();
    document.getElementById('decodedMsg').value = readyMsg;
    document.getElementById('decodedBox').style.display = 'block';
  });
  
  
  //Para "volver" a la página principal
  toMainBtn.addEventListener('click', () => {
    location.reload();
    });

};

