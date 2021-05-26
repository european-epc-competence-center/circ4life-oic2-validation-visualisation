BASE_URL = "https://circ4life.eecc.info/evaluation";


// get all Models from database
async function getAllModels() {
  return $.ajax({
    type: 'GET',
    url: BASE_URL + '/model',
  });
}

// get one specific average Model
// type is the typeModel string
async function getOneAverageModel(type) {
  return $.ajax({
    type: 'GET',
    url: BASE_URL + '/modelOneTypeAverage/' + type
  })
}

//get three specific average Models
// typea, typeb, typec are the typModel strings
async function getAllAverageModels(typea, typeb, typec) {
  return $.ajax({
    type: 'GET',
    url: BASE_URL + '/modelAllTypeAverage/' + typea + '/' + typeb + '/' + typec
  })
}

// sends data to database
// modelData is JSON form inside string
function sendData(modelData) {
  console.log("posting " + modelData);

  return $.ajax({
    type: 'POST',
    Headers: {
      'content-Type': 'application/json'
    },
    url: BASE_URL + '/InsertModel',
    data: JSON.stringify(JSON.parse(modelData)),
    contentType: "application/json",
    dataType: "json"
  })
}
