const tele = document.getElementById('text');
const wid = tele.offsetWidth;
tele.style.transformOrigin = `${wid / 2}px center`;
function updateFontSize() {
    const screenWidth = window.innerWidth;
    document.documentElement.style.setProperty('--fs', screenWidth / 18); // 这里除以10是个示例，请根据需要调整
  }
updateFontSize();
window.addEventListener('resize', updateFontSize);