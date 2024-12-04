function overrideCourseListPage() {
	const body = document.getElementById("content_body");

	// Reorganize the page to hide the giant list of things under dropdowns using <details>

	let curr = body.firstChild;
	let details = null;
	while (curr != null && curr.nodeName != "H3") {
		// Find the first heading
		curr = curr.nextSibling;
	}
	while (curr != null) {
		const next = curr.nextSibling;
		if (curr.nodeName == "H3") {
			// New heading, need to create new <details> to put stuff under
			details = document.createElement("details");
			curr.insertAdjacentElement("beforebegin", details);

			// Make the heading the thing in the <summary> so it still shows up even if closed
			const summary = document.createElement("summary");
			summary.appendChild(curr);
			details.appendChild(summary);
			summary.classList.add("bbsummary");
		} else {
			// Put the element in the <details>
			details.appendChild(curr);
		}
		curr = next;
	}
}
