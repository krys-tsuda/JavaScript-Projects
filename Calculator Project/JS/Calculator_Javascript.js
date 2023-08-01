//Creates an object to keep track of values
const Calculator = {
    Display_Value: '0', //displays 0 on calculator screen.
    First_Operand: null, //holds the first operand for any expressions, we set it to null for now.
    Wait_Second_Operand: false, //checks wether or not the second operand has been inputted by the user.
    operator: null, //holds the operator, null for now.
};

//Modifies values each time a button is clicked.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator; //Checks if Wait_Seconed_Operand is true setting Display_Value to key clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }   //Overwrites Display_Value if current value is 0 
}       //other wise it adds onto it.

//Handles decimal points.
function Input_Decimal(dot) { //Ensures accidental clicking of decimal point doesn't cause bugs in operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }   //if the Display_Value does not contain a decimal point
        //we want to add a decimal point.
}

//Handles operators
function Handle_Operator(Next_Operator) {                           //When an operator key is pressed we conver the current number
    const {First_Operand, Display_Value, operator} = Calculator;    //displayed onscreen to a number and then store the result in
    const Value_of_Input = parseFloat(Display_Value);               //Calculator.First_Operand if it doesn't already exist.
    if (operator && Calculator.Wait_Second_Operand) {              
        Calculator.operator = Next_Operator;    //Checks if operator already exists and if Wait_Second_Operand is true,
        return;                                 //updates the operator and exits from the function.
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {  //checks if operator exists already
        const Value_Now = First_Operand || 0;   //if operator esixts, property lookup is performed for the operator
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);  //in the Perform_Calculation object and then the function that matches operator is exacuted.
        result = Number(result).toFixed (9); //fixed amount of numbers after decimal
        result = (result *1).toString();    //removes any trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//Calculations performed on operands based upon operator
const Perform_Calculation = {   
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {   
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//Updates calculator screen with contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen'); //targets .calculator-screen class
    display.value = Calculator.Display_Value;   //value of input tag in our HTML document
}

//Monitors button clicks
Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event; //target variable is an object that represents element clicked
    if (!target.matches('button')) {    //If element clicked is not a button , exit function
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {   //Ensures AC clears all inputs from screen.
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})