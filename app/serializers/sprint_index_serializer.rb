class SprintIndexSerializer < ActiveModel::Serializer
  attributes :id,  :priority, :sprint_title, :sprint_data, :slug, :completed_comment, :created_by, :completed_by, :completed_at, :completed, :impact, :assigned_to_name, :assigned_to_id, :was_goal_date_exceeded


belongs_to :project 

end
