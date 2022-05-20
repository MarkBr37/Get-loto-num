const columnsElement = document.getElementById('columns')
const numbersElement = document.getElementById('numbers')

// creat the option element
for (let i = 1; i <= 14; i++) {
   const option = document.createElement('option')
   option.value = i;
   option.innerHTML = i;

   columnsElement.appendChild(option);
}

function randomNum(max, min) {
   return Math.floor(Math.random() * (max - min) + min);
}

// get num and check if in the Array
function getAndCheck(arr, num) {

   if ( arr.length ) {
      for (let i = 0; i <= arr.length; i++) {
         if (arr[i] == num) {
            return getAndCheck(arr, randomNum(37, 1));
         }
      }
   }
   return num;
}

// creates one column of number
function createTable(num, numbersArr, repeatingNums){

   for (let z = 0; z <= 6; z++) {
         
      if (z >= 6) {
         num = '<b>' + randomNum(7, 1) + '</b>';
      } else {
         num = getAndCheck(repeatingNums, randomNum(37, 1)) + ' '; 
      }
      numbersArr.push(num);
      repeatingNums.push(num);
   }
}

// return 
function renderNum(arr){
   arr.sort((a, b)=> a - b);
   let tableNum = '';

   for(let i = 0; i <= arr.length-1; i++){
      tableNum += arr[i];
   }
   return tableNum;
}

function inArray(arr, number){

   for(let i = 0;i <= arr.length; i++ ){
      if(arr[i] == number) return true
   }

   return false
}

/* 
****************************
   main engine
****************************
*/
function show() {
   numbersElement.innerHTML = '';
   const x = columnsElement.value;
   let repeatingNums = [];
   let theNums = [];
   let num,numbers = ''

   // creates tables 
   for (let i = 1; i <= x; i++) {
      const p = document.createElement('p')
      const numbersArr = []

      createTable(num, numbersArr, repeatingNums);
      numbers = renderNum(numbersArr);
      
      // cheak if the numbers is exists
      while(inArray(theNums,numbers)){
         
         createTable(num, numbersArr, repeatingNums);
         numbers = renderNum(numbersArr);
      }



      // add to array to not repeat the same numbers
      theNums[i-1] = numbers;
      // add to the paragraph
      p.innerHTML = theNums[i-1]
      
      // create one table
      numbersElement.appendChild(p);

      // restart
      
      numbers = ''
      repeatingNums = []
   }
}
