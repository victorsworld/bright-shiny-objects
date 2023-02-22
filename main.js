// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘



function createUser(firstName, lastname){
    let user = {
        firstName: firstName,
        lastName: lastname
    }
    return user;
}

function setAge(user, num){
    user.age = num;
    return user;
}

function incrementAge(user){
   user.age = user.age + 1;

    return user;
}

function fixCar(car){
    car.needsMaintenance = false;

    return car
}

function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades) 

    return student
}

function getDataType(value,key){
   let a = value[key]

    return typeof a;
}

function addTodo(todos, newTodo){
    todos.push(newTodo);

    return todos;
}

function addSong(playlist, newSong){
    playlist.duration = playlist.duration + newSong.duration;
    playlist.songs.push(newSong);
 return playlist
}

function updateReportCard(reportCard, num){
if(num < reportCard.lowestGrade){
    reportCard.lowestGrade = num
} else if( num > reportCard.highestGrade){
    reportCard.highestGrade = num
} 
reportCard.grades.push(num);
let sum = 0;
for(let i = 0; i < reportCard.grades.length; i++){
    sum += reportCard.grades[i]
}
reportCard.averageGrade = sum/4;
return reportCard;
}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
