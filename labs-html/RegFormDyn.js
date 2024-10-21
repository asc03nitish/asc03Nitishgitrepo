function updateTable() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : '';

    const selectedOptions = [];
    if (document.getElementById('kapi').checked) {
        selectedOptions.push('Filter Coffee');
    }
    if (document.getElementById('cappucino').checked) {
        selectedOptions.push('Cappuccino');
    }
    const options = selectedOptions.join(', ');

    const delivery = document.querySelector("input[name='type']:checked") ? document.querySelector("input[name='type']:checked").value : '';

    const table = document.getElementById('datatable');

    // Clear table before updating it dynamically
    const rows = table.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Insert updated data while typing
    const row = table.insertRow();
    row.insertCell(0).textContent = fname;
    row.insertCell(1).textContent = lname;
    row.insertCell(2).textContent = date;
    row.insertCell(3).textContent = address;
    row.insertCell(4).textContent = gender;
    row.insertCell(5).textContent = options;
    row.insertCell(6).textContent = delivery;
}

function saveData(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : '';

    const selectedOptions = [];
    if (document.getElementById('kapi').checked) {
        selectedOptions.push('Filter Coffee');
    }
    if (document.getElementById('cappucino').checked) {
        selectedOptions.push('Cappuccino');
    }
    const options = selectedOptions.join(', ');

    const delivery = document.querySelector("input[name='type']:checked") ? document.querySelector("input[name='type']:checked").value : '';

    const formlocal = { fname, lname, date, address, gender, options, delivery };

    // Save data to localStorage
    let savedata = JSON.parse(localStorage.getItem('formlocal')) || [];
    savedata.push(formlocal);
    localStorage.setItem('formlocal', JSON.stringify(savedata));

    // Update the table with saved data
    updateTable();

    // Reset the form after submission
    document.querySelector('form').reset();
}

window.onload = function() {
    const savedata = JSON.parse(localStorage.getItem('formlocal')) || [];

    // Populate table with saved data on page load
    const table = document.getElementById('datatable');
    savedata.forEach(data => {
        const row = table.insertRow();
        row.insertCell(0).textContent = data.fname;
        row.insertCell(1).textContent = data.lname;
        row.insertCell(2).textContent = data.date;
        row.insertCell(3).textContent = data.address;
        row.insertCell(4).textContent = data.gender;
        row.insertCell(5).textContent = data.options;
        row.insertCell(6).textContent = data.delivery;
    });

    // Add event listeners to update table dynamically as user types
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updateTable);
    });

    // Listen for changes in the gender radio buttons and delivery options
    const genderInputs = document.querySelectorAll("input[name='gender']");
    genderInputs.forEach(input => {
        input.addEventListener('change', updateTable);
    });

    const deliveryInputs = document.querySelectorAll("input[name='type']");
    deliveryInputs.forEach(input => {
        input.addEventListener('change', updateTable);
    });
};

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', saveData);
