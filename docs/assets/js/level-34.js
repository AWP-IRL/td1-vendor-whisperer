var coll = document.getElementsByClassName("collapsible");
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

// Timestamp and countdown calculation
function getTimeZoneDisplayName(zoneNameFormat = "short") {
	let formatter = new Intl.DateTimeFormat(undefined, {
		timeZoneName: zoneNameFormat
	});
	return formatter.formatToParts(Date.now())
		.find(part => part.type === "timeZoneName")['value'];
}

var strUTC = document.getElementById('34stamp').innerHTML;
var dtmUTC = new Date(strUTC);
var msUTC = dtmUTC.getTime();
var strCDLoc = '34count';
countDownOut(msUTC, strCDLoc);
var dtmUTCOut = '' + dtmUTC.getUTCFullYear() + '-' + ('0' + (dtmUTC.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTC.getUTCDate()).slice(-2) + ' ' + dtmUTC.getUTCHours() + ':' + ('0' + dtmUTC.getUTCMinutes()).slice(-2) + ' UTC'
var strUTZOut = '' + dtmUTC.getFullYear() + '-' + ('0' + (dtmUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + dtmUTC.getDate()).slice(-2) + ' ' + dtmUTC.getHours() + ':' + ('0' + dtmUTC.getMinutes()).slice(-2) + ' UTC' + dtmUTC.getTimezoneOffset() / -60 + ' (' + getTimeZoneDisplayName('short') + ')';
document.getElementById('34stamp').innerHTML = dtmUTCOut + ' / ' + strUTZOut;

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

// TOGGLETIPS
(function() {
  // Get all the toggletip buttons
  var toggletipTexts = document.querySelectorAll('[data-toggletip]');

  // Iterate over them
  Array.prototype.forEach.call(toggletipTexts, function(toggletipText) {
    // Create the container element
    var container = document.createElement('span');
    container.setAttribute('class', 'toggletip-container');
    
    // Put it before the original element in the DOM
    toggletipText.parentNode.insertBefore(container, toggletipText);
    
    // Create the button element
    var toggletip = document.createElement('button');
    toggletip.setAttribute('class', 'button-info');
    toggletip.setAttribute('type', 'button');
    toggletip.setAttribute('aria-label', 'more info');
    toggletip.setAttribute('data-toggletip-content', toggletipText.textContent);
    toggletip.textContent = 'i';
    
    // Place the button element in the container
    container.appendChild(toggletip);
    
    // Create the live region
    var liveRegion = document.createElement('span');
    liveRegion.setAttribute('role', 'status');
    
    // Place the live region in the container
    container.appendChild(liveRegion);
    
    // Remove the original element
    toggletipText.parentNode.removeChild(toggletipText);
    
    // Build `data-tooltip-content` 
    var message = toggletip.getAttribute('data-toggletip-content');
    toggletip.setAttribute('data-toggletip-content', message);
    toggletip.removeAttribute('title');
    
    // Get the message from the data-content element
    var message = toggletip.getAttribute('data-toggletip-content').replace('%0D%0A', '<br>');
	var message = message.replace('%0D%0A%0D%0A', '<br><br>');
	
    // Get the live region element
    var liveRegion = toggletip.nextElementSibling;

    // Toggle the message
    toggletip.addEventListener('click', function() {
        liveRegion.innerHTML = '';
        window.setTimeout(function() {
          liveRegion.innerHTML = '<div class="toggletip-bubble">'+ message +'</div>';
        }, 100);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (toggletip !== e.target) {
        liveRegion.innerHTML = '';
      }                        
    });

    // Remove toggletip on ESC
    toggletip.addEventListener('keydown', function(e) {
      if ((e.keyCode || e.which) === 27)
      liveRegion.innerHTML = '';
    });
    
    // Remove on blur
    toggletip.addEventListener('blur', function (e) {
      liveRegion.innerHTML = '';
    });
  });
}());