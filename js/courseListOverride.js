function overrideCourseListPage() {
	const body = document.getElementById("content_body");

	let cur = body.firstChild;
	let det = null;
	while (cur != null && cur.nodeName != "H3") {
		cur = cur.nextSibling;
	}
	while (cur != null) {
		const next = cur.nextSibling;
		if (cur.nodeName == "H3") {
			det = document.createElement("details");
			cur.insertAdjacentElement("beforebegin", det);
			const summ = document.createElement("summary");
			summ.appendChild(cur);
			det.appendChild(summ);
			summ.classList.add("bbsummary");
		} else {
			det.appendChild(cur);
		}
		cur = next;
	}
}