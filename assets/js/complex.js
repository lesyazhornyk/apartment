const buildItem = document.querySelectorAll('.build-item');
const buildShow = document.querySelector('#build-show');
const floorsShow = document.querySelector('#floors-show');
const flatsShow = document.querySelector('#flats-show');
const buildHide = document.querySelectorAll('[data-flats="0"]');

buildHide.forEach(hide => {
  hide.classList.add('build-hide');
  hide.setAttribute('data-flats', 'Дом продан');
  
  hide.closest('a').addEventListener('click' , (e)=>{
    e.preventDefault();
  });
});

buildItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    const dataBuildNumber = item.getAttribute('data-build-number');
    const dataFloors = item.getAttribute('data-floors');
    const dataFlats = item.getAttribute('data-flats');

    buildShow.innerText = dataBuildNumber;
    floorsShow.innerText = dataFloors;
    flatsShow.innerText = dataFlats;

    if (dataFlats === "Дом продан" || dataFlats === "0") {
      flatsShow.style.color = "red";
      item.querySelector('.status-open').style.display = "none";
      item.querySelector('.status-close').style.display = "block";
    } else {
      flatsShow.style.color = "";
    item.querySelector('.status-open').style.display = "block";
    item.querySelector('.status-close').style.display = "none";
    }
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('build-item-zero-red', 'build-item-zero-green');
  });
});