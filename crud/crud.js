var selectedRow=null

function onformsubmit (e) {

    event.preventDefault();
    var formdata= readformadata();
    if (selectedRow==null){
       insertNewrecord(formdata);    
    }

    else{
        updaterecord(formdate);
    }
    resetform();
}

function readformdata(){
    var DATA = {};
    DATA ["productcode"]=document.getElementById("productcode").value;
    DATA ["product"]=document.getElementById("product").value;
    DATA ["qty"]=document.getElementById("qty").value;
    DATA ["price"]=document.getElementById("price").value;
    return DATA
}

//insert the Date
function insertNewrecord(data) {
    var multi = data.qty = data. price;
    var table = document.getElementById("store").getElementsByTagName("tbody")[0];
    //if (table.row.ienght >= 10) {
    // alert("Table can only have 10 rows");
    // return;
    //}
    
}