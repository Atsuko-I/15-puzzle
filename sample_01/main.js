var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'red',
      data: [17, 30, 45, 16, 21, 6, 25],
      backgroundColor: "#dc143c"
    }, {
      label: 'orange',
      data: [56, 50, 48, 35, 27, 2, 40],
      backgroundColor: "#ffa500"
    }, {
      label: 'green',
      data: [25, 42, 35, 8, 20, 52, 18],
      backgroundColor: "#006400"
    },{
      label: 'blue',
      data: [30, 25, 15, 22, 12, 24, 10],
      backgroundColor: "#00008b"
    }]
  }
});
