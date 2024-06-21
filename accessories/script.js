function addItem() {
    var accessorySelect = document.getElementById("accessory-select");
    var selectedAccessory = accessorySelect.options[accessorySelect.selectedIndex].text;
    var selectedAccessoryValue = accessorySelect.options[accessorySelect.selectedIndex].value;
    var amountInput = document.getElementById("amount-input");

    var amount = amountInput.value;
    var accessoryTable = document.getElementById("accessory-table");

    var price = parseFloat(selectedAccessoryValue)

    var totalPrice = document.getElementById("total-price");
    var productTable = document.getElementById("product-list");
    
    var row = productTable.insertRow(-1);
    var accessoryCell = row.insertCell(0);
    var amountCell = row.insertCell(1);
    var priceCell = row.insertCell(2);
    
    accessoryCell.innerHTML = selectedAccessory;
    amountCell.innerHTML = amount;
    priceCell.innerHTML = "$" + (price * amount);

    
    totalPrice.innerHTML = "$" + (parseFloat(totalPrice.innerHTML.substring(1)) + ((price * amount) * 1.07)).toFixed(2);

    var grossPrice = document.getElementById("grossPrice");
    grossPrice.innerHTML = "$" + (parseFloat(grossPrice.innerHTML.substring(1)) + (price * amount));

    var vatAmount = document.getElementById("vatAmount");
    vatAmount.innerHTML = "$" + (parseFloat(vatAmount.innerHTML.substring(1)) + (price * 0.07)).toFixed(2);


}