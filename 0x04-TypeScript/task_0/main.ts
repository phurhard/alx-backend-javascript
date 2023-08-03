interface Student  {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = {
    firstName: "Abel",
    lastName: "Adam",
    age: 20,
    location: "Earth",
};

const student2 = {
    firstName: "Cain",
    lastName: "Adam",
    age: 23,
    location: "Earth",
};

const studentsList: Student[] = [student1, student2]



// create a table

const table  = document.createElement('table');
studentsList.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.firstName}</td>
      <td>${item.location}</td>
    `;
    table.appendChild(row);
  });

  document.body.appendChild(table);