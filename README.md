# Random Password Generator Project

## Table of Contents
* [Deployed Site](deployed-site)
* [Why?](#why)
* [Learning Points](#learning-points)
* [Expectations vs Results](expectation)
* [Resources Used](#resources-used)
* [Credits](#credits)
* [Contact Info](contact-info)

## Deployed Site

[Visit the Deployed Site](https://jacklcmore.github.io/random-password-generator/)

## Why?

The purpose of this project is to cement fundamental js ideals and put them into practice, such as using functions, callback functions, methods and conditional statements to breakdown the task of creating a random password given several input options from the end user.

## Learning Points

There were quite a few steps that I had come across in this challenge that I considered key elements to my success.

```
function RNG (num) {
  var index = Math.floor(Math.random() * num.length);
  var randomItem = num[index];
  console.log('Random Character: ', randomItem);
  return randomItem;
}
```

this function right here I had created to output a random character given an input of an array. I knew this was an integral part in comprising a final password but at first I didnt know how. My next step was then to figure out how to get an array that would consider the inputs of the end user.

```
 function generatePassword(){

    characterAmt(lengthChoice);

    for (let i = 0; i < lengthChoice; i++) {
      tempPW.push(RNG(userData))
    }
    console.log(tempPW);
    return tempPW.join('');
  }
```

this function here achieved exactly what I had intended for the previous issue that I had faced. I am now able to compile the end user data into an array equalling to the contents of all arrays (tied to the option selections) that the end user chose.

## Expectations vs Results

In this specific project I had expectations of it being a lot more lengthy of a process. The idea of taking certain inputs and displaying back a completely random string given certain inputs seemed pretty monumental.

I however in an unexpected turn of events figured out an end result of overlapping functions that turned that monumental task in my head and broke it down into not only smaller parts but extremely functional ones as well.

The outcome of this project has encouraged me, proving that my fear a task will be too big to handle is completely mental. I can always break down tasks into completely handleable portions.

## Resources Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git](https://git-scm.com/)

## Credits

* You! Thanks for taking the time out of your day to check out my work!
* Me! Thanks me for learning how to do cool coding things!
* Jerome Chenette! thanks for teaching me how to do cool coding things!
* Everyone in my class! thanks for being able to ask good questions when I can't think of any!

## Contact Info

* [Email] (jack.lcmore@gmail.com)
* [Phone#] ((808)640-4366)
* [GitHub] (https://github.com/JackLCmore)
* [LinkedIn] (https://www.linkedin.com/in/jack-seymour-b0b2b0292/)
