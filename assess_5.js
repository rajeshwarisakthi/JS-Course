const students=[
    {name : "Raji", score: 95},
    {name : "Sakthi", score : 80},
    {name : "Mouni", score : 75},
    {name : "Angapparaj", score :12},
    {name : "Harish", score : 21},
    {name:"Saranya" , score : 95}
];

const getAverage = (students)=>{
    let total= 0;
    students.forEach(student =>{
        total+=student.score;
    });

    return total/students.length;
};


console.log(getAverage(students));
const passedStudents=students.filter(student => student.score>=50);
const tableBody=document.getElementById("tablebody");

passedStudents.forEach(student => {
    tableBody.innerHTML+=`
    <tr>
    <td>${student.name}</td>
    <td>${student.score}</td>
    </tr>
    `;
});
