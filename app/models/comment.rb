class Comment < ApplicationRecord
  belongs_to :sprint
  belongs_to :created_by, class_name: "User", foreign_key: "created_by_id"
  belongs_to :completed_by, class_name: "User", foreign_key: "completed_by_id", optional: true

  def slugify 
self.slug = comment_details.parameterize 
self.progress  = 0
self.completed = false
end

  def  impact
    self .urgency * self.priority
  end

end
