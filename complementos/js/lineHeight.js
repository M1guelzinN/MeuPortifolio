(function(){
  const progress = document.getElementById('progressbar')
  const totalHeight = document.body.scrollHeight - window.innerHeight

  window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 110
    progress.style.height = progressHeight + "%"
}
})()