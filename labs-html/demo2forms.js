function clicck(event) {
    event.preventDefault();
    
    // Get form values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Collect all checked options (Latte, Cappuccino)
    const selectedOptions = [];
    if (document.getElementById('latte').checked) {
        selectedOptions.push('Latte');
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
    const addresscell = rowdata.insertCell(2);
    const gendercell = rowdata.insertCell(3);
    const optionscell = rowdata.insertCell(4);
    const deliverycell = rowdata.insertCell(5);

    // Populate cells
    fnamecell.textContent = fname;
    lnamecell.textContent = lname;
    addresscell.textContent = address;
    gendercell.textContent = gender;
    optionscell.textContent = options;
    deliverycell.textContent = delivery;

    // Reset form after submission
    document.querySelector('form').reset();
}



// function clicck(event){
//     event.preventDefault();
//     // let displayy = document.getElementById('name');
//     // console.log(displayy.value);
//     const fname = document.getElementById('fname').value;
//     const lname = document.getElementById('lname').value;
    
//     const address = document.getElementById('address').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     // const options = document.querySelector('input[name="options"]:checked').value;
    
//     // const latte = document.getElementById('latte').checked;
//     // const cappucinno = document.getElementById('cappucino').checked;
//     const delivery = document.getElementById('delivery').value;

//     const table = document.getElementById('datatable');

//     const rowdata = table.insertRow();

//     const fnamecell = rowdata.insertCell(0);
//     const lnamecell = rowdata.insertCell(1);
//     const addresscell = rowdata.insertCell(2);
//     const gendercell = rowdata.insertCell(3);
//     // const optionscell = rowdata.insertCell(4);
//     // const lattecell = rowdata.insertCell(4);
//     // const cappucinnocell  = rowdata.insertCell(4);
//     const deliverycell = rowdata.insertCell(5);
    


//     fnamecell.textContent = fname;
//     lnamecell.textContent = lname;
//     addresscell.textContent = address;
//     gendercell.textContent = gender;
//     // optionscell.textContent = options;

//     // lattecell.textContent = latte;
//     // cappucinnocell.textContent = cappucinno;
//     deliverycell.textContent = delivery;


//     document.getElementById('reset').reset();

// } 
// clicck();