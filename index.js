function f_rozrahunok(a, b, c) {

    var a = document.getElementById('arg_a').value;
    var b = document.getElementById('arg_b').value;
    var c = document.getElementById('arg_c').value;
    var sol = document.getElementById("result");


    var d = b * b - 4 * a * c;
    var roots;



    if (d < 0) {
        roots = "Дане квадратне рівняння не має розв'язків";
    }


    else if (d == 0) {
        roots = "Дане квадратне рівняння має один розв'язок. <br>x = ";
        roots += -b / (2 * a);
    }
    else {
        roots = "Дане квадратне рівняння має два розв'язки. <br>x<sub>1</sub> = ";
        roots += (-b - Math.sqrt(d)) / (2 * a);
        roots += ", x<sub>2</sub> = ";
        roots += (-b + Math.sqrt(d)) / (2 * a);
    }

    // document.write(roots);
    sol.innerHTML = roots;
}