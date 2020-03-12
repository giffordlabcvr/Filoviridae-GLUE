// list the sequences in source ncbi-curated-bdbv
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-bdbv'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");
// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-bdbv/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });
});

// list the sequences in source ncbi-curated-bomv
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-bomv'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");
// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-bomv/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });
});

// list the sequences in source ncbi-curated-ebov
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-ebov'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");
// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-ebov/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });
});

// list the sequences in source ncbi-curated-restv
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-restv'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");
// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-restv/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });
});

// list the sequences in source ncbi-curated-sudv
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-sudv'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");
// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-sudv/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });
});

// list the sequences in source ncbi-curated-tafv
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-tafv'"]);
// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");
// for each sequence ID
_.each(seqIds, function(seqId) {
    // create an object in the custom table which uses the sequence ID as the row ID.
    glue.command(["create", "custom-table-row", "isolate_data", seqId]);
    // associate the corresponding sequence with this object.
    glue.inMode("sequence/ncbi-curated-tafv/"+seqId, function() {
        glue.command(["set", "link-target", "isolate_data", "custom-table-row/isolate_data/"+seqId]);
    });
});

