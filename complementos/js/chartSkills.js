const ctx = document.getElementById('myChart').getContext("2d")
const labels = [
    'Adobe Photoshop',
    'Excel',
    'Word',
    'Inglês',
    'HTML5',
    'CSS3',
    'Javascript',
    'MySql',
    'git',
    'php',
]
const data = {
    labels,
    datasets: [{
        data: [3, 1, 2, 4, 3, 4, 3, 1, 2, 1,5, 0],
        label: "Nivel das minhas skills",
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
        responsive: true,
        animations: {
          tension: {
            duration: 1000,
            easing: 'ease-out',
            from: .4,
            to: .2,
            loop: true
          },
      }
}}

const  myChart = new Chart(ctx, config)