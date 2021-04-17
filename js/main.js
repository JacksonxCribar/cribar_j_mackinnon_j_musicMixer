(()=> {
	console.log('JS is linked up');
})();

	const dragImages = document.querySelectorAll(".draggable"),
		leftDrop = document.querySelector(".dropL"),
		rightDrop = document.querySelector(".dropR"),
		dropZone = document.querySelectorAll ('.dropZone'),
		dragArea = document.querySelector(".dragArea");

	
	//----functions----//

function dragStart(event) {
	console.log('hey quit dragging me around');
	event.dataTransfer.setData("savedID", this.id);
}

function draggedOver(event) {
	event.preventDefault();
	console.log('please put me down');
}

function dropped(event) {
	console.log('thanks for putting me down, enjoy the tunes');
	

	let targetID = event.dataTransfer.getData("savedID"),
	audioPlay = document.querySelector(`audio[data-value="${targetID}"]`);


	if (this.childNodes.length > 0) { return; }
	console.log("Now playing:", targetID, "!");
	this.appendChild(document.querySelector(`#${targetID}`));


	if (!audioPlay) { return; }
	audioPlay.currentTime = 0;
	audioPlay.play();
	audioPlay.volume = 0.4;
	
	}



	//----event handling----//

	document.addEventListener('dragstart' , (e) => {
		e.target.style.border = '2px dashed blue';
	}, false);

	document.addEventListener('dragend', (e) => {
		e.target.style.border = 'none';
	}, false);

	dragImages.forEach(piece => piece.addEventListener('dragstart', dragStart));
	
	dropZone.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})










