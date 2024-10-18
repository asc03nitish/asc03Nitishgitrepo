function clicck(event) {
    event.preventDefault();
    
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Collect all checked options (Latte, Cappuccino)
    const selectedOptions = [];
    if (document.getElementById('kapi').checked) {
        selectedOptions.push('Filter Coffee');
    }
    if (document.getElementById('cappucino').checked) {
        selectedOptions.push('Cappuccino');
    }
    const options = selectedOptions.join(', ');

    // Collect delivery type (Takeaway or Delivery)
    const delivery = document.querySelector('input[name="type"]:checked').value;

    // Insert data into table
    const table = document.getElementById('datatable');
    const rowdata = table.insertRow();

    const fnamecell = rowdata.insertCell(0);
    const lnamecell = rowdata.insertCell(1);
    const datecell = rowdata.insertCell(2);
    const addresscell = rowdata.insertCell(3);
    const gendercell = rowdata.insertCell(4);
    const optionscell = rowdata.insertCell(5);
    const deliverycell = rowdata.insertCell(6);

    // Populate cells
    fnamecell.textContent = fname;
    lnamecell.textContent = lname;
    datecell.textContent = date;
    addresscell.textContent = address;
    gendercell.textContent = gender;
    optionscell.textContent = options;
    deliverycell.textContent = delivery;

    //Locally 
    const formlocal = {
        fname: fname,
        lname: lname,
        date: date,
        address: address,
        gender: gender,
        options: options,
        delivery: delivery
    };
    let savedata = JSON.parse(localStorage.getItem('formlocal')) || [];
    savedata.push(formlocal);
    localStorage.setItem('formlocal', JSON.stringify(savedata));

    // Reset form after submission
    // document.querySelector('form').reset();
}
window.onload = function(){
    let savedata = JSON.parse(localStorage.getItem('formlocal')) || [];
};