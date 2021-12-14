class Project < ApplicationRecord

has_many :sprints
has_many :features, through: :sprints
has_many :comments, through: :sprints
has_many :bugs, through: :sprints

end
