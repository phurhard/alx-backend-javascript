interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}


const john: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    location: 'California',
}

const philip: Student = {
    firstName: 'Philip',
    lastName: 'King',
    age: 24,
    location: 'Alaska',
}
const studentList: Student[] = [john, philip]

const tablle =  document.createElement('table');
for (let student of studentList) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td>
    <td>${student.location}</td>`;
    table.appendChild(row);
}
document.body.appendChild(tablle)