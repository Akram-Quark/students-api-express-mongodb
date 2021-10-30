const mongoose=require('mongoose');
const {Schema} = mongoose;
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    university:{type: String, required: true},
   
    regestration_year: {
        type:String,
        required: true
    },
    graduation_year: {type:String,
    default:"not yet"
    }
});
let Student=mongoose.model('Student', studentSchema);
module.exports =Student