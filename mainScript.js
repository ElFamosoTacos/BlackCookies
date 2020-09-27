if(document.location.href=="https://www.twitch.tv/"){
	if(localStorage.getItem("twilight.theme")!="1"){	// if not dark theme then
			localStorage.setItem("twilight.theme", "1");	// set it to be dark theme
			document.location.reload();						// reload
	}
}

if(document.location.href=="https://www.youtube.com/"){
	if(localStorage.getItem("ok")!=1){									// if the cookie ok does not exist then
		document.addEventListener("afterscriptexecute",(event) => {		// wait for script generated pages to load (the one that ask to connect)
			localStorage.setItem("ok", "1");							// put the cookie that avoid constant reloading
			document.cookie = "PREF=f6=400;domain=.youtube.com";		// put/set the cookie that enable dark theme
			document.location.reload();									// reload
		});
	}
}