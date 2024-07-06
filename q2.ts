
interface Student {
  name: string;
  score: number;
}

function findTopNames(students: Student[]): string[] {
  // Find the names of students with a score greater than 8
  const topNames = students
      .filter(student => student.score > 8)
      .map(student => student.name);

  return topNames;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
