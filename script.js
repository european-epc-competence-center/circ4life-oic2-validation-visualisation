var dataA12 = [{
  x: 0,
  y: 0
}]
var dataA34 = [{
  x: 0,
  y: 0
}]
var dataB12 = [{
  x: 0,
  y: 0
}]
var dataB34 = [{
  x: 0,
  y: 0
}]
var dataC12 = [{
  x: 0,
  y: 0
}]
var dataC34 = [{
  x: 0,
  y: 0
}]
var dataF12 = [{
  x: 0,
  y: 0
}]
var dataF34 = [{
  x: 0,
  y: 0
}]

var alreadySent = false;

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

let ia1 = document.getElementById('inputA1'),
  oa1 = document.getElementById('outputA1');
ia2 = document.getElementById('inputA2');
oa2 = document.getElementById('outputA2');
ia3 = document.getElementById('inputA3'),
  oa3 = document.getElementById('outputA3');
ia4 = document.getElementById('inputA4');
oa4 = document.getElementById('outputA4');
ib1 = document.getElementById('inputB1'),
  ob1 = document.getElementById('outputB1');
ib2 = document.getElementById('inputB2');
ob2 = document.getElementById('outputB2');
ib3 = document.getElementById('inputB3'),
  ob3 = document.getElementById('outputB3');
ib4 = document.getElementById('inputB4');
ob4 = document.getElementById('outputB4');
ic1 = document.getElementById('inputC1'),
  oc1 = document.getElementById('outputC1');
ic2 = document.getElementById('inputC2');
oc2 = document.getElementById('outputC2');
ic3 = document.getElementById('inputC3'),
  oc3 = document.getElementById('outputC3');
ic4 = document.getElementById('inputC4');
oc4 = document.getElementById('outputC4');

oa1.innerHTML = ia1.value;
oa2.innerHTML = ia2.value;
oa3.innerHTML = ia3.value;
oa4.innerHTML = ia4.value;

ob1.innerHTML = ib1.value;
ob2.innerHTML = ib2.value;
ob3.innerHTML = ib3.value;
ob4.innerHTML = ib4.value;

oc1.innerHTML = ic1.value;
oc2.innerHTML = ic2.value;
oc3.innerHTML = ic3.value;
oc4.innerHTML = ic4.value;


ia1.addEventListener('input', function() {
  oa1.innerHTML = ia1.value;
}, false);
ia2.addEventListener('input', function() {
  oa2.innerHTML = ia2.value;
}, false);
ia3.addEventListener('input', function() {
  oa3.innerHTML = ia3.value;
}, false);
ia4.addEventListener('input', function() {
  oa4.innerHTML = ia4.value;
}, false);

ib1.addEventListener('input', function() {
  ob1.innerHTML = ib1.value;
}, false);
ib2.addEventListener('input', function() {
  ob2.innerHTML = ib2.value;
}, false);
ib3.addEventListener('input', function() {
  ob3.innerHTML = ib3.value;
}, false);
ib4.addEventListener('input', function() {
  ob4.innerHTML = ib4.value;
}, false);

ic1.addEventListener('input', function() {
  oc1.innerHTML = ic1.value;
}, false);
ic2.addEventListener('input', function() {
  oc2.innerHTML = ic2.value;
}, false);
ic3.addEventListener('input', function() {
  oc3.innerHTML = ic3.value;
}, false);
ic4.addEventListener('input', function() {
  oc4.innerHTML = ic4.value;
}, false);

f1 = ia1.value;
f2 = ia2.value;
f3 = ia3.value;
f4 = ia4.value;
whatCEBM = 1;

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
    ctx.fillStyle = options.firstChartColor;
    ctx.fillRect(midX, midY, f1 * midX / 5.1, -(f2 * midY / 5.2));
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
    ctx.fillStyle = options.secondChartColor;
    ctx.fillRect(midX, midY, f3 * midX / 5.1, -(f4 * midY / 5.2));
  }
};

var fristChart = new Chart(myChart, {
  type: 'scatter',
  data: {
    datasets: [{
        label: "dataA12Chart",
        data: dataA12,
        backgroundColor: [
          'rgba(30, 144, 255, 0.6)',
        ],
        pointRadius: 5
      }, {
        label: "dataA34Chart",
        data: dataA34,
        backgroundColor: [
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    scales: {
      y: {
        min: -5,
        max: 5
      },
      x: {
        min: -5,
        max: 5
      }
    }
  }
});

var secondChart = new Chart(myChart2, {
  type: 'scatter',
  data: {
    datasets: [{
        label: "dataB12Chart",
        data: dataB12,
        backgroundColor: [
          'orange',
        ],
        pointRadius: 5
      }, {
        label: "dataB34Chart",
        data: dataB34,
        backgroundColor: [
          'orange',
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
      }, {
        type: 'line',
        data: [{
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        fill: false,
        borderColor: 'orange',
        borderWidth: 1,
        pointRadius: 0
      }, {
        type: 'line',
        data: [{
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        fill: false,
        borderColor: 'orange',
        borderWidth: 1,
        pointRadius: 0
      }, {
        type: 'line',
        data: [{
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        fill: false,
        borderColor: 'orange',
        borderWidth: 1,
        pointRadius: 0
      }, {
        type: 'line',
        data: [{
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 0
        }],
        fill: false,
        borderColor: 'orange',
        borderWidth: 1,
        pointRadius: 0
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    scales: {
      y: {
        min: -5,
        max: 5
      },
      x: {
        min: -5,
        max: 5
      }
    }
  }
});

var thirdChart = new Chart(myChart4, {
  type: 'scatter',
  data: {
    datasets: [{
        label: "dataC12Chart",
        data: dataC12,
        backgroundColor: [
          'rgba(220, 20, 60, 0.6)',
        ],
        pointRadius: 5
      },
      {
        label: "dataC34Chart",
        data: dataC34,
        backgroundColor: [
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    scales: {
      y: {
        min: -5,
        max: 5
      },
      x: {
        min: -5,
        max: 5
      }
    }
  }
});

var finalChart = new Chart(myChart3, {
  type: 'scatter',
  data: {
    datasets: [{
        label: "Point1",
        data: dataF12,
        backgroundColor: [
          '#292b2c'
        ],
        pointRadius: 10
      },
      {
        label: "Point2",
        data: dataF34,
        backgroundColor: [
          '#292b2c'
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
        firstChartColor: 'rgba(37, 85, 217, 0.6)'
      },
      quadrantsSecondChart: {
        secondChartColor: 'rgba(37, 85, 217, 0.6)'
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


var radarChart = new Chart(resultChart, {
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

function changefunctionA() {
  fristChart.data.datasets[0].data[0].x = ia1.value;
  //set x of horizontal line
  fristChart.data.datasets[4].data[1].x = ia1.value;
  //set x of vertical line
  fristChart.data.datasets[5].data[0].x = ia1.value;
  fristChart.data.datasets[5].data[1].x = ia1.value;

  fristChart.data.datasets[0].data[0].y = ia2.value;
  //set y of horizontal line
  fristChart.data.datasets[4].data[0].y = ia2.value;
  fristChart.data.datasets[4].data[1].y = ia2.value;
  //set y of vertical line
  fristChart.data.datasets[5].data[1].y = ia2.value;

  fristChart.data.datasets[1].data[0].x = ia3.value;
  //set x of horizontal line
  fristChart.data.datasets[6].data[1].x = ia3.value;
  //set x of vertical line
  fristChart.data.datasets[7].data[0].x = ia3.value;
  fristChart.data.datasets[7].data[1].x = ia3.value;

  fristChart.data.datasets[1].data[0].y = ia4.value;
  //set y of horizontal line
  fristChart.data.datasets[6].data[0].y = ia4.value;
  fristChart.data.datasets[6].data[1].y = ia4.value;
  //set y of vertical line
  fristChart.data.datasets[7].data[1].y = ia4.value;
  fristChart.update();
  if (whatCEBM == 1) {
    f1 = finalChart.data.datasets[0].data[0].x = ia1.value;
    f2 = finalChart.data.datasets[0].data[0].y = ia2.value;
    f3 = finalChart.data.datasets[1].data[0].x = ia3.value;
    f4 = finalChart.data.datasets[1].data[0].y = ia4.value;
  }
  finalChart.update();
}

function changefunctionB() {
  secondChart.data.datasets[0].data[0].x = ib1.value;
  //set x of horizontal line
  secondChart.data.datasets[4].data[1].x = ib1.value;
  //set x of vertical line
  secondChart.data.datasets[5].data[0].x = ib1.value;
  secondChart.data.datasets[5].data[1].x = ib1.value;

  secondChart.data.datasets[0].data[0].y = ib2.value;
  //set y of horizontal line
  secondChart.data.datasets[4].data[0].y = ib2.value;
  secondChart.data.datasets[4].data[1].y = ib2.value;
  //set y of vertical line
  secondChart.data.datasets[5].data[1].y = ib2.value;

  secondChart.data.datasets[1].data[0].x = ib3.value;
  //set x of horizontal line
  secondChart.data.datasets[6].data[1].x = ib3.value;
  //set x of vertical line
  secondChart.data.datasets[7].data[0].x = ib3.value;
  secondChart.data.datasets[7].data[1].x = ib3.value;

  secondChart.data.datasets[1].data[0].y = ib4.value;
  //set y of horizontal line
  secondChart.data.datasets[6].data[0].y = ib4.value;
  secondChart.data.datasets[6].data[1].y = ib4.value;
  //set y of vertical line
  secondChart.data.datasets[7].data[1].y = ib4.value;
  secondChart.update();
  if (whatCEBM == 2) {
    f1 = finalChart.data.datasets[0].data[0].x = ib1.value;
    f2 = finalChart.data.datasets[0].data[0].y = ib2.value;
    f3 = finalChart.data.datasets[1].data[0].x = ib3.value;
    f4 = finalChart.data.datasets[1].data[0].y = ib4.value;
  }
  finalChart.update();
}

function changefunctionC() {
  thirdChart.data.datasets[0].data[0].x = ic1.value;
  //set x of horizontal line
  thirdChart.data.datasets[4].data[1].x = ic1.value;
  //set x of vertical line
  thirdChart.data.datasets[5].data[0].x = ic1.value;
  thirdChart.data.datasets[5].data[1].x = ic1.value;

  thirdChart.data.datasets[0].data[0].y = ic2.value;
  //set y of horizontal line
  thirdChart.data.datasets[4].data[0].y = ic2.value;
  thirdChart.data.datasets[4].data[1].y = ic2.value;
  //set y of vertical line
  thirdChart.data.datasets[5].data[1].y = ic2.value;

  thirdChart.data.datasets[1].data[0].x = ic3.value;
  //set x of horizontal line
  thirdChart.data.datasets[6].data[1].x = ic3.value;
  //set x of vertical line
  thirdChart.data.datasets[7].data[0].x = ic3.value;
  thirdChart.data.datasets[7].data[1].x = ic3.value;

  thirdChart.data.datasets[1].data[0].y = ic4.value;
  //set y of horizontal line
  thirdChart.data.datasets[6].data[0].y = ic4.value;
  thirdChart.data.datasets[6].data[1].y = ic4.value;
  //set y of vertical line
  thirdChart.data.datasets[7].data[1].y = ic4.value;
  thirdChart.update();

  if (whatCEBM == 3) {
    f1 = finalChart.data.datasets[0].data[0].x = ic1.value;
    f2 = finalChart.data.datasets[0].data[0].y = ic2.value;
    f3 = finalChart.data.datasets[1].data[0].x = ic3.value;
    f4 = finalChart.data.datasets[1].data[0].y = ic4.value;
  }
  finalChart.update();
}

function cebm1ChangeColor() {
  finalChart.options.plugins.quadrantsFirstChart.firstChartColor = 'rgba(37, 85, 217, 0.6)';
  finalChart.options.plugins.quadrantsSecondChart.secondChartColor = 'rgba(37, 85, 217, 0.6)';
  f1 = finalChart.data.datasets[0].data[0].x = ia1.value;
  f2 = finalChart.data.datasets[0].data[0].y = ia2.value;
  f3 = finalChart.data.datasets[1].data[0].x = ia3.value;
  f4 = finalChart.data.datasets[1].data[0].y = ia4.value;
  whatCEBM = 1;
  finalChart.update();
}

function cebm2ChangeColor() {
  finalChart.options.plugins.quadrantsFirstChart.firstChartColor = 'rgba(243, 159, 24, 0.6)';
  finalChart.options.plugins.quadrantsSecondChart.secondChartColor = 'rgba(243, 159, 24, 0.6)';
  f1 = finalChart.data.datasets[0].data[0].x = ib1.value;
  f2 = finalChart.data.datasets[0].data[0].y = ib2.value;
  f3 = finalChart.data.datasets[1].data[0].x = ib3.value;
  f4 = finalChart.data.datasets[1].data[0].y = ib4.value;
  whatCEBM = 2;
  finalChart.update();
}

function cebm3ChangeColor() {
  finalChart.options.plugins.quadrantsFirstChart.firstChartColor = 'rgba(203, 40, 33, 0.6)';
  finalChart.options.plugins.quadrantsSecondChart.secondChartColor = 'rgba(203, 40, 33, 0.6)';
  f1 = finalChart.data.datasets[0].data[0].x = ic1.value;
  f2 = finalChart.data.datasets[0].data[0].y = ic2.value;
  f3 = finalChart.data.datasets[1].data[0].x = ic3.value;
  f4 = finalChart.data.datasets[1].data[0].y = ic4.value;
  whatCEBM = 3;
  finalChart.update();
}

cebm1ChangeColor();


// ************** THE DATABASE CONNECTION STARTS HERE ***************

async function onSubmit() {
  if (document.getElementById('codewordModel').value === '') {
    console.log("Input empty");
    alert('Please enter your codeword before pressing the submit button');
    document.getElementById('submitButton').classList.remove("btn-outline-secondary");
    document.getElementById('submitButton').classList.add("btn-danger");
    return;
  }
  if (alreadySent === true) {
    console.log("Already sent");
    alert('You have tried to vote again. If you want to vote once more, press the Submit button.');
    document.getElementById('submitButton').classList.remove("btn-success");
    document.getElementById('submitButton').classList.remove("btn-danger");
    document.getElementById('submitButton').classList.add("btn-outline-secondary");
    alreadySent = false;
    return;
  }
  console.log("Input valid");
  givenTypeModel = document.getElementById('codewordModel').value;
  document.getElementById('modelResult').value = givenTypeModel;

  sendData(makeJsonString(givenTypeModel + 'A', ia1.value, ia2.value, ia3.value, ia4.value));
  sendData(makeJsonString(givenTypeModel + 'B', ib1.value, ib2.value, ib3.value, ib4.value));
  sendData(makeJsonString(givenTypeModel + 'C', ic1.value, ic2.value, ic3.value, ic4.value)).then(updateRadarChart(givenTypeModel));
  document.getElementById('submitButton').classList.remove("btn-outline-secondary");
  document.getElementById('submitButton').classList.remove("btn-danger");
  document.getElementById('submitButton').classList.add("btn-success");
  alreadySent = true;
}

function makeJsonString(givenTypeModel, value1, value2, value3, value4) {
  return '{"modelType":"' + givenTypeModel + '","linearToCircular":' + value1 + ',"innovativeness":' + value2 + ',"businessPotential":' + value3 + ',"industryApplicability":' + value4 + '}';
}



function updateRadarChart(givenTypeModel) {
  if (givenTypeModel != '') {
    getAllAverageModels(givenTypeModel + 'A', givenTypeModel + 'B', givenTypeModel + 'C').then(averageData => setRadarChart(averageData));
  }
}

function setRadarChart(averageData) {
  console.log(averageData);
  radarChart.data.datasets[0].data[0] = averageData[0].linearToCircular;
  radarChart.data.datasets[0].data[1] = averageData[0].innovativeness;
  radarChart.data.datasets[0].data[2] = averageData[0].businessPotential;
  radarChart.data.datasets[0].data[3] = averageData[0].industryApplicability;

  radarChart.data.datasets[1].data[0] = averageData[1].linearToCircular;
  radarChart.data.datasets[1].data[1] = averageData[1].innovativeness;
  radarChart.data.datasets[1].data[2] = averageData[1].businessPotential;
  radarChart.data.datasets[1].data[3] = averageData[1].industryApplicability;

  radarChart.data.datasets[2].data[0] = averageData[2].linearToCircular;
  radarChart.data.datasets[2].data[1] = averageData[2].innovativeness;
  radarChart.data.datasets[2].data[2] = averageData[2].businessPotential;
  radarChart.data.datasets[2].data[3] = averageData[2].industryApplicability;
  radarChart.update();
}

var intervalId = setInterval(function() {
  updateRadarChart(document.getElementById('modelResult').value)
}, 5000);
