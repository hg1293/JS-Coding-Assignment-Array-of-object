/*
We are interested in retrieving only the name of the students and all the names should be in caps.
['JOHN', 'BABA', 'YAGA', 'WICK']
*/

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let names = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
    // console.log(studentRecords[i].name.toUpperCase());
    names.push(studentRecords[i].name.toUpperCase());
  }
  
  console.log(names);

  
  // Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let students = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
      students.push(Object.assign(studentRecords[i]));
    }
  }
  
  console.log(students);

  // Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let students = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].id > 120 && studentRecords[i].marks > 50) {
      students.push(Object.assign(studentRecords[i]));
    }
  }
  
  console.log(students);


  // Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let total = 0;
  
  for (let i = 0; i < studentRecords.length; i++) {
    total += studentRecords[i].marks;
  }
  
  console.log(total);


  // This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let names = [];
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks > 50) {
      names.push(studentRecords[i].name);
    }
  }
  
  console.log(names);


  // This time we are required to print the sum of marks of the students with id > 120.

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let total = 0;
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].id > 120) {
      total += studentRecords[i].marks;
    }
  }
  
  console.log(total);


  // This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  let totalMarks = 0;
  
  for (let i = 0; i < studentRecords.length; i++) {
    if (studentRecords[i].marks < 50) {
      totalMarks += studentRecords[i].marks + 15;
    }
  }
  
  console.log(totalMarks);


  // Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

const student1 = {
    name: "Sanjeev",
    class: 12,
    rollNo: 23,
  };
  
  const student2 = {
    name: "Sans",
    class: 9,
    rollNo: 20,
  };
  const student3 = {
    name: "Arpit",
    class: 5,
    rollNo: 5,
  };
  const student4 = {
    name: "Rohit",
    class: 8,
    rollNo: 45,
  };
  const student5 = {
    name: "Suman",
    class: 12,
    rollNo: 26,
  };
  const student6 = {
    name: "John",
    class: 1,
    rollNo: 10,
  };
  
  let students = [];
  
  const studentRecords = (student) => {
    students.push(student);
  };
  
  studentRecords(student1);
  studentRecords(student2);
  studentRecords(student3);
  studentRecords(student4);
  studentRecords(student5);
  studentRecords(student6);
  
  console.log(students);


  