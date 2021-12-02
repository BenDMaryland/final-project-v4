class BugSerializer < ActiveModel::Serializer
  attributes :id, :progress, :urgency, :priority, :bug_data, :bug_title, :slug, :completed_comment, :created_by, :completed_by, :completed_at, :completed
  has_one :sprint
end
