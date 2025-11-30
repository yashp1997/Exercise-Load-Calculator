function trainingLoad(weight, perct){
	let activeWeight = Math.round(weight * perct / 100);
	console.log(activeWeight + "KG");
}

trainingLoad(140, 87.5);