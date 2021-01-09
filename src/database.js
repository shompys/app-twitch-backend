import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/twitch';

//configs de la biblio
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB conectada con mongoose')
})