class User < ApplicationRecord
  has_secure_password
  has_many :comments
  has_many :skill_sets, through: :comments

end
