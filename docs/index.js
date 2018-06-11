window.onload = () => {
  const welcomeBox = document.getElementById('welcomeBox');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const toMainBtn = document.getElementById('toMain');
  const cipherBtn = document.getElementById('cipherBtn');
  const decipherBtn = document.getElementById('decipherBtn');
  const decodedBox = document.getElementById('decodedBox');

  // Pop-up que muestra las instrucciones
  document.getElementById('popUp').addEventListener('click', () => {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  });

  // Para mostrar la caja con el proceso de cifrado
  encodeBtn.addEventListener('click', () => {
    document.getElementById('encodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  // Para mostrar el proceso de descifrado
  decodeBtn.addEventListener('click', () => {
    document.getElementById('decodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  // Cifrado
  cipherBtn.addEventListener('click', () => {
    let txtToCode = document.getElementById('txtToCode').value;
    let offsetCode = document.getElementById('numToMove').value;
    let readyMsg = window.cipher.encode(txtToCode, offsetCode);
    document.getElementById('encodedMsg').value = readyMsg;
    document.getElementById('encodedBox').style.display = 'block';
  });

  // Descifrado
  decipherBtn.addEventListener('click', () => {
    let txtToDecode = document.getElementById('txtToDecode').value;
    let offsetDecode = document.getElementById('numToMoveDec').value;
    let readyMsg = window.cipher.decode(txtToDecode, offsetDecode);
    document.getElementById('decodedMsg').value = readyMsg;
    document.getElementById('decodedBox').style.display = 'block';
  });

  // Para "volver" a la página principal
  toMainBtn.addEventListener('click', () => {
    location.reload();
  });
};