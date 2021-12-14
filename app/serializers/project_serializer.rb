class ProjectSerializer< ActiveModel::Serializer
  attributes  :id, :summary, :progress, :name

  has_many :sprints
end
