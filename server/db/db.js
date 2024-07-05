import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

// Lägg till felsökningsutskrifter
console.log('Laddar miljövariabler från .env-filen');
console.log('MONGODB_URI:', uri);

if (!uri) {
  console.error('MongoDB URI är inte definierad i .env-filen');
  process.exit(1); // Avsluta applikationen om URI inte är definierad
}

// Anslutning till MongoDB med felhantering
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Definiera schema
const tasksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

// Skapa modell
const Tasks = mongoose.model("Tasks", tasksSchema);

export default Tasks;




// import mongoose from "mongoose";


// mongoose.connect('mongodb+srv://username:l0sen0rd@cluster0.snws1nm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
// () => console.log('Connected to mongo')
// );


// const tasksSchema = new mongoose.Schema({
//     title: String,
//     completed: Boolean

// })
// const Tasks = mongoose.model("tasks", {
//     tasks: {
//         name: String,
//     },
//     Person: {
//         name: String,
//     }




// });

// const tasksSchem =  mongoose.model("tasks", tasksSchema)

// export default Tasks