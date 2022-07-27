(function(){
  const iconMenu = document.getElementById('menuIcon')
    iconMenu.addEventListener("click" , openMenu)

  function openMenu(){
    const transMenu = document.querySelector('#transition')
    const menu = document.getElementById('sectMenu')
    menu.style.display = 'block'
  
    const html = document.querySelector('html')
      html.style.backgroundColor = 'var(--gray)'
      document.body.style.overflow = 'hidden'

      // correção de erro criado
    let liScroll = document.querySelectorAll('#ulMenuOpen li');
      [...liScroll].forEach( li => {
        li.addEventListener('click', closeMenu)
      })
      
    const exitBtn = document.createElement('div')
      exitBtn.className = 'exit'
      exitBtn.innerHTML = `x`
      menu.insertBefore(exitBtn, menu.firstChild)
      exitBtn.addEventListener('click', closeMenu)

      function closeMenu(){
        document.body.style.overflow = 'inherit'
        menu.style.display = 'none'
        html.style.backgroundColor = ''
      }
  }
})()
