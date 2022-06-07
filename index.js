const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
const newTutorials = tutorials.map(tutorial=> {
return tutorial.split(" ").map(word => {
  return word[0].toUpperCase() + word.substring(1)

// return word.map((word) => { 
//   return word[0].toUpperCase() + word.substring(1); 
// }).join(" ")
}).join(" ")
})
return newTutorials
}




//   return word[0].toUpperCase() + word.substring(1)
// }).join("")
// })
// return newTutorials.word
// }
// }
// return tutorials.name.charAt(0).toUpperCase()

//iterate into words to split into inl

//capitalize 1st letter
// add the rest of the word
// join them back