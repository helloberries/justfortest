window.onload = function () {
	

	var result;

	// 显示结果
	var btn = document.getElementById('btn');
	var textarea = document.getElementById('textarea');
	btn.onclick = function () {
		var newText = document.createTextNode(result);
		textarea.appendChild(newText);
	};

	// 清除结果
	var clearbtn = document.getElementById('clearbtn');
	clearbtn.onclick = function () {
		if (textarea.childNodes.length) {
			var removeText = textarea.childNodes[0];
			textarea.removeChild(removeText);
		}
	};
};
