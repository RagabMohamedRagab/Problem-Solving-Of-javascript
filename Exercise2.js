// Write A program javascript to get Extention of File
// As File.txt 
// Pesudo Code 
export function Extention() {
  
    // 1- Enter Name of File
    let FileName = prompt("Please Enter File Name");
    // 2- I Used IndexOf('.') To Get Index Of get 
    // 3- Also Used Substring() To Name Of Extention

    const extName = FileName.substring(FileName.indexOf('.') + 1, FileName.length);
    // Congratulation To Get Extention !!!
    alert(`The Extention Of File is ${extName}`);
}
// Contact Me : +20 01121237611
// Githup : ragabmoh2oo
// LinkedIn : Rajab Mohamed Rajab