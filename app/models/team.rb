class Team < ApplicationRecord

    
has_many :members, class_name: "User", foreign_key: "member_of_id", dependent: :destroy

 has_many :projects, class_name: "Project", foreign_key: "belongs_to_id", dependent: :destroy

has_many :sprints, through: :projects , dependent: :destroy



end


# has_many :sprints
# has_many :features, through: :sprints
# has_many :comments, through: :sprints
# has_many :bugs, through: :sprints
