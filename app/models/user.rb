class User < ApplicationRecord
  has_secure_password
  has_many :comments
  has_many :skill_sets, through: :comments
  validates :username, presence: true, uniqueness: true

end
