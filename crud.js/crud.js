var selectedRow=null


function onformsubmit(e){

    event.preventDefault();
    var formdata= readformadata();
    if (selectedRow==null){
       insertNewrecord(formdata);    
    }

    else{
        updaterecord(formdata);
    }
    resetform();

}

function readformdata(){
    var DATA = {};
    DATA ["productcode"]=document.getElementById("productcode").value;
    DATA ["product"]=document.getElementById("product").value;
    DATA ["qty"]=document.getElementById("qty").value;
    DATA ["price"]=document.getElementById("price").value;
    return DATA;
}

//insert the Date
function insertNewrecord(data) {
    var multi = data.qty = data.price;
    var table = document.getElementById("store").getElementsByTagName("tbody")[0];
    //if (table.row.ienght >= 10) {
    // alert("Table can only have 10 rows");
    // return;
    //}
    var newRow = table. insertRow(table. length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.productcode;

cel12 = newRow.insertCell(1);
cel12.innerHTML = data.product;

cel13 = newRow.insertCell (2);
cel13.innerHTML = data.qty;

cell4 = newRow.insertCell(3);
newRow.setAttribute('data-original-price',data.price);
cell4.innerHTML = multi;

cell5 = newRow.insertCell(4);
cel15.innerHTML =
'<button onClick="onEdit (this)" class="btn btn-outline-danger text-light fw-bold"›EDIT</button>' 
'<buttononClick="onDelete(this)" class="btn btn-outline-secondary text-light fw-bold">Delete</button>';

calculateTotalPrice();
    
}


// Calculate Total Price
function calculateTotalPrice() {
var table = document.getElementById("store").getElementsByTagName("tbody")[0];
var rows = table.getElementsByTagName("tr");
var total = 0;

for (var i = 0; i < rows.length; i++) {
var row = rows[i];
var priceCell = row.cells[3];
var price = parseFloat (priceCell.innerHTML);
total += price;
}

// / Display the total price 
var totalPriceCell = document.getElementById("totalPrice");
totalPriceCell.innerHTML = "Total: " + total;
}


// EDIT
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productcode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("product").value=selectedRow.cells[1].innerHTML;
    document.getElementById ("qty") .value=selectedRow.cells[2].innerHTML;
    document.getElementById("price").value=selectedRow.getAttribute('data-original-price');;
}
    function updateRecord(formdata){
    var multi = formdata.qty * formdata.price;
    selectedRow.cells[0].innerHTML=formdata.productcode; 
    selectedRow.cells[1].innerHTML=formdata.product;
    selectedRow.cells[2].innerHTML=formdata.qty;
    selectedRow.cells[3].innerHTML=multi;
    resetform();
    calculateTotalPrice();

    }
    

    // / delete
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById('store').deleteRow(row.rowIndex);
        resetform();
        calculateTotalPrice();
    }
}
//  Reset
function resetform(){
document.getElementById("productcode").value='';
document.getElementById("product").value='';
document.getElementById("qty").value='';
document.getElementById("price").value='';
selectedRow = null; 
}

cell4 = newRow.insertCell(3);
newRow.setAttribute('data-original-price', data.price);
cell4.innerHTML = multi;

cel15 = newRow.insertCell(4);
cel15.innerHTML =
'<button onClick="onEdit (this)" class="btn btn-outline-danger text-light fw-bold"›EDIT</button>' 
'<buttononClick="onDelete(this)" class="btn btn-outline-secondary text-light fw-bold">Delete</button>';










