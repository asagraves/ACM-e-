// Get JSON element from host and populate DOM
  $(document).ready(function() {
    $.ajax({url: "dog.json"}).done(function(dogfood) {
      // When you tell jQuery to read a file via the ajax method
      // it reads the contents, and then executes whatever function
      // that you specify here in the done() method, and passes in
      // the contents of the file as the first argument.
	      // console.log("dogfood",dogfood);
	      var dog_brands = dogfood.dog_brands;
	      // console.log("dog_brands",dog_brands);
	      for (item in dog_brands) {
	      	console.log("brand name",dog_brands[item].name);
	      	// console.log("brand types",dog_brands[item].types);
	      	var types = dog_brands[item].types;
	      	for (item in types) {
	      		console.log("type",types[item].type);
	      		// console.log("type volumes",types[item].volumes);
	      		var volumes = types[item].volumes;
    				for (item in volumes) {
    					console.log("volume",volumes[item].name);
    					console.log("price",volumes[item].price);
    				}
	      	}
	      }
	})
});