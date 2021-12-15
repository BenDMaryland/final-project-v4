class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :role, :level, :boss, :highest_impact_ticket, :assigned_to_goal_exceeded, :completed_sprints_count, :created_sprints_count, :assigned_to_count, :boss

end


