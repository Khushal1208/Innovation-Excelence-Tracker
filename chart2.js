const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Student', 'Faculty', 'Both', 'Staff'],
        datasets: [{
            label: 'Student vs Faculty vs Staff Contribution',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',  // Darker red
                'rgba(54, 162, 235, 0.8)',  // Darker blue
                'rgba(255, 206, 86, 0.8)',  // Darker yellow
                'rgba(75, 192, 192, 0.8)'   // Darker teal
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
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
