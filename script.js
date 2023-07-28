//wait for window to load
document.addEventListener("DOMContentLoaded". function(event)
	{
        //get a reference to header object
	let myHeaeder = document.getElementById("header-id")

	//wait 3 seconds before displaying the header
	setTimeout(()=>{
		myHeader.classList.remove("hidden")
	},3000)
})
