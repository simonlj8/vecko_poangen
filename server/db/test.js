import { connect } from 'mongoose';
import mongoose from 'mongoose';

const connectdb = (url) => {
    return connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: false
    })

}


export default connectdb;