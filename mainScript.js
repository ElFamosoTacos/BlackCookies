if(document.location.href=="https://www.twitch.tv/"){
	if(localStorage.getItem("twilight.theme")!="1"){		// If not dark theme then
			localStorage.setItem("twilight.theme", "1");	// Set it to be dark theme
			document.location.reload();						// Reload
	}
}
else
{
	if(localStorage.getItem("ok")!="1"){
		
		var listCookies = document.cookie.split(';');				// Get all the cookies
		
		if(listCookies.length > 5){										// If there is more than 5 cookies, it means that a user is logged and therefore there is no script generated popup
			document.cookie = "PREF=f6=400;domain=.youtube.com";		// Put/set the cookie that enable dark theme
			localStorage.setItem("ok", "1");							// Put the cookie that avoid constant reloading
			document.location.reload();									// Reload
		}
		else{
			document.addEventListener("afterscriptexecute",(event) => {		// Wait for script generated pages to load (the one that ask to connect)
				localStorage.setItem("ok", "1");							// Put the cookie that avoid constant reloading
				document.cookie = "PREF=f6=400;domain=.youtube.com";		// Put/set the cookie that enable dark theme
				document.location.reload();									// Reload
			});
		}
	}
}
