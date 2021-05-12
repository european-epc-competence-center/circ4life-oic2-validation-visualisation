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
    plugins: [chartAreaBorder]
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