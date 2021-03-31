desiredLocation = "https://wheelofnames.com/#";
wheelSettings = {
	    title: "Who will run standup?",
	    names: [
		    "Name 1",
		    "Name 2",
		    "Name 3"
	    ],
	    colorSettings: [
		            { color: "#3369E8", enabled: true },
		            { color: "#D50F25", enabled: true },
		            { color: "#EEB211", enabled: true },
		            { color: "#009925", enabled: true },
		            { color: "#000000", enabled: false },
		            { color: "#000000", enabled: false },
		        ],
	    pageBackgroundColor: "#FFFFFF",
	    pictureType: "none",
	    galleryPicture: "images/none.png",
	    customPictureName: "",
	    customPictureDataUri: "",
	    allowDuplicates: true,
	    duringSpinSound: "ticking-sound",
	    afterSpinSound: "applause-sound-soft",
	    maxNames: 500,
	    spinTime: 5,
	    launchConfetti: false,
	    animateWinner: false,
	    autoRemoveWinner: true,
	    displayWinnerDialog: true,
	    displayRemoveButton: true,
	    winnerMessage: "Standup Conductor!",
	    playClickWhenWinnerRemoved: false,
	    hubSize: "XS",
	    slowSpin: false,
	    displayHat: true,
};
if (location.href != desiredLocation) location = desiredLocation;
else if(location.href.includes('new-tab')) location = desiredLocation;
else {
	    if (document.readyState === "complete") {
		            let localStorage = window.localStorage;
		            let lastWheelConfig = JSON.parse(localStorage.getItem('LastWheelConfig'));
		            let preferences = JSON.parse(localStorage.getItem('Preferences'));
		            hasBeenConfiguredPreviously = Boolean(localStorage.getItem('ConfiguredForStandup'));
		            lastWheelConfig = hasBeenConfiguredPreviously ? lastWheelConfig.names.length <= 1 ? wheelSettings : lastWheelConfig : wheelSettings;
		            preferences.darkMode = true;
		            localStorage.setItem('ConfiguredForStandup', true);
		            localStorage.setItem('LastWheelConfig', JSON.stringify(lastWheelConfig));
		            localStorage.setItem('Preferences', JSON.stringify(preferences));
		            location.reload();
		        }
}

