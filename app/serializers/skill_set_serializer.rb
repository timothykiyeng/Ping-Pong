class SkillSetSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :is_favorite, :video
end
