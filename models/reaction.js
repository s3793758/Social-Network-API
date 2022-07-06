const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

const Reaction = mongoose.model('Though', UserSchema);

module.exports = User;
