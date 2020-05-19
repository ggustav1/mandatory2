const mongo = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "animalfarm";

mongo.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error
    } else {
        console.log('succes');
    }

    const animalFarm = client.db(dbName);

    const buildings = animalFarm.collection("buildings");
    console.log(animalFarm);

    // findOne also works
    buildings.find().toArray((error, foundBuildings) => {
        console.log(foundBuildings);

        client.close().then(() => {
            console.log('Succes we closed the client');
        })
    });
});

// remeber to only use deleteOne or use a selector that is very specific
























