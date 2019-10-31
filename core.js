var dataQueue = []
var podData = []

function add(team, user, weight, node, podid) {
    dataQueue.push({
        timestamp: new Date(),
        team,
        user,
        weight,
        node,
        podid
    })
    console.log(dataQueue)
}

function teamStatus(){
    cleanDataQueue();
    var result ={};
    dataQueue.forEach(function ({team,weight}) {
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

function userContributions(){
    cleanDataQueue();
    var result = {};
    dataQueue.forEach(function ({team,user,weight}) {
        if (result[team]){
            if(result[team][user]){
                result[team][user] += weight; 
            }else{
                result[team][user] = weight;
            }
        }else{
            var userA ={}
            userA[user] = weight
            result[team] = userA;
        }
    })
    console.log(result)
    return result;
}

function allData(){
    cleanDataQueue();
    return dataQueue;
}

module.exports = {add,teamStatus,userContributions,allData};