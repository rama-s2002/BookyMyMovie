import mongoose from "mongoose";

const adminSchema = new mongoose.Schema( {
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    moviesAdded: [{
        type: mongoose.Types.ObjectId,
        ref:"Movie"
    }]
})


export default mongoose.model('Admin', adminSchema)