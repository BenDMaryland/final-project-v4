class Project < ApplicationRecord

has_many :sprints
has_many :features, through: :sprints
has_many :comments, through: :sprints
has_many :bugs, through: :sprints


def all_sprints
    self.sprints.count
end

def completed_sprints
    self.sprints.filter{|sprint| sprint.completed }.count
end




def  missed_goals
 completed_sprints =  self.sprints.filter{|sprint| !sprint.completed }.filter{|sprint| sprint.goal_date<Time.new}
end




end
