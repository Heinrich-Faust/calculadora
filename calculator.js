let operand1 = '';
        let operand2 = '';
        let operator = '';

        function appendNumber(number) {
            if (operator === '') {
                operand1 += number;
                document.getElementById('result').value = operand1;
            } else {
                operand2 += number;
                document.getElementById('result').value = operand2;
            }
        }

        function setOperator(op) {
            operator = op;
        }

        function calculate() {
            let result;
            const num1 = parseFloat(operand1);
            const num2 = parseFloat(operand2);

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'Error: División entre cero';
                    }
                    break;
            }

            document.getElementById('result').value = result;
            operand1 = result.toString();
            operand2 = '';
            operator = '';
        }

        function clearResult() {
            document.getElementById('result').value = '';
            operand1 = '';
            operand2 = '';
            operator = '';
        }

        function toggleNightMode() {
            const calculator = document.querySelector('.calculator');
            calculator.classList.toggle('night-mode');
        }