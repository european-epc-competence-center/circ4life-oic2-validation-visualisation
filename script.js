var data = [{
    x: 0,
    y: 0
}]
var data2 = [{
    x: 0,
    y: 0
}]

const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, width, height}} = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
  };

  const quadrants = {
    id: 'quadrants',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
      const midX = x.getPixelForValue(0);
      const midY = y.getPixelForValue(0);
      ctx.save();
      ctx.fillStyle = options.topLeft;
      ctx.fillRect(left, top, midX - left, midY - top);
      ctx.fillStyle = options.topRight;
      ctx.fillRect(midX, top, right - midX, midY - top);
      ctx.fillStyle = options.bottomRight;
      ctx.fillRect(midX, midY, right - midX, bottom - midY);
      ctx.fillStyle = options.bottomLeft;
      ctx.fillRect(left, midY, midX - left, bottom - midY);
      ctx.restore();
    }
  };

let i1 = document.getElementById('input1'),
    o1 = document.getElementById('output1');
    i2 = document.getElementById('input2');
    o2 = document.getElementById('output2');
    i3 = document.getElementById('input3'),
    o3 = document.getElementById('output3');
    i4 = document.getElementById('input4');
    o4 = document.getElementById('output4');

o1.innerHTML = i1.value;
o2.innerHTML = i2.value;
o3.innerHTML = i3.value;
o4.innerHTML = i4.value;

i1.addEventListener('input', function() {
    o1.innerHTML = i1.value;
}, false);
i2.addEventListener('input', function() {
    o2.innerHTML = i2.value;
}, false); 
i3.addEventListener('input', function() {
    o3.innerHTML = i3.value;
}, false);
i4.addEventListener('input', function() {
    o4.innerHTML = i4.value;
}, false);  

const quadrantsLeftChart = {
    id: 'quadrantsLeftChart',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
      const midX = x.getPixelForValue(0);
      const midY = y.getPixelForValue(0);
      ctx.save();
      ctx.fillStyle = options.chartLeft;
      ctx.fillRect(midX, midY, i1.value*109, -(i2.value*53));
    }
  };

  const quadrantsRightChart = {
    id: 'quadrantsRightChart',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
      const midX = x.getPixelForValue(0);
      const midY = y.getPixelForValue(0);
      ctx.save();
      ctx.fillStyle = options.chartRight;
      ctx.fillRect(midX, midY, i3.value*109, -(i4.value*53));
    }
  };

var leftChart = new Chart(myChart, {
  type:'scatter', 
  data:{
      datasets:[{
          label:"Left Chart",
          data: data,
          backgroundColor:[
              'rgba(30, 144, 255, 0.6)',
          ],
          pointRadius: 5
      },
      {
          type: 'line',
          data: [{
              x: 0,
              y: 5
          }, {
              x: 0,
              y: -5
          }],
          fill: false,
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0
      },
      {
          type: 'line',
          data: [{
              x: -5,
              y: 0
          }, {
              x: 5,
              y: 0
          }],
          fill: false,
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0
      },{
              type: 'line',
              data: [{
                  x: 0,
                  y: 0
              }, {
                  x: 0,
                  y: 0
              }],
              fill: false,
              borderColor: 'blue',
              borderWidth: 1,
              pointRadius: 0
          },{
              type: 'line',
              data: [{
                  x: 0,
                  y: 0
              }, {
                  x: 0,
                  y: 0
              }],
              fill: false,
              borderColor: 'blue',
              borderWidth: 1,
              pointRadius: 0
          }]
  },
  options:{
    plugins: {
        legend: {
          display: false
        }
      },
      responsive: true,
      scales: {
          y: {
              suggestedMin: -5,
              suggestedMax: 5
          },
          x: {
            suggestedMin: -5,
            suggestedMax: 5
          }
      }
  }
});

var rightChart = new Chart(myChart2, {
  type:'scatter', 
  data:{
      datasets:[{
          label:"Right Chart",
          data: data2,
          backgroundColor:[
              'rgba(220, 20, 60, 0.6)',
          ],
          pointRadius: 5
      },
      {
          type: 'line',
          data: [{
              x: 0,
              y: 5
          }, {
              x: 0,
              y: -5
          }],
          fill: false,
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0
      },
      {
          type: 'line',
          data: [{
              x: -5,
              y: 0
          }, {
              x: 5,
              y: 0
          }],
          fill: false,
          borderColor: 'black',
          borderWidth: 1,
          pointRadius: 0
      },{
              type: 'line',
              data: [{
                  x: 0,
                  y: 0
              }, {
                  x: 0,
                  y: 0
              }],
              fill: false,
              borderColor: 'red',
              borderWidth: 1,
              pointRadius: 0
          },{
              type: 'line',
              data: [{
                  x: 0,
                  y: 0
              }, {
                  x: 0,
                  y: 0
              }],
              fill: false,
              borderColor: 'red',
              borderWidth: 1,
              pointRadius: 0
          }]
  },
  options:{
    plugins: {
        legend: {
          display: false
        }
      },
      responsive: true,
      scales: {
          y: {
              suggestedMin: -5,
              suggestedMax: 5
          },
          x: {
            suggestedMin: -5,
            suggestedMax: 5
          }
      }
  }
});

var finalChart = new Chart(myChart3, {
    type:'scatter', 
    data:{
        datasets:[{
            label:"Left Chart",
            data: data,
            backgroundColor:[
                'rgba(30, 144, 255, 0.6)'
            ],
            pointRadius: 10
        },
        {
            label:"Right Chart",
            data: data2,
            backgroundColor:[
                'rgba(220, 20, 60, 0.6)'
            ],
            pointRadius: 10
        },
        {
            type: 'line',
            data: [{
                x: 0,
                y: 5
            }, {
                x: 0,
                y: -5
            }],
            fill: false,
            borderColor: 'black',
            pointRadius: 0
        },
        {
            type: 'line',
            data: [{
                x: -5,
                y: 0
            }, {
                x: 5,
                y: 0
            }],
            fill: false,
            borderColor: 'black',
            pointRadius: 0,
        },
        ]
    },
    options:{
        plugins: {
            legend: {
              display: false
            },
            chartAreaBorder: {
                borderColor: 'black',
                borderWidth: 2,
                borderDash: [5, 5]
              },
              quadrants: {
                topLeft: '#e5e5e5',
                topRight: '#99cc99',
                bottomLeft: '#FF9999',
                bottomRight: '#e5e5e5'
              },
              quadrantsLeftChart: {
                chartLeft: 'rgba(171,223,228,0.6)'
              },
              quadrantsRightChart: {
                chartRight: 'rgba(255,204,204,0.6)'
              }
          },
        responsive: true,
        scales: {
            y: {
                suggestedMin: -5,
                suggestedMax: 5,
                display: false
            },
            x: {
              suggestedMin: -5,
              suggestedMax: 5,
              display: false
            }
        }
    },
    plugins: [chartAreaBorder, quadrants, quadrantsLeftChart, quadrantsRightChart]
  });

function changefunction(){
leftChart.data.datasets[0].data[0].x = i1.value;
//set x of horizontal line
leftChart.data.datasets[3].data[1].x = i1.value;
//set x of vertical line
leftChart.data.datasets[4].data[0].x = i1.value;
leftChart.data.datasets[4].data[1].x = i1.value;
leftChart.update();
finalChart.update();
}
function changefunction2(){
leftChart.data.datasets[0].data[0].y = i2.value;
//set y of horizontal line
leftChart.data.datasets[3].data[0].y = i2.value;
leftChart.data.datasets[3].data[1].y = i2.value;
//set y of vertical line
leftChart.data.datasets[4].data[1].y = i2.value;
leftChart.update();
finalChart.update();
}
function changefunctionRight(){
rightChart.data.datasets[0].data[0].x = i3.value;
//set x of horizontal line
rightChart.data.datasets[3].data[1].x = i3.value;
//set x of vertical line
rightChart.data.datasets[4].data[0].x = i3.value;
rightChart.data.datasets[4].data[1].x = i3.value;
rightChart.update();
finalChart.update();
}
function changefunctionRight2(){
rightChart.data.datasets[0].data[0].y = i4.value;
//set y of horizontal line
rightChart.data.datasets[3].data[0].y = i4.value;
rightChart.data.datasets[3].data[1].y = i4.value;
//set y of vertical line
rightChart.data.datasets[4].data[1].y = i4.value;
rightChart.update();
finalChart.update();
}