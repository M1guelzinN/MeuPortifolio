(function(){
  const iconMenu = document.getElementById('menuIcon')
    iconMenu.addEventListener("click" , openMenu)

  function openMenu(){
    const menu = document.getElementById('sectMenu')
      menu.style.display = 'block'
  
    const html = document.querySelector('html')
      document.body.style.overflow = 'hidden'

      // correção de erro criado
    let liScroll = document.querySelectorAll('#ulMenuOpen li');
      [...liScroll].forEach( li => {
        li.addEventListener('click', closeMenu)
      })
    
    const ElementMenu = document.querySelector('.menuElement')
    const exitBtn = document.createElement('div')
      exitBtn.className = 'exit'
      exitBtn.innerHTML = `x`
      ElementMenu.insertBefore(exitBtn, ElementMenu.firstChild)
      exitBtn.addEventListener('click', closeMenu)

      function closeMenu(){
        document.body.style.overflow = 'scroll'
        html.style.backgroundColor = ''
        menu.style.display = 'none'
      }
  }
})()
