// collapsible
var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

// Calculate date to determine which bundle is the Item of the Day
var varBEGutc = new Date("2026-02-18");
var dtmNOWutc = new Date();
var dtmBODutc = new Date(dtmNOWutc.setUTCHours(0,0,0,0));

var intIOTD = (((dtmBODutc - varBEGutc)/(1000*60*60*24)) % 18);
var strIOTD = ("0" + intIOTD).slice(-2);
var dtmNXTutc = new Date(dtmBODutc.setDate(dtmBODutc.getDate() + 1));
var msUTC = dtmNXTutc.getTime();

// Copy the bundle html to #iotd
var strIOTDhdr = '<div class="premium-gallery" id="i-' + strIOTD + '">';
var strIOTDhtml = document.getElementById('i-' + strIOTD).innerHTML;
var strIOTDftr = '</div><div class="gallery-footer"><h2><span id="prem-countdown">&nbsp;</span></h2><p id="prem-next-p">at <span id="prem-next-date">&nbsp;</span></p></div>';
document.getElementById('iotd').innerHTML = strIOTDhdr + strIOTDhtml + strIOTDftr;

// Timestamp and countdown calculation
function getTimeZoneDisplayName(zoneNameFormat = "short") {
	let formatter = new Intl.DateTimeFormat(undefined, {
		timeZoneName: zoneNameFormat
	});
	return formatter.formatToParts(Date.now())
		.find(part => part.type === "timeZoneName")['value'];
}

var strCDLoc = 'prem-countdown';
countDownOut(msUTC, strCDLoc);
var dtmUTCOut = '' + dtmNXTutc.getUTCFullYear() + '-' + ('0' + (dtmNXTutc.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + dtmNXTutc.getUTCDate()).slice(-2) + ' ' + dtmNXTutc.getUTCHours() + ':' + ('0' + dtmNXTutc.getUTCMinutes()).slice(-2) + ' UTC'
var strUTZOut = '' + dtmNXTutc.getFullYear() + '-' + ('0' + (dtmNXTutc.getMonth() + 1)).slice(-2) + '-' + ('0' + dtmNXTutc.getDate()).slice(-2) + ' ' + dtmNXTutc.getHours() + ':' + ('0' + dtmNXTutc.getMinutes()).slice(-2) + ' UTC' + dtmNXTutc.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('prem-next-date').innerHTML = dtmUTCOut + ' / ' + strUTZOut;

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
			document.getElementById(toElement).innerHTML = 'Deal ends in ' + days + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById(toElement).innerHTML = "Information update in progress";
			}
		}
	, 1000);
}
