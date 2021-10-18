// Iteration 1: Names and Input

let hacker1 = "Tamara";
console.log("The driver's name is " + hacker1)

let hacker2 = "Dennis";
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length +" characters!")
}

// Iteration 3: Loops

let upperCase = " "

for (let i = 0; i < hacker1.length; i++) {
  upperCase = upperCase + hacker1[i].toUpperCase() + "";
}
console.log(upperCase)

let reverse = ""

for (let i = hacker2.length-1; i >= 0; i--) {
  reverse = reverse + hacker2[i];
}
console.log(reverse)

if (hacker1 > hacker2) {
    console.log("The driver's name goes first")
  }
  else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  }

// Bonus 1

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in tellus auctor, condimentum sem a, sollicitudin tortor. Maecenas luctus tristique augue. In vitae massa a sapien mollis pharetra. Duis at urna facilisis, pellentesque nunc vitae, ultricies urna. Mauris euismod, quam ac volutpat tincidunt, libero nibh finibus justo, vel sodales orci tellus vel diam. Integer nec risus nec tortor pellentesque consequat ut eget massa. Praesent quis pharetra libero. Donec ut lacus libero. Nunc eleifend blandit nunc eget consequat. Sed malesuada placerat tempus. Vivamus tincidunt ornare justo sed eleifend. Aenean nunc ex, faucibus vel ipsum in, volutpat imperdiet leo. Cras vestibulum consectetur augue id ornare. Sed porttitor lectus non nunc pellentesque, nec condimentum enim fermentum. Pellentesque facilisis nunc sit amet elit viverra dignissim. Ut nec enim eu elit aliquet tempus. Curabitur id ligula in ante interdum posuere et non ligula. Aliquam tristique, mauris vitae suscipit cursus, quam odio accumsan augue, ut faucibus lectus urna in urna. Aliquam ornare tempor enim et auctor. Nullam ut felis massa.Nam erat lectus, sodales a varius ut, tincidunt in felis. In hac habitasse platea dictumst. Morbi mollis urna a velit cursus, eget pulvinar ipsum ultricies. Maecenas ac neque dolor. In ac diam non tortor vulputate feugiat a vitae erat. Ut sollicitudin ultrices dolor a viverra. Sed cursus nibh augue, id faucibus sapien pulvinar placerat. Aliquam non consequat lacus."

let wordCount = 1;
  for (var i = 0; i < paragraph.length; i++){
    if (paragraph[i] === " ") {
      wordCount = wordCount +1; 
    }
  }

console.log(wordCount)

 
let count = paragraph.split(" et ").length - 1;
console.log(count);

// Bonus 2