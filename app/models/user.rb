class User < ApplicationRecord
    has_secure_password

  has_many :created_sprints, class_name: "Sprint", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_sprints, class_name: "Sprint", foreign_key: "completed_by_id", dependent: :destroy

  has_many :created_bugs, class_name: "Bug", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_bugs, class_name: "Bug", foreign_key: "completed_by_id", dependent: :destroy

  has_many :created_features, class_name: "Feature", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_features, class_name: "Feature", foreign_key: "completed_by_id", dependent: :destroy

  has_many :created_comments, class_name: "Comment", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_comments, class_name: "Comment", foreign_key: "completed_by_id", dependent: :destroy

  validates :name, :email, :password_digest, presence: true 
  validates :email, uniqueness: true 
   



  
end
