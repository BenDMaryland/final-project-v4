class SprintSerializer < ActiveModel::Serializer
  attributes :id, :progress, :urgency, :priority, :sprint_title, :sprint_data, :slug, :goal_date, :completed_comment, :created_by, :completed_by, :completed_at, :completed, :impact, :assigned_to_name, :assigned_to_id, :was_goal_date_exceeded, :related_kba

  has_many :bugs
  has_many :features
  has_many :comments

belongs_to :project 

end
