interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}

const student1: Student = {
    firstName: "Arwa",
    lastName: "Mahmoud",
    age: 22,
    location: "Mansoura"
}

const student2: Student = {
    firstName: "Hana",
    lastName: "Hassan",
    age: 30,
    location: "Cairo"
}

const studentsList: Student[] = [student1, student2]

//make a user table

const table = document.createElement("table");
table.style.border = "2px solid pink";
table.style.borderCollapse = "collapse";
table.style.margin = "20px auto";
table.style.textAlign = "center";
table.style.width = "50%";

const tableBody = document.createElement("tbody");

const Fname = document.createElement('th')
Fname.textContent = 'First Name'
Fname.style.border = "2px solid pink";
Fname.style.padding = "8px";

const loca = document.createElement('th')
loca.textContent = 'Location'
loca.style.border = "2px solid pink";
loca.style.padding = "8px";


for (let i=0; i<studentsList.length; i++){
    const row = document.createElement('tr')

    const stName = document.createElement('td')
    stName.textContent = studentsList[i].firstName
    row.appendChild(stName)

    const stLocation = document.createElement('td')
    stLocation.textContent = studentsList[i].location
    row.appendChild(stLocation)

    stName.style.border = "1px solid pink";
    stName.style.padding = "8px";

    stLocation.style.border = "1px solid pink";
    stLocation.style.padding = "8px";

    tableBody.appendChild(row)
}

table.appendChild(Fname)
table.appendChild(loca)
table.appendChild(tableBody)
document.body.appendChild(table)


