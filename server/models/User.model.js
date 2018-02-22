import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	created: Date,
});

export default mongoose.model("User", UserSchema);
