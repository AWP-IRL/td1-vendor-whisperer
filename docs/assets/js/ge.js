// Trigger a click on collapsible when a link visits it
var links = document.querySelectorAll('a')
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const linkHref = link.getAttribute('href')
    const targetCollapsible = document.querySelector(`${linkHref} .collapsible`)
    if (targetCollapsible && targetCollapsible.nextElementSibling) targetCollapsible.nextElementSibling.style.display = 'block'
  })
})

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
