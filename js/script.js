
function enterClicked () {
  // this function gets user's first name and age and displays it back to user
  // get first name from text field
  let streetName = document.getElementById("street-name").value
	// get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value)

  // display name and age back to user
  document.getElementById('result').innerHTML = "Your street name is " + streetName + " and your street number is " + streetNumber + " is"
}