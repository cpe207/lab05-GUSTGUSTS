// define interface for Student object
/* Your code here */
// assign interface/type to the function definition properly
function findTopNames(students) {
    const topNames = students
    .filter(student => student.score > 8)
    .map(student => student.name);
return topNames;  
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
