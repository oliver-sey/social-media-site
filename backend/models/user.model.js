import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		// fullName doesn't have to be unique
		fullName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			// TODO: maybe make this longer later?
			minLength: 6,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				// by default is an empty array, 0 followers when you start
				default: [],
			},
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				// by default is an empty array, not following anyone when you start
				default: [],
			},
		],
		// Not required
		profileImg: {
			type: String,
			default: "",
		},
		// Not required
		coverImg: {
			type: String,
			default: "",
		},
		// Not required
		bio: {
			type: String,
			default: "",
		},
		// Not required
		link: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);


const User = mongoose.model("User", userSchema);

export default User;