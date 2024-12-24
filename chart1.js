const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Medical',  'Engg Tech','Hospitality',  'Managment', 'Designing','Others'],
        datasets: [{
            label: 'Institution wise Contribution',
            data: [22, 35, 4, 5, 12, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(200, 50, 80, 1)',
                'rgba(34, 112, 185, 1)',
                'rgba(205, 156, 46, 1)',
                'rgba(35, 142, 142, 1)',
                'rgba(103, 52, 205, 1)',
                'rgba(205, 109, 24, 1)'
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
