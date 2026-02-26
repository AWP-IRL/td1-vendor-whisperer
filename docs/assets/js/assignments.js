//Returns formatted user time zone
function getTimeZoneDisplayName(zoneNameFormat = "short") {
	let formatter = new Intl.DateTimeFormat(undefined, {
		timeZoneName: zoneNameFormat
	});
	return formatter.formatToParts(Date.now())
		.find(part => part.type === "timeZoneName")['value'];
}

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
			document.getElementById(toElement).innerHTML = days + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				document.getElementById(toElement).innerHTML = "Information update in progress";
			}
		}
	, 1000);
}

//Calling the countdown function
//Daily Assignments
var tSUTC = new Date("2/27/2026 0:00:00 UTC");
var cDD1 = tSUTC.getTime();
var cDEl1 = 'dacount'
countDownOut(cDD1, cDEl1);
var tSUTCOut = '' + tSUTC.getUTCFullYear() + '-' + ('0' + (tSUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getUTCDate()).slice(-2) + ' ' + tSUTC.getUTCHours() + ':' + ('0' + tSUTC.getUTCMinutes()).slice(-2) + ' UTC'
var tSUTZ = '' + tSUTC.getFullYear() + '-' + ('0' + (tSUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getDate()).slice(-2) + ' ' + tSUTC.getHours() + ':' + ('0' + tSUTC.getMinutes()).slice(-2) + ' UTC' + tSUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('dastamp').innerHTML = tSUTCOut + ' / ' + tSUTZ;

//Weekly Assignments
var tSUTC = new Date("3/3/2026 0:00:00 UTC");
var cDD2 = tSUTC.getTime();
var cDEl2 = "wacount"
countDownOut(cDD2, cDEl2);
var tSUTCOut = '' + tSUTC.getUTCFullYear() + '-' + ('0' + (tSUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getUTCDate()).slice(-2) + ' ' + tSUTC.getUTCHours() + ':' + ('0' + tSUTC.getUTCMinutes()).slice(-2) + ' UTC'
var tSUTZ = '' + tSUTC.getFullYear() + '-' + ('0' + (tSUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getDate()).slice(-2) + ' ' + tSUTC.getHours() + ':' + ('0' + tSUTC.getMinutes()).slice(-2) + ' UTC' + tSUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('wastamp').innerHTML = tSUTCOut + ' / ' + tSUTZ;

//Daily Missions
var tSUTC = new Date("2/27/2026 0:00:00 UTC");
var cDD3 = tSUTC.getTime();
var cDEl3 = "dmcount"
countDownOut(cDD3, cDEl3);
var tSUTCOut = '' + tSUTC.getUTCFullYear() + '-' + ('0' + (tSUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getUTCDate()).slice(-2) + ' ' + tSUTC.getUTCHours() + ':' + ('0' + tSUTC.getUTCMinutes()).slice(-2) + ' UTC'
var tSUTZ = '' + tSUTC.getFullYear() + '-' + ('0' + (tSUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getDate()).slice(-2) + ' ' + tSUTC.getHours() + ':' + ('0' + tSUTC.getMinutes()).slice(-2) + ' UTC' + tSUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('dmstamp').innerHTML = tSUTCOut + ' / ' + tSUTZ;

//Weekly DZ
var tSUTC = new Date("3/1/2026 0:00:00 UTC");
var cDD7 = tSUTC.getTime();
var cDEl7 = "dzwcount"
countDownOut(cDD7, cDEl7);
var tSUTCOut = '' + tSUTC.getUTCFullYear() + '-' + ('0' + (tSUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getUTCDate()).slice(-2) + ' ' + tSUTC.getUTCHours() + ':' + ('0' + tSUTC.getUTCMinutes()).slice(-2) + ' UTC'
var tSUTZ = '' + tSUTC.getFullYear() + '-' + ('0' + (tSUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getDate()).slice(-2) + ' ' + tSUTC.getHours() + ':' + ('0' + tSUTC.getMinutes()).slice(-2) + ' UTC' + tSUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('dzwstamp').innerHTML = tSUTCOut + ' / ' + tSUTZ;

//Monthly DZ
var tSUTC = new Date("3/1/2026 0:00:00 UTC");
var cDD8 = tSUTC.getTime();
var cDEl8 = "dzmcount"
countDownOut(cDD8, cDEl8);
var tSUTCOut = '' + tSUTC.getUTCFullYear() + '-' + ('0' + (tSUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getUTCDate()).slice(-2) + ' ' + tSUTC.getUTCHours() + ':' + ('0' + tSUTC.getUTCMinutes()).slice(-2) + ' UTC'
var tSUTZ = '' + tSUTC.getFullYear() + '-' + ('0' + (tSUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + tSUTC.getDate()).slice(-2) + ' ' + tSUTC.getHours() + ':' + ('0' + tSUTC.getMinutes()).slice(-2) + ' UTC' + tSUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('dzmstamp').innerHTML = tSUTCOut + ' / ' + tSUTZ;

//Incursions and Legendary Missions
let cDEl4 = "legcount"
let dtmUTCc2 = new Date();
let intDWt2 = 6; //day of the week - target
let intDWc2 = dtmUTCc2.getUTCDay(); //day of the week - current
let intDist2; //distance from current to target
if (intDWc2 >= intDWt2) {
  intDist2 = 6 - intDWc2 + intDWt2;
} else {
  intDist2 = intDWt2 - intDWc2;
}

let dtmUTCn2 = dtmUTCc2;
dtmUTCn2.setDate(dtmUTCc2.getDate() + intDist2);
dtmUTCn2 = new Date(dtmUTCn2.setUTCHours(0,0,0,0));
countDownOut(dtmUTCn2, cDEl4);
let txtUTCn2 = '' + dtmUTCn2.getUTCFullYear() + '-' + ('0' + (dtmUTCn2.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTCn2.getUTCDate()).slice(-2) + ' ' + dtmUTCn2.getUTCHours() + ':' + ('0' + dtmUTCn2.getUTCMinutes()).slice(-2) + ' UTC'
let txtUTZn2 = '' + dtmUTCn2.getFullYear() + '-' + ('0' + (dtmUTCn2.getMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTCn2.getDate()).slice(-2) + ' ' + dtmUTCn2.getHours() + ':' + ('0' + dtmUTCn2.getMinutes()).slice(-2) + ' UTC' + dtmUTCn2.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('legstamp').innerHTML = txtUTCn2 + ' / ' + txtUTZn2;

//Weekly High Value Targets
let cDEl5 = "hvtcount"
let dtmUTCc1 = new Date();
let intDWt1 = 5; //day of the week - target
let intDWc1 = dtmUTCc1.getUTCDay(); //day of the week - current
let intDist1; //distance from current to target
if (intDWc1 >= intDWt1) {
  intDist1 = 6 - intDWc1 + intDWt1;
} else {
  intDist1 = intDWt1 - intDWc1;
}

let dtmUTCn1 = dtmUTCc1;
dtmUTCn1.setDate(dtmUTCc1.getDate() + intDist1);
dtmUTCn1 = new Date(dtmUTCn1.setUTCHours(0,0,0,0));
countDownOut(dtmUTCn1, cDEl5);
let txtUTCn1 = '' + dtmUTCn1.getUTCFullYear() + '-' + ('0' + (dtmUTCn1.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTCn1.getUTCDate()).slice(-2) + ' ' + dtmUTCn1.getUTCHours() + ':' + ('0' + dtmUTCn1.getUTCMinutes()).slice(-2) + ' UTC'
let txtUTZn1 = '' + dtmUTCn1.getFullYear() + '-' + ('0' + (dtmUTCn1.getMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTCn1.getDate()).slice(-2) + ' ' + dtmUTCn1.getHours() + ':' + ('0' + dtmUTCn1.getMinutes()).slice(-2) + ' UTC' + dtmUTCn1.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('hvtstamp').innerHTML = txtUTCn1 + ' / ' + txtUTZn1;

//Season pass supply drop date calculations
let dtmUTCc = new Date();
let intUTCYrc = dtmUTCc.getUTCFullYear();
let intUTCMoc = dtmUTCc.getUTCMonth();
let intUTCDyc = dtmUTCc.getUTCDate();
let intUTCYrn;
let intUTCMon;
let intUTCDyn;	

if (intUTCDyc >= 15) {
  if (intUTCMoc === 12) {
	  intUTCYrn = intUTCYrc + 1;
	  intUTCMon = 1;
  } else {
	  intUTCYrn = intUTCYrc;
	  intUTCMon = intUTCMoc + 1;
  }
  intUTCDyn = 1;		
} else {
  intUTCYrn = intUTCYrc;
  intUTCMon = intUTCMoc;
  intUTCDyn = 15;
}		
let dtmUTCn = new Date(new Date(dtmUTCc.setUTCFullYear(intUTCYrn, intUTCMon, intUTCDyn)).setUTCHours(0,0,0,0));
let txtUTCn = '' + dtmUTCn.getUTCFullYear() + '-' + ('0' + (dtmUTCn.getUTCMonth() + 1)).slice(-2) 
	  + '-' + ('0' + dtmUTCn.getUTCDate()).slice(-2) + ' ' + dtmUTCn.getUTCHours() + ':' 
	+ ('0' + dtmUTCn.getUTCMinutes()).slice(-2) + ' UTC'
let txtUTZn = '' + dtmUTCn.getFullYear() + '-' + ('0' + (dtmUTCn.getMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTCn.getDate()).slice(-2) + ' ' 
	+ dtmUTCn.getHours() + ':' + ('0' + dtmUTCn.getMinutes()).slice(-2) + ' UTC' + dtmUTCn.getTimezoneOffset() / -60 + ' (' 
	+ getTimeZoneDisplayName('short') + ')';

let cDEl6 = 'supcount';
countDownOut(dtmUTCn, cDEl6);
document.getElementById('supstamp').innerHTML = txtUTCn + ' / ' + txtUTZn;
