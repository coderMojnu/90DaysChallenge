//splice Adds and removes items from an array
const studentName = ["Sarmin", "Bithy", "Shikha", "Jui", "Merina", "Sanjida"];
const modifyStudent = studentName.splice(3, 1, "Mominul");// Remove 1 item from index 3 and replace by "Mominul" 
const addStudent = studentName.splice(3,0, "Mehedy");//add mehedy before Mominul
console.log(studentName);
//Remove 2 items from index 0 and insert "sunflower", "belly", "kali" at index 0
var flowers = ["rose", "lily", "tulip"];
const removedAndReplace = flowers.splice(0, 2, "sunflower", "belly", "kali");
console.log(flowers);
const removeFlowers = flowers.splice(0, 2);//remove 2 item from index 2
console.log(flowers);//kali, tulip 
