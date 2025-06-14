window.onload = () => {
  setTimeout(() => {
    document.querySelector('.loading').classList.add('hidden');
    document.querySelector('.envelope-container').classList.remove('hidden');
  }, 2000); // Heart loader lasts for 2 secs
};

function openEnvelope() {
  document.querySelector('.envelope-container').classList.add('hidden');
  document.querySelector('.message').classList.remove('hidden');

  setTimeout(() => {
    document.querySelector('.photos').classList.remove('hidden');
  }, 1500);
}