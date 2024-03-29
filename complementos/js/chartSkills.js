(function(){
  document.getElementById('myChart').style.height = '300px'
  const ctx = document.getElementById('myChart').getContext("2d");
  const labels = [
    'Excel',
    'Word',
    'Inglês',
    'HTML5',
    'CSS3',
    'JavaScript',
    'MySql',
    'git',
    'PHP',
    'Adobe Photoshop'
    ]
  const data = {
    labels,
    datasets: [{
      data: [2, 2.5, 4, 3, 4, 3, 1, 2, 1, 3, 5, 0],
      label: "Nível das minhas skills",
      radius: 4,
      borderColor: "rgb(255, 87, 20)",
      backgroundColor: "rgb(255, 87, 20)",
      radius: 3,
      hoverRadius: 6,
        scales: {
          y: {
            beginAtZero: true
          }
        }
    }]

  }

  const config = {
    type: 'line',
    data: data,
      options: {
        animations: {
          tension: {
          duration: 1000,
          easing: 'ease-out',
          from: .2,
          to: .4,
          loop: true
          },
        }
      }
  }
 new Chart(ctx, config)
})()