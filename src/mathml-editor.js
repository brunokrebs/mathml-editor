var mathmlEditor = (function() {

	function init(elementId) {
		var element = document.getElementById(elementId);
		element.style.width = '100%';
		element.style.height = '30px';
		element.style.backgroundColor = 'blue';
	}
	
	return {
		init: init
	}
})();