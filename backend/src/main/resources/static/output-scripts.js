const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: {
        left,
        top,
        width,
        height
      }
    } = chart;
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
    const {
      ctx,
      chartArea: {
        left,
        top,
        right,
        bottom
      },
      scales: {
        x,
        y
      }
    } = chart;
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

const quadrantsFirstChart = {
  id: 'quadrantsFirstChart',
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: {
        left,
        top,
        right,
        bottom
      },
      scales: {
        x,
        y
      }
    } = chart;
    const midX = x.getPixelForValue(0);
    const midY = y.getPixelForValue(0);
    ctx.save();
    ctx.fillStyle = options.color;
    ctx.fillRect(midX, midY, options.v1 * midX / 5, -(options.v2 * midY / 5));
  }
};

const quadrantsSecondChart = {
  id: 'quadrantsSecondChart',
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: {
        left,
        top,
        right,
        bottom
      },
      scales: {
        x,
        y
      }
    } = chart;
    const midX = x.getPixelForValue(0);
    const midY = y.getPixelForValue(0);
    ctx.save();
    ctx.fillStyle = options.color;
    ctx.fillRect(midX, midY, options.v1 * midX / 5, -(options.v1 * midY / 5));
  }
};

var charts = [];

for (let i = 1; i < 4; i++) {

  let ctx = document.getElementById('resultChart' + i).getContext('2d');
  charts[i - 1] = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
          label: "Point1",
          data: [{
            x: 0,
            y: 0
          }],
          backgroundColor: [
            '#292b2c'
          ],
          pointRadius: 5
        },
        {
          label: "Point2",
          data: [{
            x: 0,
            y: 0
          }],
          backgroundColor: [
            '#292b2c'
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
    options: {
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
        quadrantsFirstChart: {
          color: 'rgba(37, 85, 217, 0.6)',
          v1: 0,
          v2: 0
        },
        quadrantsSecondChart: {
          color: 'rgba(37, 85, 217, 0.6)',
          v1: 0,
          v2: 0
        }
      },
      responsive: true,
      scales: {
        y: {
          min: -5,
          max: 5,
          display: false
        },
        x: {
          min: -5,
          max: 5,
          display: false
        }
      }
    },
    plugins: [chartAreaBorder, quadrants, quadrantsFirstChart, quadrantsSecondChart]
  });
}
charts[0].options.plugins.quadrantsFirstChart.color = 'rgba(37, 85, 217, 0.6)';
charts[0].options.plugins.quadrantsSecondChart.color = 'rgba(37, 85, 217, 0.6)';
charts[0].update();


charts[1].options.plugins.quadrantsFirstChart.color = 'rgba(243, 159, 24, 0.6)';
charts[1].options.plugins.quadrantsSecondChart.color = 'rgba(243, 159, 24, 0.6)';
charts[1].update();

charts[2].options.plugins.quadrantsFirstChart.color = 'rgba(203, 40, 33, 0.6)';
charts[2].options.plugins.quadrantsSecondChart.color = 'rgba(203, 40, 33, 0.6)';
charts[2].update();


let ctx = document.getElementById('radarChart').getContext('2d');
var radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["Circularity", "Innovativeness", "Business Potential", "Applicability"],
    datasets: [{
      label: "CEBM A",
      backgroundColor: "rgb(0,0,255,0.2)",
      borderColor: "rgb(0,0,255,1)",
      pointBackgroundColor: "blue",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "blue",
      data: [-5, -5, -5, -5]
    }, {
      label: "CEBM B",
      backgroundColor: "rgb(255,165,0,0.2)",
      borderColor: "rgb(255,165,0,1)",
      pointBackgroundColor: "orange",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "orange",
      data: [-5, -5, -5, -5]
    }, {
      label: "CEBM C",
      backgroundColor: "rgb(255,0,0,0.2)",
      borderColor: "rgb(255,0,0,1)",
      pointBackgroundColor: "red",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "red",
      data: [-5, -5, -5, -5]
    }]
  },
  options: {
    tooltips: {
      mode: 'label'
    },
    scale: {
      min: -5,
      max: 5,
      stepsize: 0.01
    }
  }
});

// ************** THE DATABASE CONNECTION STARTS HERE ***************


function updateCharts() {
  givenTypeModel = "CEBM";
  getAllAverageModels(givenTypeModel + 'A', givenTypeModel + 'B', givenTypeModel + 'C').then(averageData => setCharts(averageData));
}

function setCharts(averageData) {
//  console.log(averageData);

  for (let i = 0; i < 3; i++) {
    radarChart.data.datasets[i].data[0] = averageData[i].linearToCircular;
    radarChart.data.datasets[i].data[1] = averageData[i].innovativeness;
    radarChart.data.datasets[i].data[2] = averageData[i].businessPotential;
    radarChart.data.datasets[i].data[3] = averageData[i].industryApplicability;


    charts[i].options.plugins.quadrantsFirstChart.v1 = charts[i].data.datasets[0].data[0].x = averageData[i].linearToCircular;
    charts[i].options.plugins.quadrantsFirstChart.v2 = charts[i].data.datasets[0].data[0].y = averageData[i].innovativeness;
    charts[i].options.plugins.quadrantsSecondChart.v1 = charts[i].data.datasets[1].data[0].x = averageData[i].businessPotential;
    charts[i].options.plugins.quadrantsSecondChart.v2 = charts[i].data.datasets[1].data[0].y = averageData[i].industryApplicability;
    charts[i].update();
  }
  radarChart.update();
}

updateCharts();
var intervalId = setInterval(function() {
  updateCharts()
}, 3000);
