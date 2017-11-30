const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlenght: 3
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});