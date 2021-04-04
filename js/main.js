(()=> {
	console.log('js is linked up');
})();

const dragImages = document.querySelectorAll(".draggable"),
	dropArea = document.querySelector(".dropZone"),
	dragArea = document.querySelector(".dragArea");

	
	//----functions----//

function dragStart(event) {
	console.log('You Dragged an Image');
	event.dataTransfer.setData("savedID", this.id);
}

function draggedOver(event) {
	event.preventDefault();
	console.log('Dragged Over');
}

function dropped(event) {
	console.log('youve been dropped son');
	

	let targetID = eventdataTransfer.getData("savedID"),
	audioPlay = document.querySelector(`audio[data-value="${targetID}]`);


	if (this.childNodes.length > 0) { return; }
	console.log("yo stop draggin me around:", targetID, "!");
	this.appendChild(document.querySelector(`#${targetID}`));


	if (!audioPlay) { return; }
	audioPlay.currentTime = 0
	audioPlay.play(),
	audioPlay.volume = 0.2;
	}

	//----event handling----//

	document.addEventListener('dragstart' , (e) => {
		e.target.style.border = '2px dashed blue';
	}, false);

	document.addEventListener('dragend', (e) => {
		e.target.style.border = 'none';
	}, false);

	dragImages.forEach(piece => piece.addEventListener('dragstart', dragStart));
	
	dropArea.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})



