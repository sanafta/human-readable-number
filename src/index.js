module.exports = function toReadable(number) {
	if (number > 0 && number < 1000) {
		const hundreds = Math.floor(number / 100),
			dozens = Math.floor((number - (hundreds * 100)) / 10),
			units = number - (hundreds * 100) - (dozens * 10),
			unitsArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
			teensArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
			dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

		const string = `${hundreds > 0 ? unitsArr[hundreds - 1] + ' hundred ' : ''}${dozens > 1 ? dozensArr[dozens - 2] : dozens == 1 ? teensArr[units] : ''}${units > 0 && dozens != 1 ? ' ' + unitsArr[units - 1] : ''}`.trim();

		return string.replace(/  /, ' ');
	} else {
		return 'zero';
	}
}
