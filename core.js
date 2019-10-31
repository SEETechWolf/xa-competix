var dataQueue = []
var podData = []

function add(team, user, weight) {
    dataQueue.push({
        timestamp: new Date(),
        team,
        user,
        weight
    })
    console.log(dataQueue)
}

function teamStatus(){
    cleanDataQueue();
    var result ={};
    dataQueue.forEach(function ({team,user,weight,timestamp}) {
        if (result[team]){
            result[team] += weight; 
        }else{
            result[team] = weight;
        }
    })
    return result;
}

function cleanDataQueue(){
  dataQueue = dataQueue.filter(function({timestamp}){
	var aktDate = new Date();
	var differenz = (aktDate.getTime() - timestamp.getTime());
	return differenz < 1000 * 60
  })
}

module.exports = {add,teamStatus};