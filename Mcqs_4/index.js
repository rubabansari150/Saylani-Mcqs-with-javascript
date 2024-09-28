function quIz1() {
    // Get all radio buttons
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');

     if (!option1.checked && !option2.checked && !option3.checked) {
        alert("Please select an option!");
        return;  
    }

    
    if (option3.checked) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }
}