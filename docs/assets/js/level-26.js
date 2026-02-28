// Timestamp and countdown calculation
function getTimeZoneDisplayName(zoneNameFormat = "short") {
	let formatter = new Intl.DateTimeFormat(undefined, {
		timeZoneName: zoneNameFormat
	});
	return formatter.formatToParts(Date.now())
		.find(part => part.type === "timeZoneName")['value'];
}

var dtmUTC = new Date("3/7/2026 0:00:00 UTC");
var msUTC = dtmUTC.getTime();
var strCDLoc = 'arcount'
countDownOut(msUTC, strCDLoc);
var dtmUTCOut = '' + dtmUTC.getUTCFullYear() + '-' + ('0' + (dtmUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTC.getUTCDate()).slice(-2) + ' ' + dtmUTC.getUTCHours() + ':' + ('0' + dtmUTC.getUTCMinutes()).slice(-2) + ' UTC'
var strUTZOut = '' + dtmUTC.getFullYear() + '-' + ('0' + (dtmUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTC.getDate()).slice(-2) + ' ' + dtmUTC.getHours() + ':' + ('0' + dtmUTC.getMinutes()).slice(-2) + ' UTC' + dtmUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('arstamp').innerHTML = dtmUTCOut + ' / ' + strUTZOut;

// Function that updates the countdown
function countDownOut (toDate, toElement) {
	// Update the count down every 1 second
	var x = setInterval(
		function() {

			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = toDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Output the result in an element with id="dacount"
			document.getElementById(toElement).innerHTML = 'Restock will occur in ' + days + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById(toElement).innerHTML = "Information update in progress";
			}
		}
	, 1000);

}

