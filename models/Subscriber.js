const mongoose=require('mongoose');
const {Schema} = mongoose;
const subscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subsToChanel:{
        type: String,
         required: true

    },
    subsDate: {type: Date,
        required: true,
        default:Date.now()
    }
});
let Subscriber=mongoose.model('Subscriber',subscriberSchema);
module.exports =Subscriber