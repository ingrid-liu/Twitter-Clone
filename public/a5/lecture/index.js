"use strict";
// var abc = 123;


(function() {


var house = {
    rooms: 3,
    baths: 3,
    sqf: 1300
};

document.getElementById("rooms").innerHTML = house.rooms;
document.getElementById("baths").innerHTML = house.baths;
document.getElementById("squareFeet").innerHTML = house.sqf;




function addAplusB() {
    var a = document.getElementById("a").value;     //.value -> string
    a = parseInt(a)
    var b = document.getElementById("b").value;
    b = parseInt(b)
    var c = document.getElementById("c");
    var sum = a + b;
    c.innerText = sum;

}


var result = document.getElementById("result");
result.innerHTML = 2 + 3;

var theElement = document.getElementById("a");
var theValue = theElement.value;
// alert(theValue);


// alert('Hello World!');
function sayHello() {
    alert("Hello!")
}


var scores = [90, 89, 78, 67];
document.write("<h1>Scores</h1>")
document.write(scores)


document.write(`
            <table border='1'>
                ${
    scores.map((score, idx) => `
                        <tr>
                            <td>scores[${idx}]</td>
                            <td>${score}</td>
                        </tr>
                    ` ).join('')
}
            </table>

        `)

var table = "<table border='1'> ";
for(var j in scores) {
    var row = "<tr>";			var col = "<td>"
    col += "scores["+j+"]";	    col += "</td>";
    row += col;					col = "<td>"
    col += scores[j];			col += "</td>";
    row += col;					row += "</tr>";
    table += row;
}
table += "</table>";
document.write(table);


document.write(`
                <ul>
                    ${
    scores.map((score, idx) => `
                            <li>
                                scores[${idx}] = ${score}
                            </li>
                        `).join('')
}
                </ul>
        `);

document.write("<ul>");
for(var i in scores) {
    document.write("<li>scores["+i+"] = " + scores[i]);
    document.write("</li>");
}
document.write("</ul>");


var total = 0;
for (var i =0; i<scores.length; i++) {
    total += scores[i];
}
var average = total / scores.length;

// document.write("total= " + total + "<br/>");
// document.write("average= " + average + "<br/>");

// backticks -> curly braces & dollar signs
document.write(`total=  ${total} <br/>`);
document.write(`average=  ${average} <br/>`);



var h1Hello = document.getElementById('hello');
h1Hello.innerText = ('Hello World');
h1Hello.style.color = 'white';
h1Hello.style.fontSize = "25px";
h1Hello.style.display = 'none';

var today = new Date();
document.write("<h2>The Month</h2>")
document.write(today.getMonth());
document.write(today.getFullYear());
document.write(today.getDate());


document.write(`
            <h2>Hello World!</h2>
            <ul>
                <li>${scores}</li>
                <li>Pick up the kids</li>
                <li>Buy milk!!!</li>
            </ul>
        `);


})()