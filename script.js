window.addEventListener('keypress', (event) => {
  document.querySelector('.container').innerHTML = `
    <div class="keypressed ">
          <div>
            <p>${event.key === ' ' ? 'Space' : event.key}</p>
            <small>event.key</small>
          </div>
          <div>
            <p>${event.keyCode}</p>
            <small>event.keycode</small>
          </div>
          <div>
            <p>${event.code}</p>
            <small>event.code</small>
          </div>
        </div>
    `
})
