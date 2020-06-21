var mongoose =require ("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temprament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
	name:"Papi",
	age:7,
	temprament:"Weirdo"
}, function(err, cats){
	if(err){
		console.log(err);
	} else {
		console.log("BERHASIL MENAMBAHKAN SATU JENIS KITI");
		console.log(cats);
	}
});

Cat.find({}, function(err, cats){
	if(err){
		console.log(err);
	} else {
		console.log(cats);
	}
});