$(function() {
	$("#change").click(function() {
		if ($('#shape').hasClass('ring')) {
			$('#shape').removeClass('ring').addClass('cube');
		} else {
			$('#shape').removeClass('cube').addClass('ring');
		}

		if ($('#stage').hasClass('ring')) {
			$('#stage').css("webkitTransform", 'translateZ(-200px)');
		} else {
			$('#stage').css("webkitTransform", '');
		}
	});
});

/*function toggleShape() {
 var shape = document.getElementById('shape');
 if (hasClassName(shape, 'ring')) {
 removeClassName(shape, 'ring');
 addClassName(shape, 'cube');
 } else {
 removeClassName(shape, 'cube');
 addClassName(shape, 'ring');
 }

 var stage = document.getElementById('stage');
 if (hasClassName(shape, 'ring'))
 stage.style.webkitTransform = 'translateZ(-200px)';
 else
 stage.style.webkitTransform = '';
 }

 function hasClassName(inElement, inClassName) {
 var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
 return regExp.test(inElement.className);
 }

 function addClassName(inElement, inClassName) {
 if (!hasClassName(inElement, inClassName))
 inElement.className = [inElement.className, inClassName].join(' ');
 }

 function removeClassName(inElement, inClassName) {
 if (hasClassName(inElement, inClassName)) {
 var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
 var curClasses = inElement.className;
 inElement.className = curClasses.replace(regExp, ' ');
 }
 }

 function toggleClassName(inElement, inClassName) {
 if (hasClassName(inElement, inClassName))
 removeClassName(inElement, inClassName);
 else
 addClassName(inElement, inClassName);
 }*/