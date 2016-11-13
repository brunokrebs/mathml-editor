var mathmlEditor = (function() {

	var formula = '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">' +
	'<mi id="myX">x</mi> <mo>=</mo>' +
	'<mrow>' +
	'<mfrac>' +
	'<mrow>' +
	'<mo>-</mo>' +
	'<mi>12312312123123</mi>' +
	'<mo>±</mo>' +
	'<msqrt>' +
	'<msup><mi>b</mi><mn>2</mn></msup>' +
	'<mo>-</mo>' +
	'<mn>4</mn><mi>a</mi><mi>c</mi>' +
	'</msqrt>' +
	'</mrow>' +
	'<mrow> <mn>2</mn><mi>a</mi> </mrow>' +
	'</mfrac>' +
	'</mrow>' +
	'<mtext>.</mtext>' +
	'</math>';

	function init(elementId) {
		var formulaContainer = document.getElementById(elementId);
		formulaContainer.style.width = '100%';
		formulaContainer.style.padding = '10px';
		formulaContainer.style.backgroundColor = 'lightgray';

		var formulaElement = document.createElement('div');
		formulaElement.id = 'formula';
		formulaElement.innerHTML = formula;

		formulaContainer.appendChild(formulaElement);
	}
	
	return {
		init: init
	}
})();