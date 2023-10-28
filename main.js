const fs = require("node:fs")
const http = require("http")
const xml = require("fast-xml-parser")

const parser = new xml.XMLParser();

let readData = fs.readFileSync("data.xml");
let parsedData = parser.parse(readData.toString());

let jsondata = {
    "data": {
        auction: []
    }
}

for (let i = 0; i < 3; i++) {
    let insertion = {
        "code": parsedData.auctions.auction[i].StockCode,
        "currency": parsedData.auctions.auction[i].ValCode,
        "attraction": parsedData.auctions.auction[i].Attraction
    };

    jsondata.data.auction.push(insertion);
}

const builder = new xml.XMLBuilder();

let xmldata = builder.build(jsondata);
