import mongoose from "mongoose";


mongoose.connect('mongodb+srv://username:l0sen0rd@cluster0.snws1nm.mongodb.net/?retryWrites=true&w=majority',
() => console.log('Connected to mongo')
);


const tasksSchema = new mongoose.Schema({
    title: String,
    completed: Boolean

})
const Tasks = mongoose.model("tasks", {
    tasks: {
        name: String,
    },
    Person: {
        name: String,
    }




});

const tasksSchem =  mongoose.model("tasks", tasksSchema)

export default Tasks