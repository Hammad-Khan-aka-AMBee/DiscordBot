module.exports= {
  name: 'time',
  description : 'time command',
  execute(message, args) {
// Get the current timestamp using Date.now()
const currentTime = Date.now();

// Create a new Date object using the timestamp
const currentDate = new Date(currentTime);

// Extract the individual components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is 0-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Create a nicely formatted date and time string
const Time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
return Time;


}
}


/*
const currentTime = Date.now();
const bal = null;
const cd = currentTime - bal
if (cd >= 24*60*60*1000*1000){
console.log('Time is up',cd)}
else{console.log('time is down', cd)}
console.log(currentTime, cd)

// Create a new Date object using the timestamp
const currentDate = new Date(currentTime);
console.log(currentDate)
// Extract the individual components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is 0-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Create a nicely formatted date and time string
const Time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
console.log(Time)





//	const currentTime = 24 * 60 * 60 * 1000
//	const balTime = Date.now();//userCooldowns[id];
 //   	const cd = balTime - currentTime
//	console.log(currentTime, balTime, cd)//s,`${time.Time}`)
*/