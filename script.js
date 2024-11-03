function calculateLength() {
    const text = document.getElementById("textInput").value;
    
    // Calculate length excluding spaces
    const lengthWithoutSpaces = text.replace(/\s/g, "").length;
    
    // Display the result
    document.getElementById("result").innerText = lengthWithoutSpaces;
  }