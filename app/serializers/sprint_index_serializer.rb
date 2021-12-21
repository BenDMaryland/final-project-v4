class SprintIndexSerializer< ActiveModel::Serializer
  attributes :id,  :sprint_title, :sprint_data, :completed, :impact, :assigned_to_name, :assigned_to_id, :was_goal_date_exceeded, :assigned_to_id, :progress, :slug

  belongs_to :project
end
