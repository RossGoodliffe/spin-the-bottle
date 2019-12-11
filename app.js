// ******** DATA Array for forfeits ********

data = [
    {
    "id" : "1",
    "challenge" : "Challenger, fill your mouth with water for 2 minutes. Spinner, without touching them, make them spit it out! Looser forfeits"
    },

    {
    "id" : "2",
    "challenge" : "Spinner, tell a story about the challenger, if they interupt or tell you to stop, they forfeit"
    },

    {
    "id" : "3",
    "challenge" : "Spinner, stare down the challenger. First to blink or look away, forfeits!"
    },

    {
    "id" : "4",
    "challenge" : "Challenger, without talking explain a film to the Spinner. If they dont get it, you forfeit!"
    },

    {
    "id" : "5",
    "challenge" : "Challenger, close your eyes for two minutes. Spinner, without touching them, make them open their eyes. Looser forfeits!"
    },

    {
    "id" : "6",
    "challenge" : "Challenger, keep your hands above your head for two minutes. Spinner without touching them, make their hands fall. If they fall they forfeit!"
    },

    {
    "id" : "7",
    "challenge" : "Spinner, request a thumb battle with the challenger. Looser forfeits!"
    },

    {
    "id" : "8",
    "challenge" : "Challenger, you and the Spinner cannot talk untill the other breaks, looser forfeits!"
    },

    {
    "id" : "9",
    "challenge" : "Spinner, hold hands with the Challenger until someone breaks, looser forfeits!"
    },

    {
    "id" : "10",
    "challenge" : "Challenger, hum your favorite song to the Spinner, if they dont get it you forfeit!"
    },

    {
    "id" : "11",
    "challenge" : "Challenger, stand on one leg for two minutes. Spinner, without touching them, make them put their foot down. Looser forfeits!"
    },
    
    {
    "id" : "12",
    "challenge" : "Challenger, put your phone on the table. If you get any notifications for two minutes you forfeit!"
    },

    {
    "id" : "13",
    "challenge" : "Spinner, compare your phone battery with the Challengers. Lowest battery forfeits!"
    },
    
    {
    "id" : "14",
    "challenge" : "Spinner, offer to read the Challengers most recent Instant Message outloud. If they decline, they forfeit!"
    },

    {
    "id" : "15",
    "challenge" : "Challenger, pick someone to name your first pet. If they get it wrong you forfeit!"
    },

    {
    "id" : "16",
    "challenge" : "Challenger, hold your drink in the air for two minutes. Spinner, without touching them, make them spill their drink. Looser forfeits!"
    },

    {
    "id" : "17",
    "challenge" : "Spinner, ask the challenger to get you a drink. if they say no, they forfeit!"
    },

    {
    "id" : "18",
    "challenge" : "Challenger, place your hands palms down on the table. Spinner, try to make them lift their hands. Looser forfeits!"
    },

    {
    "id" : "19",
    "challenge" : "Challenger, resend your last Instant Messgae to someone else. Refuse and forfeit!"
    },

    {
    "id" : "20",
    "challenge" : "Challenger, give your drink to the Spinner. Refuse and forfeit!"
    },

    {
    "id" : "21",
    "challenge" : "Challenger, talk nonstop for 90 seconds. Fail and forfeit!"
    },

    {
    "id" : "22",
    "challenge" : "Spinner, compare your social media followers/friends with the Challenger, lowest forfeits!"
    },

    {
    "id" : "23",
    "challenge" : "Spinner, compare your hand size with the Challenger. Biggest hand forfeits!"
    },

    {
    "id" : "24",
    "challenge" : "Spinner, ask the Challenger to correctly name your drink. If they get it wrong, they forfeit!"
    },

    {
    "id" : "25",
    "challenge" : "Spinner, ask the Challenger the county you were born. If they get it wrong, they forfeit!"
    },

    {
    "id" : "26",
    "challenge" : "Challenger, correctly guess the shoe size of the Spinner. Get it wrong and forfeit!"
    },

    {
    "id" : "27",
    "challenge" : "Challenger, balance your phone on your forehead for 90 seconds. If it falls off, you forfeit!"
    },

    {
    "id" : "28",
    "challenge" : "Challenger, close your eyes and correctly guess the colour of the Spinners socks. Get it wrong and forfeit!"
    },

    {
    "id" : "29",
    "challenge" : "Spinner, ask the Challenger to correctly guess your favorite colour. If they get it wrong, they forfeit!"
    },

    {
    "id" : "30",
    "challenge" : "Challenger, you have 90 seconds to collect three things that are red. If you fail, you forfeit!"
    },

    {
    "id" : "31",
    "challenge" : "Challenger, you have 20 seconds to name every player. Fail and forfeit!"
    },

    {
    "id" : "31",
    "challenge" : "Challenger, Stand up for 3 minutes. Sit down and forfeit!"
    },

    {
    "id" : "32",
    "challenge" : "Spinner, tell the Challenger what you think their spy name would be, if they laugh they forfeit!"
    },

    {
    "id" : "33",
    "challenge" : "Challenger, show your bank balance to all players or forfeit!"
    },

    {
    "id" : "34",
    "challenge" : "Challenger, you have 90 seconds to find a rock or stone. Fail and forfeit!"
    },

    {
    "id" : "35",
    "challenge" : "Challenger, forfeit!"
    },

    {
    "id" : "36",
    "challenge" : "Spinner, choose a new drink for the Challenger. If they refuse they forfeit!"
    },

    {
    "id" : "37",
    "challenge" : "Challenger, stay completely still for 90 seconds. Fail and forfeit!"
    },

    {
    "id" : "38",
    "challenge" : "Challenger, take out your phone, close your eyes and type out the lyrics of your favorite song. If no can can guess the song you forfeit!"
    },

    {
    "id" : "39",
    "challenge" : "Challenger, do an impression of an actor or character. If no one can guess who it is you forfeit!"
    },

    {
    "id" : "39",
    "challenge" : "Spinner, do an impression of the Challenger. If they laugh they forfeit!"
    },

    {
    "id" : "40",
    "challenge" : "Challenger, no curse words for two minutes. Fail and forfeit!"
    },
];	

// ******** End of Data array ********


// Main app JS starts here...
// ******** APP ********

// Get references to DOM elements
let btn = document.getElementById("btnGo");
let arrow = document.getElementById("arrow");

// Question var
let task = "";

let wheelCounter = 0;

// Last poisiton of arrow
let lastSpin = "";

// get pop-up element
let popUp = document.getElementById("pop-up");
// spin btn
let spinBtn = document.getElementById("btn");



// Refresh Btn/Remove popUp
function refreshBtn()
{
    // Remove pop up
    popUp.classList.add("hidden");

    // Show Spin Btn
    spinBtn.classList.remove("hidden");
}

// Reveal popUp
function displayChallange()
{
    // Add Pop Up
    popUp.classList.remove("hidden");

}

// Spin the arrow
function startAnimation()
{ 
    // Hide Spin Btn
    spinBtn.classList.add("hidden");
	
    wheelCounter++;

    lastSpin = lastSpin + 1000 + Math.floor(Math.random() * 361);

    // For testing:
    console.clear()
    console.log("wheel spun: " + wheelCounter)

    // check to see how many times the wheel has been spun
    // bugs out after about 5 times
    if(wheelCounter > 5)
    {
        // Reset values and run again - prevents bugs
        lastSpin = 0;
        wheelCounter = 0;
        startAnimation();
    } 
    else
    {
        // Move the arrow business as usual
        arrow.style.transform = "rotate(" + lastSpin + "deg)";
    }

    // Get Question from data array
    let task = data[Math.floor(Math.random()*data.length)];
    // Add question to pop up window
    document.getElementById("challange").innerHTML = task.challenge;

    // Set timer for popUp
    setTimeout(displayChallange, 4000);

}





