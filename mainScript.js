if(document.location.href=="https://www.twitch.tv/"){
	if(localStorage.getItem("twilight.theme")!="1"){			// if dark theme isn't enabled then
		localStorage.setItem("twilight.theme", "1");			// enable it
		document.location.reload();					// reload page
	}
}

if(document.location.href=="https://www.youtube.com/"){
	if(localStorage.getItem("ok")!=1){						// if the cookie ok does not exist then
		document.addEventListener("afterscriptexecute",(event) => {		// wait for script generated pages to load (the one that ask to connect)
			localStorage.setItem("ok", "1");				// put the cookie that avoid constant reloading
			document.cookie = "PREF=f6=400;domain=.youtube.com";		// put/set the cookie that enable dark theme
			document.location.reload();					// reload
		});
	}
}
