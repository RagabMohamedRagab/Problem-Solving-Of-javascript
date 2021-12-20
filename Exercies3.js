// Write a program javascript to replace evey character in given string to following it in alphabets
// Date => 20-12-2021 At 10:31 PM
export function character() {
  
    let $GivenStr = prompt("Enter String :");
    let AnewStr = (str) => {
        var Lexical = "";
        for (var item in str) {

            Lexical += String.fromCharCode((str.charCodeAt(item) + 1));
        };
        return Lexical;
    }

}
// By using Ragab Mohamed Ragab
// You can contact  Me at WhatsApp : +20 01121237611