let counter = 0;
let counter2 = 0;
let counter3 = 0;

const text = [
    'Today you decide to leave your family to go on a grand adventure.', 
    'During this time, your home has been invaded by humans. You want to become stronger in hopes to defend you and your family, and to find great treasures.',
    "To start off your adventure, explore the deep woods."
];

const choiceText = [
  'You Obtained Green Slime'
];

const sunflowerText = [
  "The sunset reminds you of your memories with your family when you were a younger slime.",
  "Thinking about the past made you want to relive those moments, in the sunflower field.",
  "Leaving your family put a dent on you.",
  "But after giving yourself time to relive old memories, you're stronger than ever.",
  "You find joy jumping on sunflowers like a frog, leaving residue behind.",
]

const mountainText = [
  "Despite your own height, you wanted to go for a big challenge.",
  "The mountains were the perfect challenge to face, you thought.",
  "So you decide to head towards the mountains, as nightfall arrives.",
  "You knew you couldn't make it on your first day, so you needed to settle somewhere for the night.",
  "With fields still availble to your use, you decide to dig a hole into a villager's grounds, disguishing yourself as the grass.",
]

const btn_next =  document.getElementById("btn1");
const text_display = document.getElementById("paragraph1");
const option_text1 = document.getElementById("card__option__text--1");
const option_text2 = document.getElementById("card__option__text--2");
const option_text3 = document.getElementById("card__option__text--3");

const second_btn = document.getElementById("btn2");

const slime_button = document.getElementById("greenSlime")
const slime_text = document.getElementById("obtainGreenSlime")

const first_card_options = document.getElementById("btn3")
//document.getElementById("btn3").onclick = Continue;
const first_card_options2 = document.getElementById("btn4")


btn_next.addEventListener("click", toggleText); 
second_btn.addEventListener("click", toggleText);
slime_button.addEventListener("click", toggleText);
//first_card_options.addEventListener("click", toggleText);
//first_card_options2.addEventListener("click", toggleText2);




function toggleText() {
  counter += 1;
  console.log(text.length)
  console.log(text.at(2))
  console.log(counter)


  if (counter <= text.length) {
    // Update displayed text
    text_display.innerHTML = text[counter -1];
  }

  if (counter == 3) {
    textTest = 2

    if (textTest == 2) {
        // Hide button
        btn_next.style.display = 'none';
        // Show second button
        second_btn.style.display = 'block';
    }
  }


    if (counter >= 4) {
        textTest2 = 3
    
        if (textTest2 == 3) {
            // Hide second button
            second_btn.style.display = 'none';
            text_display.style.display = 'none';
            // Display slime image and text
            slime_button.style.display = "block";
            slime_text.style.display = "block";
            console.log(textTest2)
            slime_text.innerHTML = choiceText[counter -4];
            if (counter <= choiceText.length) {
              
            }
        }
    }
    if (counter >= 5) {
      textTest3 = 4
      if (textTest3 == 4) { 
        //Hide slime and text
        slime_button.style.display = "none";
        slime_text.style.display = "none";
        //Show options
        first_card_options.style.display = "block";
        first_card_options2.style.display = "block";
        option_text1.style.display = "block";
        option_text2.style.display = "block";
        option_text3.style.display = "block";

        //function toggleText2() {
          //counter2 += 1;
          //if (counter2);
        //}
    }
  }
}

const first_card1 = document.querySelector(".first__card--1");
const second_card1 = document.querySelector(".second__card--1");
const option_choice1 = document.querySelector(".first__options");
const first_button = document.querySelector(".first--option");
const second_button = document.querySelector(".second--option");

const sunflower_choice = document.querySelector(".sunflower_choice")
const sunflower_choice_fire = document.querySelector(".fire__button2")
const obatin_purple = document.querySelector(".purple__slime")
const purpleSlime__text = document.querySelector(".slime__button2")

const mountain_choice = document.querySelector(".mountain_choice")
const mountain_choice_fire = document.querySelector(".fire__button3")
const obatin_gray = document.querySelector(".gray__slime")
const graySlime__text = document.querySelector(".slime__button3")

function Continue1() {
  second_card1.style.display = "none";
  first_card1.style.display = "none";
  option_choice1.style.display = "none";
  first_button.style.display = "none";
  second_button.style.display = "none";
  sunflower_choice_fire.style.display = "block";
  sunflower_choice.style.display = "block";
  console.log(first_card1)
  
}

function Continue2() {
  second_card1.style.display = "none";
  first_card1.style.display = "none";
  option_choice1.style.display = "none";
  first_button.style.display = "none";
  second_button.style.display = "none";
  mountain_choice_fire.style.display = "block";
  mountain_choice.style.display = "block";
  console.log(first_card1)
}

function Log1() {
  counter2 += 1;
  console.log(counter2);

  if (counter2 <= sunflowerText.length) {
    // Update displayed text
    sunflower_choice.innerHTML = sunflowerText[counter2 -1];
  }
  if (counter2 == 6) {
    sunflower_choice_fire.style.display = "none"
    sunflower_choice.style.display = "none"
    purpleSlime__text.style.display = "block"
    obatin_purple.style.display = "block"

  }
}

function Log2() {
  counter3 += 1;
  console.log(counter3);

  if (counter3 <= mountainText.length) {
    // Update displayed text
    mountain_choice.innerHTML = mountainText[counter3 -1];
  }
  if (counter3 == 6) {
    mountain_choice_fire.style.display = "none"
    mountain_choice.style.display = "none"
    graySlime__text.style.display = "block"
    obatin_gray.style.display = "block"
  }
}

