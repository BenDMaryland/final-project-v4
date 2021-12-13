class Sprint < ApplicationRecord

  before_create :slugify

  belongs_to :created_by, class_name: "User", foreign_key: "created_by_id", optional: true
  belongs_to :completed_by, class_name: "User", foreign_key: "completed_by_id", optional: true
  has_many :bugs, dependent: :destroy
  has_many :features, dependent: :destroy
  has_many :comments, dependent: :destroy

def slugify 
self.slug = sprint_title.parameterize 
self.progress  = 0
self.completed = false
end

  
end
