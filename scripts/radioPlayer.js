export const radioPlayerInit = () => {
    
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');

    const audio = new Audio();
    audio.type = 'audio/aac';


    radioStop.disabled = true;

    const changeIconPlay = () => {
      if (audio.paused){
          radio.classList.remove('play');
          radioStop.classList.add('fa-play');
          radioStop.classList.remove('fa-stop');
      }  else {
        radio.classList.add('play');
        radioStop.classList.add('fa-stop');
        radioStop.classList.remove('fa-play');
      }
    };

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    };

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');
        selectItem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const img = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = img;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;

        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused){
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100;
    });
}