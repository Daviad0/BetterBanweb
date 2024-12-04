/**
 * Functionality for overriding the course list pages:
 * - https://www.banweb.mtu.edu/pls/owa/stu_ctg_utils.p_online_all_courses_ug
 * - https://www.banweb.mtu.edu/pls/owa/stu_ctg_utils.p_online_all_courses_gr
 */
function overrideCourseListPage() {
	const contentBody = document.getElementById("content_body");

	// Reorganize the page to hide the giant list of things under dropdowns using <details>

	let curr = contentBody.firstChild;

	// Navigate to where we need to start from
	while (curr != null && curr.nodeName != "A") {
		curr = curr.nextSibling;
	}

	// Start changing stuff
	let details = null;
	let lastHref = "";
	while (curr != null) {
		const next = curr.nextSibling;
		if (curr.nodeName == "H3") {
			// New heading, need to create new <details> to put stuff under
			details = document.createElement("details");
			details.setAttribute("id", lastHref);
			curr.insertAdjacentElement("beforebegin", details);

			// Make the heading the thing in the <summary> so it still shows up even if closed
			const summary = document.createElement("summary");
			summary.appendChild(curr);
			details.appendChild(summary);
			summary.classList.add("bbsummary");
		} else if (curr.nodeName == "A") {
			lastHref = curr.getAttribute("name");
			curr.remove();
		} else if (curr.nodeName != "HR" && details != null) {
			// Put the element in the <details> unless it is a <hr>
			details.appendChild(curr);
		}
		curr = next;
	}

	// Add a padding below
	const padDiv = document.createElement("div");
	padDiv.style.marginBottom = "1rem";
	contentBody.appendChild(padDiv);

	// Auto-open the corresponding details when browser URL points to it
	window.addEventListener("hashchange", CLOjumpToElement);
	CLOjumpToElement();
}

/**
 * If the hash is set in the URL and it points to one of our <details> we made, open it
 */
function CLOjumpToElement() {
	let hash = window.location.hash;
	if (hash.startsWith("#")) hash = window.location.hash.substring(1);
	
	/** @type {HTMLDetailsElement | null} */
	const focus = document.getElementById(hash);
	if (focus != null && focus.nodeName == "DETAILS") {
		focus.open = true;
	}
}
