/**
 * 
 */

function anagramStringChecker(str1, str2) {
	var isAnagram = true;
	for (var i = 0; i < str1.length; i++) {
		if (str1.length !== str2.length
				|| str1.split("").sort()[i] != str2.split("").sort()[i]) {
			isAnagram = false;
		}
	}
	return isAnagram;

}

var isAnagram = anagramStringChecker("aabb", "abab");
if (isAnagram) {
	console.log("The provided strings are Anagram!");
} else {
	console.log("The provided strings are not Anagram!");
}
