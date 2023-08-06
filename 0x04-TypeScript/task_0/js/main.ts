interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Daniel",
    lastName: "John",
    age: 23,
    location: "Lagos",
}

const student2: Student = {
    firstName: "Mark",
    lastName: "Wilson",
    age: 25,
    location: "Portharcourt",
}

const studentList: Student[] = [student1, student2];  

window.onload = function() {
    const table = document.createElement("table");
    const tableBody = document.createElement("tableBody");

    studentList.forEach((student) => {
        const tableRow = document.createElement("tableRow");

        const firstNameCell = document.createElement("tableData");
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement("tableData");
        locationCell.textContent = student.location;

        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(locationCell);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
};