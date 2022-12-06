class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :skill_set
  validates :description, presence: true
end
