class SprintSerializer < ActiveModel::Serializer
  attributes :id, :progress, :urgency, :priority, :sprint_title, :sprint_data, :slug, :goal_date, :completed_comment, :created_by, :completed_by, :completed_at, :completed
  has_many :bugs
  has_many :features
  has_many :comments
end
