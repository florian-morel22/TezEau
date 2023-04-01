import { MongoClient } from "mongodb";

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getTowns() {
    try {
      await client.connect();
      const database = client.db('TEZEAU');
      const communes = database.collection('tbl_referentiel_stations');
  
      // Récupération de toutes les entrées dans la collection "users"
      const result = await communes.find().toArray();
  
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }

  export default getTowns;