let a = 50;                       // Node modules
export default a;                 // npm init -y (for packagr.json file)
                                  // npm i @types/node -D (for package-lock.json )      
const abc = "abc";                // npm install inquirer (to get input from user in terminal )
               // For all of them to work configure in tsconfig file:  "target" : "ES2020" &&  "module" : "NodeNext"                                             
let array = [1, 2, 3];

const obj = {
  name: "John",
};

function sum() {
  console.log("This is Sum Function");
}

function subtract() {
  console.log("This is Sum Function");
}

export { abc, array, obj, sum, subtract };
