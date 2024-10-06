function FullName(FastNamee, LastName) {
    var a = "Hello " + FastNamee + LastName;
    return a;
}
console.log(FullName("Haroon ", "Khan"));
function sumMarsk(hindi, english, math, Physics, Chmistry) {
    var a = hindi + english + math + Physics + Chmistry;
    return a;
}
var B = sumMarsk(50, 50, 50, 50, 50);
console.log("Obthin Marks " + B);
function Percentage(tm) {
    var c = tm / 500 * 100;
    return c;
}
var D = Percentage(B);
console.log("Percentage - " + D + "%");
