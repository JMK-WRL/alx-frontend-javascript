interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const renderTable = (students: Student[]) => {
  // Create table element
  const table = document.createElement("table");

  // Loop through each student in the array
  students.forEach(student => {
    // Create a new row for each student
    const row = document.createElement("tr");

    // Create cells for first name and location
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    // Set the content of the cells
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append row to the table
    table.appendChild(row);
  });

  // Append table to the body of the document
  document.body.appendChild(table);
};

// Call the renderTable function with studentsList
renderTable(studentsList);
