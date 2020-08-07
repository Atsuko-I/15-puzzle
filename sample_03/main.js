let ctx = document.getElementById("chart").getContext('2d');

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "rgba(255,140,0,1)");
gradientStroke.addColorStop(1, "rgba(255,140,0,0.8)");

var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
gradientBkgrd.addColorStop(0, "rgba(255,140,0,0.2)");
gradientBkgrd.addColorStop(1, "rgba(255,140,0,0)");

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 6;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});


var chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun" ,"Jul", "Aug" ,"Sep", "Oct", "Nov", "Dec", ],
        datasets: [{
            label: "label",
            backgroundColor: gradientBkgrd,
            borderColor: gradientStroke,
            data: [36, 175, 120, 48, 135, 157, 99, 37, 18, 75, 111, 80],
            pointBorderColor: "rgba(255,255,255,0)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 0,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "rgba(255,255,255,0)",
            pointHoverBorderWidth: 3,
            pointRadius: 1,
            borderWidth: 5,
            pointHitRadius: 16,
        }]
    },

    options: {
      tooltips: {
        backgroundColor:'#f5f5f5',
        displayColors:false,
        titleFontColor: '#333',
        bodyFontColor: '#333'

        },
      legend: {
            display: false
      },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                ticks: {
                  min: 0,
                  max: 200,
                  fontSize: 10,
                  stepSize: 20,
                }
            }],
        }
    }
});
