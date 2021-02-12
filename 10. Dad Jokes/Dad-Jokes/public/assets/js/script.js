const jokes = [
  `What did the NFL coach say when his coin got stuck in the vending machine? "Give me my quarter back!"`,
  "I was forced to watch my dog eat a clock. It was very time consuming!",
  `My friend David lost his ID... now I call him Dav.`,
  "What days are the strongest? Saturdays and Sundays. The rest are week days.",
  "Why did the blind man fall into the well? Because he couldn't see that well.",
  "How do Mexicans keep warm? They use chicken fajitas.",
  "What do you call a hen looking at a lettuce? Chicken Caesar Salad.",
  "There are 10 types of people: Those who understand binary and those who don't.",
  "I don't trust stairs. They're always up to something!",
  "How much does Santa pay to park his sleigh? Nothing, it's on the house!",
  "Why did the scarecrow win so many awards? He was outstanding in his field.",
  "How can a shepherd tell which sheep are his? By checking their baa codes.",
  "My extra sensitive toothpaste doesn't like it when I use other toothpastes.",
  "I recently bought 51% off a vampire hunting company. I'm now the main stake holder.",
  "I have a habit of taking pictures of myself in the shower, but they always come out too blurry.\nI think I may have selfie steam issues.",
  "They tried to make a diamond shaped like a duck. It quacked under the pressure.",
  "Chances are if you've seen one shopping centre, you've seen a mall.",
  "Howcome the staidum got hot after the game? Because all the fans left.",
  "Why did the kid cross the playground? To get to the other slide.",
  "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.",
  "To be Frank, I'd have to change my name.",
  "Whoever invented the knock-knock joke should get a no bell prize.",
  "Why did the kid throw the clock out the window? He wanted to see time fly!",
  "I was fired from th keyboard factory yesterday. Apparently, I wasn't putting in enough shifts",
  "Sometimes I tuck my knees into my chest and lean forward. That's just how I roll.",
  "How many South Americans does it take to change a lightbulb? A Brazilian.",
  "Which is the fastest growing city in the world? Dublin.",
  "Some people eat light bulbs. They say it's a light snack.",
  "Never take advice from electrons. They are always negative.",
  "I used to be addicted to soap, but I'm clean now.",
  "I made a belt out of watches once... It was a waist of time.",
  "Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.",
  "What kind of music do mummys like? Rap.",
  "What's large, grey, and doesn't matter? An irrelephant.",
  "A book just fell on my head. I only have my shelf to blame.",
  "Why can't your nose be 12 inches long? Because then it would be a foot!",
  "What kind of tree fits in your hand? A palm tree.",
  "How many tickles does it take to make an octopus laugh? Ten-tickles!",
  "Why don't skeletons ride rollercoasters? They don't have the stomach for it.",
  "Why don't sharks eat clowns? Because they taste funny.",
  "What do you cal a pig with three eyes? Piiig.",
  "What do you call a fish with no eyes? Fsh.",
  "Don't trust atoms. They make up everything!",
  "What do you call a bee that lives in America? A USB.",
  "A farmer had 297 cows. When he rounded them up, he found he had 300.",
  "If you're the one who stole my Microsoft Office, you're going to pay - you have my Word!",
  "I couldn't figure out how the seat belt worked. Then it just clicked.",
  "I had a pair of racing snails. I removed their shells to make them more aerodynamic, but they became a bit sluggish.",
  "How do hens stay fit? They always egg-cercise.",
  "What do you give a sick lemon? Lemonaid.",
  "What do you call an old snowman? Water.",
  "What do you call a careful wolf? Aware wolf.",
  "I was just looking at my ceiling. Not sure if it's the best ceiling in the world but it's definitely up there!",
];

const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");
const container = document.querySelector(".container");
let x = jokes.length - 1;
const config = {
  headers: {
    Accept: "application/json",
  },
};
jokeBtn.addEventListener("click", getJoke);

jokeBtn.click();

function getJoke() {
  // const i = Math.floor(Math.random() * jokes.length);
  // joke.innerHTML = jokes[i];

  // x < jokes.length - 1 ? x++ : (x = 0);
  // joke.innerHTML = jokes[x];

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (joke.innerHTML = data.joke));

  container.classList.toggle("spin");
}
