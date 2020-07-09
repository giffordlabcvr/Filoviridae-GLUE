// Load EVE data from tab file 
var loadResult;
glue.inMode("module/filoviridaeTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/eve/eve-refseqs-side-data.tsv"]));
	// glue.log("INFO", "load result was:", loadResult);
});

_.each(loadResult, function(eveObj) {

	glue.inMode("custom-table-row/refcon_data/"+eveObj.sequenceID, function() {
	
		glue.log("INFO", "Entering locus data for EVE reference:", eveObj.sequenceID);

		glue.command(["set", "field", "locus_numeric_id", eveObj.locus_numeric_id]);
		glue.command(["set", "field", "num_dupes", eveObj.num_dupes]);
		glue.command(["set", "field", "num_species", eveObj.num_species]);

	});

	glue.inMode("sequence/fasta-refseqs-eve/"+eveObj.sequenceID, function() {
	
		glue.log("INFO", "Entering sequence table data for EVE reference:", eveObj.sequenceID);

		glue.command(["set", "field", "name", eveObj.sequenceID]);
		glue.command(["set", "field", "full_name", eveObj.sequenceID]);
		glue.command(["set", "field", "genus", eveObj.sequenceID]);

	});

});

