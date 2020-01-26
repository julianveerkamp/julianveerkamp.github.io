{ 
	"use strict" 
	function makeElement(s, type) {
		let form = document.getElementsByTagName("form")[0]
		let fs = document.querySelector("fieldset")
        
        if (type === "success") { 
        	fs.classList.toggle("fade_out")
        } 

        let p = document.createElement("p")
        let text = document.createTextNode(s)
        p.appendChild(text)
        p.classList.toggle(type)
        p.addEventListener("click", function(e){this.parentNode.removeChild(this)})

        form.appendChild(p)
	}

	function checkForm(el) {
		let name = document.getElementById("name").value
		let mail = document.getElementById("mail").value
		let message = document.getElementById("message").value
		if (name !== "" && mail !== "" && message!== "") {
			makeElement('Thank you, ' + name, "success")
		} else {
			makeElement('Something is missing', "failure")
		}
	}

	let fs = document.querySelector("fieldset")
	let submit = document.querySelector("[type=submit]")

	fs.addEventListener("webkitAnimationEnd", function(e){ fs.style.display = 'none'; }, false);
	submit.addEventListener("click", function(e){ checkForm(this); e.preventDefault(); }, false)
}