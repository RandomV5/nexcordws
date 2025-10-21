(function() {
    var messages = [
        "Hi, welcome to the Nexcord bot site!",
        "Fries, my beloved ❤️.",
        "Loading bot info... about 6...7 percent (yeah im corny)??!",
        "Did you know? Nexcord can track if you're AFK and also add lore or info based on your texts",
        "Why are you still here? Go add Nexcord to your server!",
        "i still dont know what to put here",
        "fun fact: i thought about making the bots pfp mine but it seemed boring",
        "check out the header then come back here",
        "beta 4ever",
        "buy me a soda,and fries pls im starving",
        "pls stop checking here go back to the main site",
        "im gonna give you a kiss",
        "this is so niche",
        "monday left me broken",
        "i like fries",
        "why are you still reading these messages",
        "i like fries a lot",
        "fries",
        "did i mention i like fries",
        "fries fries fries",
        "fries are life",
        "life is better with fries",
        "fries > everything else",
        "if you dont like fries we cant be friends",
        "fries are the answer to everything",
        "im gonna vent here atpm",
        "i didnt confess to my crush yet, she went to another school :( which caused me to become aroace",
        "bye line before this which is line 29 had an error",
        "whats 9 + 10?",
        "im getting tired of writing these messages",
        "idk why i like fries so much",
        "i wonder if anyone will read all these messages",
        "as of now, there are like over 40 messages here",
        "im using the vscode auto write feature to write these messages",
        "fries are good with ketchup",
        "fries are good with mayo",
        "fries are good with cheese",
        "fries are good with gravy",
        "fries are good with everything",
        "if you dont like fries, what do you like?",
        "i also like crawfish but i dont like how its only in season for a bit",
        "chicken nuggets are good too",
        "i like food a lot",
        "food is life",
        "im hungry now",
        "brb getting fries",
        "my neck is hurting trying to think to keep my head up",
        "did you know, i have asthma?",
        "i should probably stop writing messages now",
        "this is taking longer than i thought",
        "fries are love fries are life",
        "fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries fries",
        "does this go on order",
        "should i upload more on my tiktok?",
        "i like fries",
        "okay im done now",
        " No",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Tomboys x Femboys might be compatible,wtf r u doing here",
        "where the fuck is there an error",
        "i had to go back and correct these comments",
        "i should vent here",
        "did you know? The logo was made in like less than 10 minutes",
        "this is random,like my user, i was not aware of this so you're reading the storyline incorrectly",
        "im very unserious in coding.",
        "the javascript was only written cause i wanted to make these popup in console",
        "btw, im supposed to be doing hw",
        "idk why but in the extension im coding this in, it keeps putting some comparing thing to big websites"
    ];

    function randomMsg() {
        var index = Math.floor(Math.random() * messages.length);
        console.log(messages[index]);
    }

    setInterval(randomMsg, 3000 + Math.random() * 5000);

    var header = document.querySelector("header");
    header.addEventListener("click", function() {
        console.log("Header clicked! Someone loves the bot romantically *wink*!");
        console.log("i like how you click me(how do i add a winky face in console log bro)");
        alert("Thanks for checking out Nexcord! See you using it soon! (cool easter egg, I get it)");
    });
})();
