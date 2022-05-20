let input = 'Hello from the other side';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultsArray = [];

for (let i = 0; i < input.length; i++){
    const inputStr = input[i];
    //console.log(input[i]);

    for (let j = 0; j < vowels.length; j++){
        const vowelsStr = vowels[j];
        //console.log(vowels[j]);

        if (inputStr === vowelsStr){
            if(inputStr === 'e'){
                resultsArray.push('ee');
            }else if(inputStr === 'u'){
                resultsArray.push('uu');
            }else{
            resultsArray.push(input[i]);
            }
        }
    }
}
let resultString = resultsArray.join('');

console.log(resultString.toUpperCase());