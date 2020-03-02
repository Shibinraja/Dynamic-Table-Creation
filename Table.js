let add = document.getElementById("btn-add");
let Table = document.getElementById("tb");


add.addEventListener("click", function () {
    Length = Table.rows.length;
    Trow = Table.insertRow(Table.rows.length);
    Tno = Trow.insertCell(0);
    Taction = Trow.insertCell(1);
    Tno.innerHTML = ++Length;
    Trow.setAttribute("id", Length)
    Button = document.createElement("button");
    Button.innerHTML = "Delete"
    Button.setAttribute("class", "btn btn-danger");
    Button.setAttribute("onclick", "deleted(this,this.parentNode.parentNode.id)");
    Taction.appendChild(Button);
    Trow.appendChild(Tno);
    Trow.appendChild(Taction);
    Table.appendChild(Trow);

})

function deleted(act, id) {
    console.log(++id);
    var row = act.parentNode.parentNode;
    row.parentNode.removeChild(row);
    Tlength = Table.rows.length;
    for (var i = id; i <= Tlength + 1; i++) {

        Tno = document.getElementById(i).cells[0]
        Tno.innerHTML = i - 1;
    }
}