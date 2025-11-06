// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "Albert",
    lastName: "Einstein",
    age: 25,
    location: "Ulm",
};

const student2: Student = {
    firstName: "Sarah",
    lastName: "Adebayo",
    age: 23,
    location: "Lagos",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Add basic table styles
table.style.width = "50%";
table.style.borderCollapse = "collapse";
table.style.margin = "20px 0";
table.style.fontFamily = "Arial, sans-serif";

// Loop through students and add a row for each
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid #ccc";
    firstNameCell.style.padding = "8px";

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid #ccc";
    locationCell.style.padding = "8px";

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

// Append the table to the document body
table.appendChild(tableBody);
document.body.appendChild(table);
