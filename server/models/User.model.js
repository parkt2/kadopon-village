import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	created: Date,
});

export default mongoose.model("User", UserSchema);
