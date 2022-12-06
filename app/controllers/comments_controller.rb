class CommentsController < ApplicationController
  def index
    render json: Comment.all, status: :ok
  end

  def show
    comment = find_comment
    render json: comment, status: :ok
  end



  private

  def find_comment
    Comment.find(params[:id])
  end
end
