class Sprint < ApplicationRecord

  belongs_to :created_by, class_name: "User", foreign_key: "created_by_id"
  belongs_to :completed_by, class_name: "User", foreign_key: "completed_by_id", optional: true
  has_many :bugs, dependent: :destroy
  has_many :features, dependent: :destroy
  has_many :comments, dependent: :destroy

  

  
end
