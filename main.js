const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const compToHTML = (device) => {
  const compHTMLSection = 
  `<section id="${device.id}"> 
    <h1>${device.manufacturer}</h1>
    <div>model: ${device.make}</div>
    <div>Memory: ${device.specs.memory}</div>
	  <div>Hard drive space: ${device.specs.hardDrive}</div>
	  <div>Processor speed: ${device.specs.processor}</div>
  </section>`

  return compHTMLSection
}

let computer1 = compToHTML(computer)

console.log(computer1)



{/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */}