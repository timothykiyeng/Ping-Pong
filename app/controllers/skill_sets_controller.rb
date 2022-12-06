class SkillSetsController < ApplicationController

  def index
    render json: SkillSet.all, status: :ok
  end

  def show
    skillset = find_skill
    render json: skillset, status: :ok
  end



  private

  def find_skill
    SkillSet.find(params[:id])
  end
end
