document.write("86.to find the types of a given angle."+"<br>");
function test86(a){
    if(a<90){
        return "Acute angle";
    }
    if(a==90){
        return "Right angle";
    }
    if(a<180){
        return "Obtuse angle";
    }
    if(a==180){
        return "straight angle";
    }
}
document.write("The degree :180, Ans :"+test86(180)+"<br>");
document.write("The degree :100, Ans :"+test86(100)+"<br><br>");