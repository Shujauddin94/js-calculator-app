// function seven() {
//             document.getElementById("screen").value += 7;
//         }

//         function eight() {
//             document.getElementById("screen").value += 8;
//         }

//         function nine() {
//             document.getElementById("screen").value += 9;
//         }

//         function divide() {
//             document.getElementById("screen").value += '/';
//         }

//         function four() {
//             document.getElementById("screen").value += 4;
//         }

//         function five() {
//             document.getElementById("screen").value += 5;
//         }

//         function six() {
//             document.getElementById("screen").value += 6;
//         }

//         function multiply() {
//             document.getElementById("screen").value += '*';
//         }

//         function one() {
//             document.getElementById("screen").value += 1;
//         }

//         function two() {
//             document.getElementById("screen").value += 2;
//         }

//         function three() {
//             document.getElementById("screen").value += 3;
//         }

//         function add() {
//             document.getElementById("screen").value += '+';
//         }

//         function dot() {
//             document.getElementById("screen").value += '.';
//         }

//         function zero() {
//             document.getElementById("screen").value += 0;
//         }

//         function subtract() {
//             document.getElementById("screen").value += '-';
//         }
        function equals() {
         let ans =   document.getElementById("screen").value
         ans = ans.replace('x','*')

         document.getElementById("screen").value = eval(ans)

        }
    function handleinput(e) {
        let input = e.innerHTML
        console.log(input)
        // if(input == 'x'){
        //     input = '*'
        // }
        document.getElementById("screen").value += input ;
 
    }