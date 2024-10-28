/**
 * Gets the value of a cookie.
 * @param {*} name The name of the cookie.
 * @returns {{value: string, expires: Date?}?} The value of the string, or null if it does not exist.
 */
function getCookie(name) {
	name = name + "=";
	let allCookies = decodeURIComponent(document.cookie).split(";");
	for (let i = 0; i < allCookies.length; i++) {
		let c = allCookies[i].trimStart();
		if (c.indexOf(name) == 0) {
			let value = c.substring(name.length, c.length);
			let expires = null;
			if (i + 1 < allCookies.length) {
				let expireKV = allCookies[i + 1].trimStart();
				if (expireKV.indexOf("expires=") == 0) {
					expires = new Date(expireKV.substring(expireKV.indexOf("expires=")));
				}
			}
			return {value: value, expires: expires};
		}
	}
	return null;
}

/**
 * Sets the information of a cookie
 * @param {string} name The name of the cookie
 * @param {string} value The value you are setting the cookie to. Preferably should be a string.
 * @param {Date?} expireDate A Date object representing when the cookie should expire. Optional.
 */
function setCookie(name, value, expireDate=null) {
	let expires = expireDate != null ? ";expires=" + expireDate.toUTCString() : ";";
	document.cookie = name + "=" + value.toString() + expires + ";path=/";
}

function deleteCookie(name) {
	setCookie(name, "");
}
