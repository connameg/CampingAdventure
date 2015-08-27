var adventure = "";
var winLose = "";

var bear = prompt("It is night. You are camping alone in the woods when you hear something rustle in the bushes. You step outside your tent to see a HUGE, HUNGRY BEAR approaching your campsite. What do you do? RUN, FIGHT, or APPROACH it?").toUpperCase();

switch (bear) {
   case 'RUN':
       var shoes = prompt("You decide to run for it. Do you take time to put on shoes? YES or NO?").toUpperCase();
       var flashlight = prompt("Do you grab a flashlight? YES or NO?").toUpperCase();
       if (shoes === "YES" && flashlight === "YES") {
           adventure += "You decide to run. You quickly tie your shoes and grab your trusty flashlight. Good thing you did, because the woods are dark and full of rocks and prickly plants. The bear gains on you, but you narrowly escape to civilization.";
           winLose += "you win!".toUpperCase();
       } else if (shoes === "YES" && flashlight === "NO") {
           adventure += "You put on your shoes and run for it. Without a flashlight, you become hopelessly lost in the woods. So lost, in fact, that even the bear can not find you. You survive the night and find your way back to your campsite in the morning.";
           winLose += "you win!".toUpperCase();
       } else if (shoes === "NO" && flashlight === "YES") {
           adventure += "You decide to run. You navigate quickly through the woods thanks to your flashlight, but your feet aren't so lucky. You'll be feeling those blisters for days. OUCH!";
           winLose += "you win!".toUpperCase();
       } else {
           adventure += "You try to fumble your way through the woods, but in the dark, hazardous woods, you are at a huge disadvantage. You trip and fall as the bear catches up. You are helpless and immobilized as the bear attacks. You make a delicious midnight snack.";
           winLose += "you lose!".toUpperCase();
       }
        break;
    case 'FIGHT':
        var weapon = prompt("Do you have a weapon? YES or NO?").toUpperCase();
        var strong= prompt("Are you strong? YES or NO?").toUpperCase();
        if (weapon === "YES" && strong === "YES") {
            adventure += "The bear is no match for your strength and dexterity. You take it out with a single blow!";
            winLose += "you win!".toUpperCase();
        } else if (weapon === "YES" && strong === "NO") {
            adventure += "You wield your weapon and nervously rush at the bear. Thankfully the bear isn't very brave. It just runs away. You ultimately prevail, but you don't get a wink of sleep. Who knows if it wil return...?";
            winLose += "you win...?".toUpperCase();
        } else if (weapon === "NO" && strong === "YES") {
            adventure += "Weapons? HA! Who needs weapons when you have FISTS OF STEEL? With a passionate battle cry, you go in for the kill. A battle of epic proportions ensues... and you emerge as the victor. You now have an legendary story and bragging rights for life.";
            winLose += "you win!".toUpperCase();
        } else {
            adventure += "...You don't stand a chance. You flail your weak little arms at the bear. It's not even enough to leave a scratch. The bear takes pity on you and walks off in a fit of laughter. You survive, so congrats, I guess.";
            winLose += "you win...?".toUpperCase();
        }
        break;
    case 'APPROACH':
        var yell = prompt("You're not really the fighting type, and you're too slow to get away. Maybe you can reason with it. Do you YELL or try to TALK?").toUpperCase();
        var food = prompt("Do you offer it any food? YES or NO?").toUpperCase();
        if (yell === "YELL" && food === "YES") {
            adventure += "You yell obscenities and throw food at the bear. It takes the bait, but doesn't turn it's hungry gaze away from you. The snack is good enough... for now. Who knew bears liked granola? Thankfully bears aren't good at opening wrappers, so you have plenty of time to get away.";
            winLose += "you win!".toUpperCase();
        } else if (yell === "YELL" && food === "NO") {
            adventure += "You scream at the top of your lungs, trying to scare the bear away. The bear is not impressed. It's too bad you didn't toss it some food. It decides to make a meal out of you instead.";
            winLose += "you lose!".toUpperCase();
        } else if (yell === "TALK" && food === "YES") {
            adventure += "You invite the bear to share a meal by the campfire. Turns out he's quite the gentleman. Not only is your life spared, but you've also made a new friend. As you prepare to leave the next morning, the bear welcomes you back to the woods any time. No need to worry about bear attacks anymore; he's got your back.";
            winLose += "you win!".toUpperCase();
        } else /*TALK AND NO FOOD*/{
            adventure += "You try to talk the bear out of its hunger-induced rage. It raids your campsite and takes all your food. Fortunately, you have enough food to satisfy it. It leaves you alone, for now...";
            winLose += "you win...?".toUpperCase();
        }
        break;
    default:
        adventure += "You what now? Better make up your mind soon. Bears don't like waiting. Please enter only RUN, FIGHT, or APPROACH. Refresh the page to choose again.";
}

var outcome = document.getElementById('choices');
outcome.textContent = adventure;

var passFail = document.getElementById('victory');
passFail.textContent = winLose;



//version 1.0 by C.A. AMEGBLETOR
//conncodes.tumblr.com

//update notes:
//THESE LAST LINES TRY TO INCORPORATE THE SCRIPT WITH HTML... UNSUCCESSFULLY.
//I REPLACED ALL CONSOLE.LOGS WITH adventure +=S... NO LUCK
//the prompt won't even appear when I load the page
//maybe put these all in script tage (annoying)
//or put the prompt in script tags?

//EDIT 8-17-15 I DID IT. I got the HTML and js to work together
//I changed all the outcomes to adventure +=
//next step is to make it look nice with css
//also find a better way to ask for user input. Buttons, maybe?
//also, maybe add more options to make the game longer? 
//or make a new game that's more open-ended later on.

//EDIT 8-21-15
//added CSS styling
//maybe change color scheme to make it darker
//since the adventure takes place at night
