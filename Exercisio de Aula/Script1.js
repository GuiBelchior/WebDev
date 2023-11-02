// JavaScript source code
function f(msg) {
    console.log(msg)
}

var students = ['Manel', 'Fernando', 'Maria'];
var index = -1;
var count = 0;
var colors = ['red', 'blue', 'yellow']
function showStudent(index) {
    //VARS
    var studentName = document.getElementById('studentName');

    //PROCESSO
    count++;
    index = (index < students.length - 1) ? index + 1 : 0;

    studentName.style.color = colors[count % 3];
    //Show
    studentName.innerHTML = students[index];
    document.title = `Testes (clicou ${count} vezes )`;

}

function showStudents() {
    //var 
    var lista = '';
    var element = document.getElementById("students");

    //processing
    for (var i = 0; i < students.length; i++) {
        lista += students[i] + '<br/>';
    }
    //show
    element.innerHTML = lista;
}

function showStudentsUl() {
    //variaveis
    var lista = '';

    //criar o conjunto de <li>
    for (var i = 0; i < students.length; i++) {
        lista += `<li>${students[i]}</li>`;
    }
    //atribuir a lista de Li
    document.getElementById('studentsUl').innerHTML = lista;
}


function showStudentsUl2() {
    var e = document.getElementById('ullist');
    e.style.display = 'block';
}

function addStudent() {
    var nome = document.getElementById("nome").value;
    students.unshift(nome);
    showStudents();
}

