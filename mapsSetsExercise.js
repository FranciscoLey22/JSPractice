// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4])
// {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("")
//'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{[1,2,3] : true, [1,2,3] : false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr){
    let newArr = [...new Set(arr)];
    if (newArr.length === arr.length){
        // console.log(newArr);
        // console.log(arr);        
        return false;
    }
    // console.log(newArr);
    // console.log(arr);
    return true;
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str){
    
    const vowelNums = new Map();
   
    let vowels = "aeiou";
    for (i =0; i<str.length; i++){
    //check if the letter in the string is a vowell    
        if (vowels.indexOf(str[i]) !== -1){
            //let count = 0;
//count the number of times the vowel found above occurs in the string

//add the vowel as a key to the map w ith the count
            vowelNums.set(str[i], count);
       
        }
    
    }
    return vowelNums

}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

