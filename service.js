// get all Models from database
async function getAllModels(){
   return $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/model',
    });
}

// get one specific average Model
// type is the typeModel string
async function getOneAverageModel(type){
    return $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/modelOneTypeAverage/' + type
    })
}

//get three specific average Models
// typea, typeb, typec are the typModel strings
async function getAllAverageModels(typea,typeb,typec){
    return $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/modelAllTypeAverage/' + typea + '/' + typeb + '/' + typec
    })
}

// sends data to database
// modelData is JSON form inside string
function sendData(modelData){
    return $.ajax({
        type: 'POST',
        Headers: {
            'content-Type': 'application/json'
        },
        url: 'http://localhost:8080/InsertModel',
        data: JSON.stringify(JSON.parse(modelData)),
        contentType: "application/json",
        dataType: "json"
        })
}

// simply tests all functions
function testFunction(){
    sendData('{"modelType":"CEBMA","linearToCircular":23,"innovativeness":1,"businessPotential":132,"industryApplicability":123}');
    getAllModels().then(data => console.log(data));
    getOneAverageModel('CEBMA').then(data => console.log(data));
    getAllAverageModels('CEBMA','notthere','CEBMA').then(data => console.log(data));
}