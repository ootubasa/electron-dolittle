let dtlDtoJ = function (text) {
    let src = text;
    try {
        dtlNode = MinimalParser.parseAsNode(src);
    } catch (e) {
        alert(e);
    };
    let dtl = MinimalParser.node2js(dtlNode);
    fs.writeFileSync(__dirname + "/run/run.js", dtl);
};