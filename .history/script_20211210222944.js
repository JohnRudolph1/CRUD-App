function onFormSubit () {
let formData = readFormData();
}
function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData
}
function insertNewrecord(data) {
    let table = document.getElementById("employeeList").getE
}