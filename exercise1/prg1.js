<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maximum of Three Numbers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input, button {
            margin: 5px 0;
            padding: 5px;
        }
        #result {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h2>Find Maximum of Three Numbers</h2>
    <input type="number" id="n1" placeholder="Number 1"><br>
    <input type="number" id="n2" placeholder="Number 2"><br>
    <input type="number" id="n3" placeholder="Number 3"><br>
    <button onclick="maxOfThree()">Find Maximum</button>
    <div id="result"></div>

    <script>
        function maxOfThree() {
            // Get input elements
            let num1 = parseFloat(document.getElementById("n1").value);
            let num2 = parseFloat(document.getElementById("n2").value);
            let num3 = parseFloat(document.getElementById("n3").value);

            // Check if inputs are valid numbers
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                document.getElementById("result").innerHTML = "Please enter valid numbers";
                return;
            }

            // Find maximum using Math.max()
            let max = Math.max(num1, num2, num3);
            
            // Display result
            document.getElementById("result").innerHTML = "The largest number is: " + max;
        }
    </script>
</body>
</html>