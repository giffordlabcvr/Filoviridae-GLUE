
var fLocObjs = glue.tableToObjects(glue.command(["list", "feature-location", 
	"-w", "feature.name in ('NP', 'VP35', 'VP40', 'sGP', 'ssGP', 'GP', 'VP30', 'VP24', 'L') and "+
	"referenceSequence.name in "+
	"('REF_MASTER_NC_002549', 'REF_RESTV_NC_004161', 'REF_SUDV_NC_006432', "+
	 "'REF_TAFV_NC_014372', 'REF_BDBV_NC_014373', 'REF_BOMV_NC_039345')"]));


_.each(fLocObjs, function(fLocObj) {
	glue.logInfo("validating coding feature-location", fLocObj);
	var refName = fLocObj["referenceSequence.name"];
	var featureName = fLocObj["feature.name"];
	glue.inMode("reference/"+refName+"/feature-location/"+featureName, function() {
		glue.command(["validate"]);
		var aminoObjs = glue.tableToObjects(glue.command(["amino-acid"]));
		for(var i = 0; i < aminoObjs.length; i++) {
			if(i == 0) {
				if(aminoObjs[i].aminoAcid != 'M') {
					throw new Error("Reference "+refName+", feature "+featureName+": codon "+
							aminoObjs[i]+" should be methionine");
				}
			} else if(i == aminoObjs.length - 1) {
				if(aminoObjs[i].aminoAcid != '*') {
					throw new Error("Reference "+refName+", feature "+featureName+": codon "+
							aminoObjs[i]+" should be stop codon");
				}
			} else {
				if(aminoObjs[i].aminoAcid == '*') {
					throw new Error("Reference "+refName+", feature "+featureName+": codon "+
							aminoObjs[i]+" should not be stop codon");
				}
			}
		}
	});
});