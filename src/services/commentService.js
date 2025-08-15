const commentRepo = require("../repository/commentRepo");

module.exports = {
  createComment: async (userId, postId, content) => {
    return commentRepo.create({ userId, postId, content });
  },

  updateComment: async (userId, commentId, content) => {
    const comment = await commentRepo.findById(commentId);
    if (!comment) throw new Error("Comment not found");
    if (comment.userId !== userId)
      throw new Error("Cannot edit others' comments");
    return commentRepo.update(commentId, { content });
  },

  deleteComment: async (userId, commentId) => {
    const comment = await commentRepo.findById(commentId);
    if (!comment) throw new Error("Comment not found");
    if (comment.userId !== userId)
      throw new Error("Cannot delete others' comments");
    await commentRepo.delete(commentId);
    return { message: "Comment deleted successfully" };
  },

  getCommentsByPost: (postId) => commentRepo.findByPost(postId),
};
