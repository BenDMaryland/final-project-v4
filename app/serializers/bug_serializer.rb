class BugSerializer < ActiveModel::Serializer
  attributes :id, :progress, :urgency, :priority, :bug_data, :bug_title, :slug, :completed_comment, :created_by, :completed_by, :completed_at, :completed, :impact
  has_one :sprint
  has_one :created_by
  has_one :completed_by

    def  impact
    self .object.urgency * self.object.priority
  end
end
