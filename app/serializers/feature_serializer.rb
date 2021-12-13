class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :progress, :urgency, :priority, :feature_data, :feature_title, :slug, :completed_comment, :created_by, :completed_by, :completed_at, :completed, :impact
  has_one :sprint
  has_one :created_by
  has_one :completed_by
  

end
