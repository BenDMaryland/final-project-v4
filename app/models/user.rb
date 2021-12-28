class User < ApplicationRecord
    has_secure_password

  before_create :slugify
  has_many :created_sprints, class_name: "Sprint", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_sprints, class_name: "Sprint", foreign_key: "completed_by_id", dependent: :destroy
has_many :assigned_to, class_name: "Sprint", foreign_key: "assigned_to_id", dependent: :destroy

  has_many :created_bugs, class_name: "Bug", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_bugs, class_name: "Bug", foreign_key: "completed_by_id", dependent: :destroy

  has_many :created_features, class_name: "Feature", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_features, class_name: "Feature", foreign_key: "completed_by_id", dependent: :destroy

  has_many :created_comments, class_name: "Comment", foreign_key: "created_by_id", dependent: :destroy
  has_many :completed_comments, class_name: "Comment", foreign_key: "completed_by_id", dependent: :destroy

belongs_to :member_of, class_name: "Team", foreign_key: "member_of_id", optional: true


  validates :name, :email, :password_digest, presence: true 
  validates :email, uniqueness: true 
   
def completed_sprints_count
  self.completed_sprints.count
end

def created_sprints_count
  self.created_sprints.count
end

def assigned_to_count
  self.assigned_to.count
end

 def highest_impact_ticket
 self.assigned_to.filter{|sprint| sprint.completed ==false}.sort_by {|sprint| sprint.impact }.last  
 end

 def slugify 
self.slug = username.parameterize 
end


def   assigned_to_goal_exceeded 
bad_sprints = Sprint.goal_exceeded.filter{|sprint| sprint.assigned_to_id == self.id}.count
end


def user_evaluation_data
 data = {name: self.name, assigned_tickets: assigned_to_count, completed_tickets: completed_sprints_count,  goals_exceeded: assigned_to_goal_exceeded}
end


end
