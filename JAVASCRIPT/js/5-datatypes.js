 //  Typ liczbowy

 let salary = 5000;
 let bonus = 2500;
 let wholeSalary;

 wholeSalary = salary + bonus;

 console.log('number', wholeSalary);
 console.log(typeof wholeSalary);





 //  Typ - łańcuch znaków - string


 let salaryStr = 5000;
 let bonusStr = "2500";
 let wholeSalaryStr;

 wholeSalaryStr = salaryStr + bonusStr;

 console.log('wholeSalaryStr', wholeSalaryStr);




 // Typ logiczny - boolen 


 let isSmog;
 isSmog = false;

 if (isSmog === false) {
     console.log('Jest SMOG');

 } else {
     console.log('Nie ma SMOGu ;)');

 }




 // Typ specjalny - undefined 

 let undefinedVariable;
 let nullVariable = null;

 console.log(undefinedVariable);
 console.log(typeof nullVariable);
 console.log(nullVariable);





 let studentsName = "Michał";
 console.log(studentsName.indexOf('c'));


 let studentEmail = "Michał";
 console.log(studentEmail.indexOf('@'));


 let studentEmaili = "Michal@interia.pl";
 console.log(studentEmaili.indexOf('interia.pl'));