class Bug < ApplicationRecord
  belongs_to :sprint
  belongs_to :created_by, class_name: "User", foreign_key: "created_by"
  belongs_to :completed_by, class_name: "User", foreign_key: "completed_by", optional: true



end
