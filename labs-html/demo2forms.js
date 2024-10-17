function clicck(event){
    event.preventDefault();
    // let displayy = document.getElementById('name');
    // console.log(displayy.value);
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    // const options = document.querySelector('input[name="options"]:checked').value;
    
    // const latte = document.getElementById('latte').checked;
    // const cappucinno = document.getElementById('cappucino').checked;
    const delivery = document.getElementById('delivery').value;

    const table = document.getElementById('datatable');

    const rowdata = table.insertRow();

    const fnamecell = rowdata.insertCell(0);
    const lnamecell = rowdata.insertCell(1);
    const addresscell = rowdata.insertCell(2);
    const gendercell = rowdata.insertCell(3);
    // const optionscell = rowdata.insertCell(4);
    // const lattecell = rowdata.insertCell(4);
    // const cappucinnocell  = rowdata.insertCell(4);
    const deliverycell = rowdata.insertCell(5);
    


    fnamecell.textContent = fname;
    lnamecell.textContent = lname;
    addresscell.textContent = address;
    gendercell.textContent = gender;
    // optionscell.textContent = options;

    // lattecell.textContent = latte;
    // cappucinnocell.textContent = cappucinno;
    deliverycell.textContent = delivery;


    // document.getElementById('reset').reset();

} 
clicck();