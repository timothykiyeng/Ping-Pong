class CommentsController < ApplicationController
  def index
    render json: Comment.all, status: :ok
  end

  def show
    comment = find_comment
    render json: comment, status: :ok
  end

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end



  private

  def find_comment
    Comment.find(params[:id])
  end

  def comment_params
    params.permit(:description, :skill_set_id, :user_id)
  end
end
