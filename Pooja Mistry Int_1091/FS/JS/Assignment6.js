// 1: Student Report System
// Calculate average marks for each student
// Add a new property average using map()
// Assign result:
// • Avg ≥ 75 → "Distinction"
// • Avg ≥ 50 → "Pass"
// • Else → "Fail"

const student = [
    {name: "maya" , marks: [50,60,75]},
    {name: "manya" , marks: [80,65,95]},
    {name: "mansi" , marks: [45,80,66]}
]

let result = student.map(student => {
    let total = student.marks.reduce((sum,m)=> sum + m,0);
    let avg = total / student.marks.length;

    let status = " "
    
    if(avg >= 75){
        status = "Distinction";
    }
    else if(avg >= 50){
        status = "Pass";
    }
    else{
        status= "Fail";
    }

    return{
        ...student,
        average : avg,
        result : status
    }
})

console.log(result)