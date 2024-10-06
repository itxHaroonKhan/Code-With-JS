function FullName (FastNamee , LastName){
let a =  "Hello " +  FastNamee + LastName
return a
}
console.log(FullName("Haroon " , "Khan"));



function sumMarsk (hindi,english , math , Physics , Chmistry){
    let a = hindi + english + math + Physics + Chmistry
    return a
}

let B = sumMarsk(50,50,50,50,50)
console.log("Obthin Marks " +  B);




function Percentage (tm){
    let c =  tm / 500 * 100;
    return c
}

let D = Percentage(B)
console.log("Percentage - " + D + "%");
