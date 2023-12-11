const name = "sashi"
const repocount = 40

console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('sashi')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase())
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s')); 


const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const newStringone = "  hitesh"
console.log(newStringone)
console.log(newStringone.trim());
 
const url = 'https://sashi.com.np/about%20sashi'
console.log(url.replace('%20', '-'))
console.log(url.includes('sashi'))

console.log(gameName.split('-'))