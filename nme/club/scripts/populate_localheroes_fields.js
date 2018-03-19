/**
 * Populate the select fields based on values from localheroes.com website.
 */

window.onload = function() {
    /**
     * Values copied from the website
     * @type {*[]}
     */
    var trades = [
        {
            "id": 1,
            "title": "Plumber",
            "disabled": false
        }, {
            "id": 2,
            "title": "Heating Engineer",
            "disabled": false
        }, {
            "id": 3,
            "title": "Drainage Engineer",
            "disabled": false
        }, {
            "id": 4,
            "title": "Electrician",
            "disabled": false
        }, {
            "id": 5,
            "title": "Handyman",
            "disabled": false
        }, {
            "id": 6,
            "title": "Painter & Decorator",
            "disabled": false
        }, {
            "id": 8,
            "title": "Plasterer",
            "disabled": false
        }, {
            "id": 9,
            "title": "Tiler",
            "disabled": false
        }, {
            "id": 10,
            "title": "Locksmith",
            "disabled": false
        }
    ];
    var items = [
        {
            "id": 1280,
            "description": "Bath is draining slowly",
            "item": "Bath",
            "defect": "Draining slowly",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": 3,
            "hintText": "Is there any more info that could help the Hero? Are any other items draining slowly in the property?"
        }, {
            "id": 1281,
            "description": "Bath is blocked",
            "item": "Bath",
            "defect": "Not draining",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it just the bath which is draining slowly or is the basin or shower running slowly aswell?"
        }, {
            "id": 1282,
            "description": "Bath issue that's not listed",
            "item": "Bath",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1283,
            "description": "Bath needs replacing",
            "item": "Bath",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What are the measurements of the bath?"
        }, {
            "id": 1284,
            "description": "Leaking pipe ",
            "item": "Pipe",
            "defect": "Leaking",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Where is the leak coming from and what is the pipe supplying?"
        }, {
            "id": 1285,
            "description": "Pipes making a noise",
            "item": "Pipe",
            "defect": "Making a noise",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? When do you hear the noise?"
        }, {
            "id": 1286,
            "description": "Pipe issue that's not listed",
            "item": "Pipe",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1287,
            "description": "Leaking radiator",
            "item": "Radiator",
            "defect": "Leaking",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is the leak coming from the radiator or the valve?"
        }, {
            "id": 1288,
            "description": "Radiators are not heating up",
            "item": "Radiator",
            "defect": "Not heating up",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is the radiator cold at the top or bottom?"
        }, {
            "id": 1289,
            "description": "Radiator needs replacing ",
            "item": "Radiator",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What are the measurements of the radiator?  "
        }, {
            "id": 1290,
            "description": "Radiator issue that's not listed",
            "item": "Radiator",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1291,
            "description": "Sink that is draining slowly",
            "item": "Sink",
            "defect": "Draining slowly",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": 3,
            "hintText": "Is there any more info that could help the Hero? Are any other items draining slowly in the property?"
        }, {
            "id": 1292,
            "description": "Blocked sink",
            "item": "Sink",
            "defect": "Not draining",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Which sink is draining slowly? Kitchen, bathroom etc."
        }, {
            "id": 1293,
            "description": "Pop up plug is broken",
            "item": "Sink",
            "defect": "Got a faulty pop up plug",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? For example the size & brand of the product."
        }, {
            "id": 1294,
            "description": "Sink needs replacing",
            "item": "Sink",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What are the measurements sink and what style is it?"
        }, {
            "id": 1295,
            "description": "Sink issue that's not listed",
            "item": "Sink",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1296,
            "description": "Stopcock is difficult to turn",
            "item": "Stopcock",
            "defect": "Difficult to turn",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Can the water supply be turned off from the street?"
        }, {
            "id": 1297,
            "description": "Stopcock is leaking",
            "item": "Stopcock",
            "defect": "Leaking",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Can the water supply be turned off from the street?"
        }, {
            "id": 1298,
            "description": "Stopcock issue that's not listed",
            "item": "Stopcock",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1308,
            "description": "Tap is running slowly",
            "item": "Tap",
            "defect": "Running slowly",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a mixer or single tap?"
        }, {
            "id": 1309,
            "description": "Dripping Tap",
            "item": "Tap",
            "defect": "Dripping",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a mixer or single tap?"
        }, {
            "id": 1310,
            "description": "Tap is difficult to turn",
            "item": "Tap",
            "defect": "Difficult to turn",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a mixer or single tap?"
        }, {
            "id": 1311,
            "description": "Tap needs replacing",
            "item": "Tap",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1312,
            "description": "Tap issue that's not listed",
            "item": "Tap",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1313,
            "description": "Blocked toilet",
            "item": "Toilet",
            "defect": "Blocked",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": 3,
            "hintText": "Is there any more info that could help the Hero? Are any other items blocked in the property?"
        }, {
            "id": 1314,
            "description": "Toilet handle broken",
            "item": "Toilet",
            "defect": "Got a broken handle",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1315,
            "description": "Toilet isn't flushing properly",
            "item": "Toilet",
            "defect": "Not flushing properly",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Does the toilet have a handle or a push button?"
        }, {
            "id": 1316,
            "description": "Toilet making a noise",
            "item": "Toilet",
            "defect": "Making a noise",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": null,
            "overrideTradeId": 1,
            "hintText": "Is there any more info that could help the Hero? When does the toilet make a noise? When it's flushed or when filling after flushing?"
        }, {
            "id": 1317,
            "description": "Toilet is filling continuously",
            "item": "Toilet",
            "defect": "Continuously filling",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Does the toilet have a handle or a push button?"
        }, {
            "id": 1318,
            "description": "Toilet is taking a long time to fill",
            "item": "Toilet",
            "defect": "Filling slowly",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Does the toilet have a handle or a push button?"
        }, {
            "id": 1319,
            "description": "Toilet is leaking",
            "item": "Toilet",
            "defect": "Leaking",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Where is the leak coming from? Inlet pipe, cistern or wastepipe?"
        }, {
            "id": 1320,
            "description": "Toilet needs replacing",
            "item": "Toilet",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1321,
            "description": "Toilet issue that's not listed",
            "item": "Toilet",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1322,
            "description": "Hot water tank isn't heating",
            "item": "Hot water tank",
            "defect": "Not heating water",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it an unvented or gravity cylinder?"
        }, {
            "id": 1323,
            "description": "Hot water tank is heating slowly",
            "item": "Hot water tank",
            "defect": "Heating water slowly",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is the problem happening with all taps in the property?"
        }, {
            "id": 1324,
            "description": "Hot water tank quickly runs out",
            "item": "Hot water tank",
            "defect": "Quickly running out of hot water",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? How quickly is your hot water running out?"
        }, {
            "id": 1325,
            "description": "Hot water tank needs replacing",
            "item": "Hot water tank",
            "defect": "To be replaced",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Could you advise size of cylinder and add a photo"
        }, {
            "id": 1326,
            "description": "Hot water tank issue that's not listed",
            "item": "Hot water tank",
            "defect": "To be discussed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1337,
            "description": "Damp wall or ceiling",
            "item": "Wet wall or ceiling",
            "defect": "Damp",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Can you see anything leaking outside the property?"
        }, {
            "id": 1338,
            "description": "Dripping wet wall or ceiling",
            "item": "Wet wall or ceiling",
            "defect": "Dripping",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Does the leak happen when the bathroom is being used?"
        }, {
            "id": 1340,
            "description": "Boiler is displaying a fault code",
            "item": "Boiler",
            "defect": "Displaying fault code",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand and model is the boiler and what fault code is displayed?"
        }, {
            "id": 1341,
            "description": "Boiler is making a noise",
            "item": "Boiler",
            "defect": "Making a noise",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What does the noise sound like and when does it happen?"
        }, {
            "id": 1342,
            "description": "Boiler is not heating water",
            "item": "Boiler",
            "defect": "Not heating water",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Do you have heating in your property?"
        }, {
            "id": 1343,
            "description": "Boiler isn't heating radiators",
            "item": "Boiler",
            "defect": "Not heating radiators",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Do you have hot water in your property?"
        }, {
            "id": 1344,
            "description": "Boiler is dead",
            "item": "Boiler",
            "defect": "Not working at all",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand and model is the boiler? Is it displaying any fault codes?"
        }, {
            "id": 1345,
            "description": "Boiler needs a service",
            "item": "Boiler",
            "defect": "Needs servicing",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? When was the last time your boiler was serviced?"
        }, {
            "id": 1346,
            "description": "Need a boiler safety certificate ",
            "item": "Boiler",
            "defect": "Needs a safety certificate (CP12)",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? How many appliances need the certificate? E.g. boiler, cooker, gas fire etc."
        }, {
            "id": 1348,
            "description": "Boiler issue that's not listed",
            "item": "Boiler",
            "defect": "To be discussed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1349,
            "description": "Thermostat isn't working",
            "item": "Thermostat",
            "defect": "Not working",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1350,
            "description": "Thermostat needs replacing",
            "item": "Thermostat",
            "defect": "To be replaced",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1351,
            "description": "Thermostat issue that's not listed",
            "item": "Thermostat",
            "defect": "To be discussed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1353,
            "description": "External drain smells",
            "item": "External Drain",
            "defect": "Smells",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? In which room of the property can you smell the drainage? Bathroom, kitchen, downstairs etc."
        }, {
            "id": 1354,
            "description": "Blocked external drain",
            "item": "External Drain",
            "defect": "Blocked",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is your manhole cover inside or outside your property and is it accessible?"
        }, {
            "id": 1355,
            "description": "External drain needs CCTV inspection",
            "item": "External Drain",
            "defect": "Needs CCTV inspection",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is your manhole cover inside or outside your property and is it accessible?"
        }, {
            "id": 1356,
            "description": "External Drain job that's not listed",
            "item": "External Drain",
            "defect": "To be discussed",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1357,
            "description": "Blocked toilet",
            "item": "Toilet",
            "defect": "Blocked",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": "plumbing",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it just the toilet which is blocked?"
        }, {
            "id": 1358,
            "description": "Toilet issue that's not listed ",
            "item": "Toilet",
            "defect": "To be discussed",
            "tradeId": 3,
            "priority": null,
            "keyphrases": ["drains"],
            "repairAndCover": null,
            "overrideTradeId": 1,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1363,
            "description": "Electric cooker needs installing",
            "item": "Electric cooker",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the cooker and where do you need it installed?"
        }, {
            "id": 1364,
            "description": "Electric cooker needs replacing",
            "item": "Electric cooker",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1365,
            "description": "Electric cooker issue that's not listed",
            "item": "Electric cooker",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1366,
            "description": "Electric hob needs installing",
            "item": "Electric hob",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the hob and where do you need it installed?"
        }, {
            "id": 1367,
            "description": "Electric hob needs replacing",
            "item": "Electric hob",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1368,
            "description": "Electric hob issue that's not listed",
            "item": "Electric hob",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1369,
            "description": "Electric oven needs installing",
            "item": "Electric oven",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the oven and where do you need it installed?"
        }, {
            "id": 1370,
            "description": "Electric oven needs replacing",
            "item": "Electric oven",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1371,
            "description": "Electric oven issue that's not listed",
            "item": "Electric oven",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1372,
            "description": "Electric shower needs installing",
            "item": "Electric shower",
            "defect": "To be installed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1373,
            "description": "Electric shower needs replacing",
            "item": "Electric shower",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1374,
            "description": "Electric shower issue that's not listed",
            "item": "Electric shower",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1375,
            "description": "Extractor isn't working",
            "item": "Extractor",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is the fan making a noise ?"
        }, {
            "id": 1376,
            "description": "Extractor needs installing",
            "item": "Extractor",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the extractor and where do you need it installed?"
        }, {
            "id": 1377,
            "description": "Extractor needs replacing",
            "item": "Extractor",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1378,
            "description": "Extractor issue that's not listed",
            "item": "Extractor",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1379,
            "description": "Fuse box is tripping",
            "item": "Fuse Box",
            "defect": "Tripping",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Have you had any work carried out in the property which could have caused the issue?"
        }, {
            "id": 1380,
            "description": "Fuse box isn't working",
            "item": "Fuse Box",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Which part of the fuse board is not working? Lights or sockets?"
        }, {
            "id": 1381,
            "description": "Fuse box needs replacing",
            "item": "Fuse Box",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1382,
            "description": "Fuse box issue that's not listed",
            "item": "Fuse Box",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1383,
            "description": "Ceiling light isn't working",
            "item": "Ceiling Light",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Have you checked the lamp in the light fitting?"
        }, {
            "id": 1384,
            "description": "Ceiling light needs installing",
            "item": "Ceiling Light",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1385,
            "description": "Ceiling light needs replacing",
            "item": "Ceiling Light",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1386,
            "description": "Ceiling light that's not listed",
            "item": "Ceiling Light",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1387,
            "description": "Outdoor light isn't working",
            "item": "Light (outdoor)",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Have you checked the lamp in the light fitting?"
        }, {
            "id": 1388,
            "description": "Outdoor light needs installing",
            "item": "Light (outdoor)",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the light and where do you need it installed?"
        }, {
            "id": 1389,
            "description": "Outdoor light needs replacing",
            "item": "Light (outdoor)",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1390,
            "description": "Outdoor light issue that's not listed",
            "item": "Light (outdoor)",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1391,
            "description": "Light switch isn't working",
            "item": "Light switch",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Are there 1, 2 or 3 switches on light switch?"
        }, {
            "id": 1392,
            "description": "Light switch needs installing",
            "item": "Light switch",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the switch and where do you need it installed?"
        }, {
            "id": 1393,
            "description": "Light switch needs replacing",
            "item": "Light switch",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1394,
            "description": "Light switch issue that's not listed",
            "item": "Light switch",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1395,
            "description": "Smoke alarm isn't working",
            "item": "Smoke Alarm",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Have you checked the battery in the smoke alarm?"
        }, {
            "id": 1396,
            "description": "Smoke alarm needs installing",
            "item": "Smoke Alarm",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the smoke alarm and where do you need it installed?"
        }, {
            "id": 1397,
            "description": "Smoke alarm needs replacing",
            "item": "Smoke Alarm",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1398,
            "description": "Smoke alarm issue that's not listed",
            "item": "Smoke Alarm",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1399,
            "description": "Socket isn't working",
            "item": "Socket",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it just one socket or is a complete circuit not working?"
        }, {
            "id": 1400,
            "description": "Socket needs installing",
            "item": "Socket",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Where do you need it installed?"
        }, {
            "id": 1401,
            "description": "Socket needs replacing",
            "item": "Socket",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1402,
            "description": "Socket issue that's not listed",
            "item": "Socket",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1403,
            "description": "Outdoor socket isn't working",
            "item": "Socket (outdoor)",
            "defect": "Not working",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it just one socket or is a complete circuit not working?"
        }, {
            "id": 1404,
            "description": "Outdoor socket needs installing",
            "item": "Socket (outdoor)",
            "defect": "To be installed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Where do you need it installed?"
        }, {
            "id": 1405,
            "description": "Outdoor socket needs replacing",
            "item": "Socket (outdoor)",
            "defect": "To be replaced",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": "electric",
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1406,
            "description": "Outdoor socket issue that's not listed",
            "item": "Socket (outdoor)",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1407,
            "description": "Rewire a 1 bed flat",
            "item": "Rewire",
            "defect": "For a 1 bed flat",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1408,
            "description": "Rewire a 2 bed flat",
            "item": "Rewire",
            "defect": "For a 2 bed flat",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1409,
            "description": "Rewire a 2 bed house",
            "item": "Rewire",
            "defect": "For a 2 bed house",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1410,
            "description": "Rewire a 3 bed house",
            "item": "Rewire",
            "defect": "For a 3 bed house",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1411,
            "description": "Rewiring issue that's not listed",
            "item": "Rewire",
            "defect": "To be discussed",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1413,
            "description": "Boiler is displaying a fault code",
            "item": "Boiler",
            "defect": "Displaying fault code",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1414,
            "description": "Boiler is making a noise",
            "item": "Boiler",
            "defect": "Making a noise",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1415,
            "description": "Boiler isn't heating water",
            "item": "Boiler",
            "defect": "Not heating water",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1416,
            "description": "Boiler isn't heating radiators",
            "item": "Boiler",
            "defect": "Not heating radiators",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1417,
            "description": "Boiler issue that's not listed",
            "item": "Boiler",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1418,
            "description": "Boiler is dead",
            "item": "Boiler",
            "defect": "Not working at all",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1419,
            "description": "Boiler needs a service",
            "item": "Boiler",
            "defect": "Needs servicing",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1420,
            "description": "Need a boiler safety certificate ",
            "item": "Boiler",
            "defect": "Needs a safety certificate (CP12)",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["gas", "corgi"],
            "repairAndCover": "boiler",
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1422,
            "description": "Smart thermostat (Hive) needs installing",
            "item": "Smart Thermostat (Hive)",
            "defect": "Needs installing",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "home", "active heating", "hive"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1424,
            "description": "Smart thermostat (Other) needs installing",
            "item": "Smart Thermostat (Other)",
            "defect": "Needs installing",
            "tradeId": 2,
            "priority": null,
            "keyphrases": ["gas", "nest", "tado", "cosy", "evo", "netatmo", "neokit"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1426,
            "description": "Video doorbell needs installing",
            "item": "Video doorbell (Ring)",
            "defect": "Needs installing",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician", "wireless", "smart", "camera", "ring"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1427,
            "description": "Gas cooker needs installing",
            "item": "Gas cooker",
            "defect": "To be installed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the cooker? Where do you want it installed?"
        }, {
            "id": 1428,
            "description": "Gas cooker needs replacing",
            "item": "Gas cooker",
            "defect": "To be replaced",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1429,
            "description": "Gas cooker issue that's not listed",
            "item": "Gas cooker",
            "defect": "To be discussed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1430,
            "description": "Gas hob needs installing",
            "item": "Gas hob",
            "defect": "To be installed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the hob? Where do you want it installed?"
        }, {
            "id": 1431,
            "description": "Gas hob needs replacing",
            "item": "Gas hob",
            "defect": "To be replaced",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1432,
            "description": "Gas hob issue that's not listed",
            "item": "Gas hob",
            "defect": "To be discussed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1433,
            "description": "Gas oven needs installing",
            "item": "Gas oven",
            "defect": "To be installed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? What brand is the oven? Where do you want it installed?"
        }, {
            "id": 1434,
            "description": "Gas oven needs replacing",
            "item": "Gas oven",
            "defect": "To be replaced",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero? Is it a like for like replacement?"
        }, {
            "id": 1435,
            "description": "Gas oven issue that's not listed",
            "item": "Gas oven",
            "defect": "To be discussed",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Is there any more info that could help the Hero?"
        }, {
            "id": 1436,
            "description": "Outside tap is dripping",
            "item": "Outdoor tap",
            "defect": "Dripping",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber", "hose"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1437,
            "description": "Outside tap needs installing",
            "item": "Outdoor tap",
            "defect": "To be installed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber", "hose"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1438,
            "description": "Outside tap needs replacing",
            "item": "Outdoor tap",
            "defect": "To be replaced",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber", "hose"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1439,
            "description": "Outside tap issue that's not listed",
            "item": "Outdoor tap",
            "defect": "To be discussed",
            "tradeId": 1,
            "priority": null,
            "keyphrases": ["plumber", "hose"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1440,
            "description": "Single handyman job to be discussed ",
            "item": "Single job",
            "defect": "To be discussed",
            "tradeId": 5,
            "priority": null,
            "keyphrases": ["handyman"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Please list all the jobs you'd like to be done and provide photos if possible"
        }, {
            "id": 1441,
            "description": "Multiple handyman jobs to be discussed ",
            "item": "Multiple jobs",
            "defect": "To be discussed",
            "tradeId": 5,
            "priority": null,
            "keyphrases": ["handyman"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": "Please list all the jobs you'd like to be done and provide photos if possible"
        }, {
            "id": 1442,
            "description": "Ring floodlight camera needs installing",
            "item": "Floodlight camera (Ring)",
            "defect": "Needs installing",
            "tradeId": 4,
            "priority": null,
            "keyphrases": ["electrician", "wireless", "smart", "camera", "ring"],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1443,
            "description": "Boiler needs installing",
            "item": "Boiler",
            "defect": "Needs installing",
            "tradeId": 2,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1444,
            "description": "Boiler needs installing",
            "item": "Boiler",
            "defect": "Needs installing",
            "tradeId": 1,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": 2,
            "hintText": null
        }, {
            "id": 1445,
            "description": "External door lock needs replacing",
            "item": "Door lock (external)",
            "defect": "To be replaced",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1446,
            "description": "External door lock needs installing",
            "item": "Door lock (external)",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1447,
            "description": "External door lock needs repairing",
            "item": "Door lock (external)",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1448,
            "description": "External door lock needs to be re-keyed",
            "item": "Door lock (external)",
            "defect": "To be re-keyed",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1449,
            "description": "I'm locked out",
            "item": "Door lock (external)",
            "defect": "To be picked",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1450,
            "description": "Internal door lock needs replacing",
            "item": "Door lock (internal)",
            "defect": "To be replaced",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1451,
            "description": "Internal door lock needs installing",
            "item": "Door lock (internal)",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1452,
            "description": "Internal door lock needs repairing",
            "item": "Door lock (internal)",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1453,
            "description": "Internal door lock needs to be re-keyed",
            "item": "Door lock (internal)",
            "defect": "To be re-keyed",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1454,
            "description": "Home security camera needs installing",
            "item": "Home security camera ",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1455,
            "description": "Home security camera needs repairing",
            "item": "Home security camera ",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1456,
            "description": "Sliding door lock needs installing",
            "item": "Sliding door lock",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1457,
            "description": "Sliding door lock needs repairing",
            "item": "Sliding door lock",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1458,
            "description": "Garage door lock needs installing",
            "item": "Garage door lock",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1459,
            "description": "Garage door lock needs repairing",
            "item": "Garage door lock",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1460,
            "description": "Window lock needs installing",
            "item": "Window lock",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1461,
            "description": "Window lock needs repairing",
            "item": "Window lock",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1462,
            "description": "Intercom system needs installing",
            "item": "Intercom system",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1463,
            "description": "Intercom system needs repairing",
            "item": "Intercom system",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1464,
            "description": "Car ignition system needs replacing",
            "item": "Car ignition system",
            "defect": "To be replaced",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1465,
            "description": "Car ignition system needs repairing",
            "item": "Car ignition system",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1466,
            "description": "uPVC door handle needs repairing",
            "item": "uPVC door handle",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1467,
            "description": "uPVC door handle needs replacing",
            "item": "uPVC door handle",
            "defect": "To be replaced",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1468,
            "description": "Door key needs to be copied",
            "item": "Door key",
            "defect": "To be copied",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1469,
            "description": "Security lock needs replacing",
            "item": "Security lock",
            "defect": "To be replaced",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1470,
            "description": "Security lock needs installing",
            "item": "Security lock",
            "defect": "To be installed ",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1471,
            "description": "Secutiy lock needs repairing",
            "item": "Security lock",
            "defect": "To be repaired",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1472,
            "description": "I'm locked out",
            "item": "I'm locked out/in",
            "defect": "My keys are inside house",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1473,
            "description": "I'm locked out",
            "item": "I'm locked out/in",
            "defect": "My key has broken in the door",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1474,
            "description": "I'm locked out",
            "item": "I'm locked out/in",
            "defect": "My keys are lost/stolen",
            "tradeId": 10,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1475,
            "description": "Bath/shower room needs tiling",
            "item": "Bath/shower room",
            "defect": "To be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1476,
            "description": "Ensuite needs tiling",
            "item": "Ensuite",
            "defect": "To be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1477,
            "description": "Cloakroom needs tiling",
            "item": "Cloakroom",
            "defect": "To be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1478,
            "description": "Kitchen splashback needs tiling",
            "item": "Kitchen",
            "defect": "Splashback to be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1479,
            "description": "Kitchen floor needs tiling",
            "item": "Kitchen",
            "defect": "Floor to be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1480,
            "description": "Internal floor needs tiling",
            "item": "Floor (internal)",
            "defect": "To be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1481,
            "description": "External floor needs tiling",
            "item": "Floor (external)",
            "defect": "To be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1482,
            "description": "Other surface needs tiling",
            "item": "Surface not listed",
            "defect": "To be tiled",
            "tradeId": 9,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1483,
            "description": "Entire room (small) to be painted ",
            "item": "Walls, Ceiling & Skirting boards",
            "defect": "Small room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1484,
            "description": "Entire room (medium) to be painted ",
            "item": "Walls, Ceiling & Skirting boards",
            "defect": "Medium room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1485,
            "description": "Entire room (large) to be painted ",
            "item": "Walls, Ceiling & Skirting boards",
            "defect": "Large room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1486,
            "description": "Small room to be wallpapered",
            "item": "Walls only",
            "defect": "Small room to be wallpapered",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1487,
            "description": "Medium room to be wallpapered",
            "item": "Walls only",
            "defect": "Medium room to be wallpapered",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1488,
            "description": "Large room to be wallpapered",
            "item": "Walls only",
            "defect": "Large room to be wallpapered",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1489,
            "description": "Small room to be painted",
            "item": "Walls only",
            "defect": "Small room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1490,
            "description": "Medium room to be painted",
            "item": "Walls only",
            "defect": "Medium room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1491,
            "description": "Large room to be painted",
            "item": "Walls only",
            "defect": "Large room to be wall painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1492,
            "description": "Ceiling (small room) to be painted",
            "item": "Ceiling only",
            "defect": "Small room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1493,
            "description": "Ceiling (medium room) to be painted",
            "item": "Ceiling only",
            "defect": "Medium room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1494,
            "description": "Ceiling (large room) to be painted",
            "item": "Ceiling only",
            "defect": "Large room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1495,
            "description": "Skirting boards (small room) to be painted",
            "item": "Skirting boards only",
            "defect": "Small room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1496,
            "description": "Skirting boards (medium room) to be painted",
            "item": "Skirting boards only",
            "defect": "Medium room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1497,
            "description": "Skirting boards (large room) to be painted",
            "item": "Skirting boards only",
            "defect": "Large room to be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1498,
            "description": "Multiple rooms to be painted",
            "item": "Multiple rooms",
            "defect": "To be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1499,
            "description": "Feature wall to be painted",
            "item": "Feature wall",
            "defect": "To be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1500,
            "description": "Whole property to be painted",
            "item": "Whole property",
            "defect": "To be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1501,
            "description": "Exterior wall to be painted",
            "item": "Exterior",
            "defect": "To be painted",
            "tradeId": 6,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1502,
            "description": "Walls (small room) need plastering",
            "item": "Walls",
            "defect": "Small room to be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1503,
            "description": "Walls (medium room) need plastering",
            "item": "Walls",
            "defect": "Medium room to be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1504,
            "description": "Walls (large room) need plastering",
            "item": "Walls",
            "defect": "Large room to be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1505,
            "description": "Hallway needs plastering",
            "item": "Hallway",
            "defect": "To be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1506,
            "description": "Hall, stairs & landind need plastering",
            "item": "Hall, stairs & landing",
            "defect": "To be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1507,
            "description": "Ceiling (small room) need plastering ",
            "item": "Ceiling",
            "defect": "Small room to be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1508,
            "description": "Ceiling (medium room) need plastering ",
            "item": "Ceiling",
            "defect": "Medium room to be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }, {
            "id": 1509,
            "description": "Ceiling (large room) need plastering ",
            "item": "Ceiling",
            "defect": "Large room to be plastered",
            "tradeId": 8,
            "priority": null,
            "keyphrases": [""],
            "repairAndCover": null,
            "overrideTradeId": null,
            "hintText": null
        }
    ];
    var defaults = [
        {
            "id": 1339,
            "description": "Plumbing job (not listed)",
            "item": "Something else",
            "defect": "To be discussed",
            "tradeId": 1
        }, {
            "id": 1352,
            "description": "Heating job (not listed)",
            "item": "Something else",
            "defect": "To be discussed",
            "tradeId": 2
        }, {
            "id": 1359,
            "description": "Drains job (not listed)",
            "item": "Something else",
            "defect": "To be discussed",
            "tradeId": 3
        }, {
            "id": 1412,
            "description": "Electrics job (not listed)",
            "item": "Something else",
            "defect": "To be discussed",
            "tradeId": 4
        }
    ];

    $(document).ready(function () {
        var trade_field = $('select[name="meta-lh-trade"]').first();
        var item_field = $('select[name="meta-lh-item"]').first();
        var issue_field = $('select[name="meta-lh-issue"]').first();

        var trade_text_field = $('input[name="meta-lh-trade-text"]').first();
        var item_text_field = $('input[name="meta-lh-item-text"]').first();
        var issue_text_field = $('input[name="meta-lh-issue-text"]').first();
        var default_text = 'To be discussed';

        var populated_items = [];
        var selected_trade_id, selected_item;
        /* Populate trade select field */
        $(trades).each(function (key, trade) {
            var option = new Option(trade.title, trade.id);
            $(trade_field).append(option);
        });

        /* Populate Items when trade changes */
        $(trade_field).on('change', function (e) {
            fillup_hidden_text_fields();
            selected_trade_id = $(trade_field).val();
            var filtered_items = items.filter(function (item) {
                return item.tradeId == selected_trade_id;
            });
            var filtered_default = defaults.filter(function (item) {
                return item.tradeId == selected_trade_id;
            });

            populated_items = filtered_items;
            if (filtered_default.length > 0) {
                populated_items.concat(filtered_default);
            }

            var rendered_array = [];

            $(item_field).children('option:not(:first-child)').remove();
            $(item_field).children('option:first-child').attr('selected', 'selected');
            $(issue_field).children('option:not(:first-child)').remove();
            $(issue_field).children('option:first-child').attr('selected', 'selected');

            $(populated_items).each(function (key, item) {
                if(rendered_array.indexOf(item.item) < 0) {
                    rendered_array.push(item.item);
                    var option = new Option(item.item, item.item);
                    $(item_field).append(option);
                }
            });
        });

        /* Populate Issues when item changes */
        $(item_field).on('change, mouseleave', function (e) {
            fillup_hidden_text_fields();
            selected_item = $(item_field).val();
            var issues = populated_items.filter(function (item) {
                return item.tradeId == selected_trade_id && item.item == selected_item;
            });

            var rendered_array = [];

            $(issue_field).children('option:not(:first-child)').remove();
            $(issue_field).children('option:first-child').attr('selected', 'selected');

            $(issues).each(function (key, item) {
                if(rendered_array.indexOf(item.id) < 0) {
                    rendered_array.push(item.id);
                    var option = new Option(item.defect, item.id);
                    $(issue_field).append(option);
                }
            })
        });

        /* Set the text value when issue changed */
        $(issue_field).on('change, mouseleave', function(e) {
            fillup_hidden_text_fields();
        });

        function fillup_hidden_text_fields() {
            $(trade_text_field).val(default_text);
            $(item_text_field).val(default_text);
            $(issue_text_field).val(default_text);

            if($(trade_field).val() != undefined && $(trade_field).val().length > 0) {
                $(trade_text_field).val($('option[value="' + $(trade_field).val() + '"]', trade_field).text());
            }
            if($(item_field).val() != undefined && $(item_field).val().length > 0) {
                $(item_text_field).val($('option[value="' + $(item_field).val() + '"]', item_field).text());
            }
            if($(issue_field).val() != undefined && $(issue_field).val().length > 0) {
                $(issue_text_field).val($('option[value="' + $(issue_field).val() + '"]', issue_field).text());
            }

        }

        fillup_hidden_text_fields();
    });
};
