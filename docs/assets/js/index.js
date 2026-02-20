function getTimeZoneDisplayName(zoneNameFormat = "short") {
	let formatter = new Intl.DateTimeFormat(undefined, {
		timeZoneName: zoneNameFormat
	});
	return formatter.formatToParts(Date.now())
		.find(part => part.type === "timeZoneName")['value'];
}

var timestamp = document.getElementById('ge1stamp'), 
t = new Date(timestamp.innerHTML);
timestamp.innerHTML = "" + t.getFullYear() + '-' + ("0" + (t.getMonth() + 1)).slice(-2) + '-' + ("0" + t.getDate()).slice(-2) + ' ' + t.getHours() + ':' + ("0" + t.getMinutes()).slice(-2) + ' UTC' + t.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName("short") + ')';

var timestamp = document.getElementById('ge0stamp'), 
t = new Date(timestamp.innerHTML);
timestamp.innerHTML = "" + t.getFullYear() + '-' + ("0" + (t.getMonth() + 1)).slice(-2) + '-' + ("0" + t.getDate()).slice(-2) + ' ' + t.getHours() + ':' + ("0" + t.getMinutes()).slice(-2) + ' UTC' + t.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName("short") + ')';

// Set the date we're counting down to
var countDownDate = new Date("09/29/2025 8:00:00 UTC").getTime();

// Update the count down every 1 second
var x = setInterval(
	function() {

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="gecount"
		document.getElementById("gecount").innerHTML = 'Strike Global Event begins in ' + days + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

		// If the count down is over, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("gecount").innerHTML = "Strike Global Event has begun";
		}
	}
, 1000);

