window.onload = () => {
  const welcomeBox = document.getElementById('welcomeBox');
  const encodeBtn = document.getElementById('encodeBtn');
  const decodeBtn = document.getElementById('decodeBtn');
  const toMainBtn = document.getElementById('toMain');

  encodeBtn.addEventListener('click', () => {
    document.getElementById('encodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  decodeBtn.addEventListener('click', () => {
    document.getElementById('decodeBox').style.display = 'block';
    welcomeBox.style.display = 'none';
  });

  
  
  
  
  
  
  
  
  
  
  
  toMainBtn.addEventListener('click', () => {
    location.reload();
    });

}

