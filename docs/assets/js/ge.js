// collapsible
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

// function to get next GE start date, parameter is known previous GE start date
function nextGEDate (dtmStart) {

	//get next start date
	var dtmStartNext = new Date(dtmStart);
	dtmStartNext.setDate(dtmStart.getUTCDate() + 168);
	var dtmEndNext = new Date(dtmStart);
	dtmEndNext.setDate(dtmStart.getUTCDate() + 175);

	//compare next end date to today and if today > end date, call recursive
	var dtmNOW = new Date();
	var dtmBOD = new Date(dtmNOW.setUTCHours(0,0,0,0));
	if (dtmBOD > dtmEndNext) {
		return nextGEDate(dtmStartNext);
	} else {
		return dtmStartNext;
	};
}

// Process dates in all .ge-next
var geNexts = document.querySelectorAll(".ge-next");
geNexts.forEach((element) => {
	var strGEStart = element.childNodes[2].innerHTML;
	var dtmGEStart = new Date(strGEStart);
	var dtmGEEnd = new Date(dtmGEStart);
	dtmGEEnd.setDate(dtmGEStart.getUTCDate() + 7);
	var dtmNOW = new Date();
	var dtmBOD = new Date(dtmNOW.setUTCHours(0,0,0,0));
	if (dtmBOD > dtmGEEnd) {
		var dtmGEStartNext = nextGEDate(dtmGEStart);
		const strGEStartNext = dtmGEStartNext.toLocaleString('en-US', { month: 'short' }) + " " + dtmGEStartNext.getDate() + ", " + dtmGEStartNext.getFullYear();
		var dtmGEEndNext = new Date(dtmGEStartNext);
		dtmGEEndNext.setDate(dtmGEStartNext.getUTCDate() + 7);
		const strGEEndNext = dtmGEEndNext.toLocaleString('en-US', { month: 'short' }) + " " + dtmGEEndNext.getDate() + ", " + dtmGEEndNext.getFullYear();
		element.childNodes[2].innerHTML = strGEStartNext;
		element.childNodes[4].innerHTML = strGEEndNext;
		element.childNodes[6].innerHTML = "(projected)";
	} else if (dtmBOD >= dtmGEStart && dtmBOD <= dtmGEEnd) {
		element.childNodes[0].innerHTML = "Now: ";
		element.attributes.class =  element.classList.add("ge-now");
	} else {
		//GE is in the future, nothing to do
	};

})
