function countVowels() {
    const inputString = document.getElementById('inputString').value.toLowerCase(); // Convert to lowercase to handle both upper and lower case vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (vowels.includes(inputString[i])) {
            vowelCount++;
        }
    }

    document.getElementById('result').textContent = `Number of vowels: ${vowelCount}`;
}