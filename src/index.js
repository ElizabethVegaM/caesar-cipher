window.onload = () => {
  const welcomeBox = document.getElementById('welcomeBox');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const toMainBtn = document.getElementById('toMain');
  const cipherBtn = document.getElementById('cipherBtn');
  const decipherBtn = document.getElementById('decipherBtn');
  const decodedBox = document.getElementById('decodedBox');

  encodeBtn.addEventListener('click', () => {
    document.getElementById('encodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  decodeBtn.addEventListener('click', () => {
    document.getElementById('decodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  cipherBtn.addEventListener('click', () => {
    //aquí lo de la fórmula de encode xD
    document.getElementById('encodedBox').style.display = 'block';
  });

  decipherBtn.addEventListener('click', () => {
    //aquí lo de la fórmula de decode xD
    document.getElementById('decodedBox').style.display = 'block';
  });
  
  
  
  
  
  
  
  
  
  
  toMainBtn.addEventListener('click', () => {
    location.reload();
    });

}

