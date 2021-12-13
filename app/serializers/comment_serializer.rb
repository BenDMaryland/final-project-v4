class CommentSerializer < ActiveModel::Serializer
  attributes :id, :progress, :urgency, :priority, :comment_details, :slug, :completed_comment, :completed_at, :completed, :impact
  has_one :sprint
  has_one :created_by
  has_one :completed_by
end
