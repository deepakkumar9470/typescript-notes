 enum Role {ADMIN=26, STUDENT='Deepak Kumar', READ_ONLY=2}
const person = {
    name : "Arun & Manti",
    age :  45,
    address : ['Loyabad', 'Daltonganj'],
    role  : Role.STUDENT
}

let arrStr : string[];
// arrStr = ['dhnabad'];
if(person.role === Role.STUDENT){
    console.log('Yes I am student');
}
// console.log(person.role);
// for (const add of person.address){
//     console.log(add);
// }