//Generates code from RDFa

let fs = require('fs');

const https = require('https');

https.get("https://raw.githubusercontent.com/schemaorg/schemaorg/main/data/releases/12.0/schemaorg-all-https.jsonld", (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        while (data != data.replace("http://www.w3.org/2000/01/rdf-schema#", "rdfs:"))
            data = data.replace("http://www.w3.org/2000/01/rdf-schema#", "rdfs:");
        while (data != data.replace("https://schema.org/", "schema:"))
            data = data.replace("https://schema.org/", "schema:");
        while (data != data.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:"))
            data = data.replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#", "rdf:");
        let graph = JSON.parse(data)["@graph"];
        for (let i = 0; i < graph.length; i++) {
            let node = graph[i];
            let type = node["@type"];
            if (type == "rdfs:Class") {
                if (node["@id"] == "schema:DataType") continue;
                if (node["@id"] == "schema:Number") continue;
                if (node["@id"] == "schema:Integer") continue;
                if (node["@id"] == "schema:Float") continue;
                if (node["@id"] == "schema:URL") continue;
                let classId = node["@id"];
                let className = classId.split(":")[1];
                /*if (className == 'AboutPage') {
                    fs.writeFileSync("../src/org/schema/" + node["@id"].split(":")[1] + ".js", codeGenerate(graph, node));
                    break;
                }*/
                fs.writeFileSync("../src/org/schema/" + node["@id"].split(":")[1] + ".js", codeGenerate(graph, node));
            }
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

function codeGenerate(graph, node) {
    let classId = node["@id"];
    let className = classId.split(":")[1];
    let text = "";
    text += "";
    text += "/**\n";
    text += " * " + classId.replace("schema:", "Schema.org/") + "\n";
    text += " * " + node["rdfs:comment"] + "\n";
    text += " *" + "\n";
    text += " * @author schema.org\n";
    text += " * @class " + className + "\n";
    text += " * @module org.schema\n";
    if (node["rdfs:subClassOf"] != null && !Array.isArray(node["rdfs:subClassOf"]))
        node["rdfs:subClassOf"] = [node["rdfs:subClassOf"]];
    if (node["rdfs:subClassOf"] != null)
        node["rdfs:subClassOf"] = node["rdfs:subClassOf"][0];
    if (node["rdfs:subClassOf"] != null)
        text += " * @extends " + node["rdfs:subClassOf"]["@id"].split(":")[1] + "\n";
    text += " */\n";
    text += "module.exports = class " + className;
    if (node["rdfs:subClassOf"] != null) {
        text += " extends schema." + node["rdfs:subClassOf"]["@id"].split(":")[1] + " {\n";
        text = "schema." + node["rdfs:subClassOf"]["@id"].split(":")[1] + " = require(\"./" + node["rdfs:subClassOf"]["@id"].split(":")[1] + ".js\");\n" + text;
        text = "const schema = {};\n" + text;
        
    }
    else
    {
        text += " extends EcRemoteLinkedData {\n";
        text = "const EcRemoteLinkedData = require(\"../cassproject/schema/general/EcRemoteLinkedData.js\");\n" + text;
    }
    //text += "\n";
    text += "\t/**\n";
    text += "\t * Constructor, automatically sets @context and @type.\n";
    text += "\t *\n";
    text += "\t * @constructor\n";
    text += "\t */\n";
    text += "\tconstructor() {\n";
    text += "\t\tsuper();\n";
    text += "\t\tthis.setContextAndType(\"http://schema.org/\",\"" + className + "\");\n";
    text += "\t}\n\n";

    for (let i = 0; i < graph.length; i++) {
        let gn = graph[i];            
        if (gn["schema:rangeIncludes"] != null)
        if (!Array.isArray(gn["schema:rangeIncludes"]))
            gn["schema:rangeIncludes"] = [gn["schema:rangeIncludes"]];
        if (gn["schema:domainIncludes"] != null)
        if (!Array.isArray(gn["schema:domainIncludes"]))
            gn["schema:domainIncludes"] = [gn["schema:domainIncludes"]];
        if (gn["rdfs:label"] != null && gn["rdfs:label"]["@value"] != null)
            gn["rdfs:label"] = gn["rdfs:label"]["@value"]
        if (gn["rdfs:comment"] != null && gn["rdfs:comment"]["@value"] != null)
            gn["rdfs:comment"] = gn["rdfs:comment"]["@value"]

        let gi = gn["@id"];
        let gt = gn["@type"];
        let gd = gn["schema:domainIncludes"];
        if (gt != "rdf:Property")
            continue;
        //console.log(gn);
        if (gd == null)
            continue;
        //console.log(gd);
        {
            let ok = false;
            for (let j = 0; j < gd.length; j++) {
                if (gd[j]["@id"] == classId)
                    ok = true;
            }
            if (!ok) continue;
        }
        text += "\t/**\n";
        text += "\t * " + gi.replace("schema:", "Schema.org/") + "\n";
        text += "\t * " + gn["rdfs:comment"] + "\n";
        text += "\t *" + "\n";
        text += "\t * @property " + gn["rdfs:label"] + "\n";
        text += "\t * @type ";
        let gr = gn["schema:rangeIncludes"][0];
        //console.log(gr.toString());
        if (gr.toString().indexOf(",") == -1) {
            text += gr["@id"].split(":")[1] + "\n";
        } else {
            for (let j = 0; j < gr.length; j++) {
                if (j > 0)
                    text += " | ";
                text += gr[j]["@id"].split(":");
            }
            text += "\n";
        }
        text += "\t */\n";
        if (gr.toString().indexOf(",") == -1) {
            text += "\t" + gn["rdfs:label"] + ";\n\n";
        } else {
            text += "\t" + gn["rdfs:label"][0]["@value"] + ";\n\n";
        }
    }
    text += "}\n";
    text += openapiGen(graph, node);
    return text;
}

function openapiGen(graph, node) {
    let classId = node["@id"];
    let className = classId.split(":")[1];
    let text = "";
    text += "/**\n";
    text += " * @openapi\n";
    text += " * components:\n";
    text += " * \tschemas:\n";
    text += ` * \t\t${className}:\n`;
    text += " * \t\t\ttype: object\n";
    text += ` * \t\t\tdescription: "A ${className.toLowerCase()} derived from ${classId.replace("schema:", "schema.org/")}"\n`
    //alternative description: node["rdfs:comment"]
    text += " * \t\t\tallOf:\n";
    if (node["rdfs:subClassOf"]) {
        let subClassOf = node["rdfs:subClassOf"]["@id"];
        text += ` * \t\t\t\t- $ref: '#/components/schemas/${subClassOf}'\n`
    }
    let properties = graph.filter((x) => { return x["@type"] == "rdf:Property" && 
        Array.isArray(x["schema:domainIncludes"]) ? x["schema:domainIncludes"].findIndex((y) => y["@id"] == classId) != -1 : x["schema:domainIncludes"] && x["schema:domainIncludes"]["@id"] == classId});
    if (properties.length != 0)
        text += " * \t\t\t\t- properties:\n";
    for (let i = 0; i < properties.length; i++) {
        let gn = properties[i];
        let type = "";
        if (gn["schema:rangeIncludes"]){
            let gr = gn["schema:rangeIncludes"][0];
            if (gr.toString().indexOf(",") == -1) {
                type = gr["@id"].split(":")[1];
            } else {
                type = gr[0]["@id"].split(":");
                /*for (let j = 0; j < gr.length; j++) {
                    if (j > 0)
                        type += " | ";
                    type += gr[j]["@id"].split(":");
                }*/
            }
        }
        text += ` * \t\t\t\t\t\t${gn["rdfs:label"]}:\n`;
        text += ` * \t\t\t\t\t\t\tdescription: ${gn["rdfs:comment"].replace(/(\r\n|\n|\r|\u2028)/gm, "").replace(/\s+/g, ' ')}\n`;
        if (type)
            text += ` * \t\t\t\t\t\t\t${sub(type)}\n`
    }
    text += "*/";
    return text.replace(/(\t)/gm, "  ");
}

function sub(s) {
    if (s == "Text")
        return "type: string";
    if (s == "Number" || s == "Integer")
        return "type: number";
    if (s == "URL")
        return "type: string";
    if (s == "DateTime")
        return "type: string";
    if (s == "Date")
        return "type: string";
    if (s == "Time")
        return "type: string";
    return `$ref: '#/components/schemas/${s.toLowerCase()}'`;
}
