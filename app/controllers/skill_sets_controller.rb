class SkillSetsController < ApplicationController

  def index
    render json: SkillSet.all, status: :ok
  end

  def show
    skillset = find_skill
    render json: skillset, status: :ok
  end

  def update
    skillset = find_skill
    skillset.update!(skill_params)
    render json: skillset, status: :accepted
  end



  private

  def find_skill
    SkillSet.find(params[:id])
  end

  def skill_params
    params.permit(:is_favorite)
  end
end
