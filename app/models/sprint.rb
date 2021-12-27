class Sprint < ApplicationRecord



  before_create :slugify
belongs_to :project
  belongs_to :created_by, class_name: "User", foreign_key: "created_by_id", optional: true
  belongs_to :completed_by, class_name: "User", foreign_key: "completed_by_id", optional: true
    belongs_to :assigned_to, class_name: "User", foreign_key: "assigned_to_id", optional: true
    has_one :team, through: :project
  has_many :bugs, dependent: :destroy
  has_many :features, dependent: :destroy
  has_many :comments, dependent: :destroy



   validates :sprint_title, :sprint_data, :goal_date, presence: true 
  validates :sprint_title, uniqueness: true 

  def related_kba
sprint_title_includes = Kba.all.filter{|kba|   kba.kba_title.downcase.include? (self.sprint_title.downcase  || self.sprint_data.downcase)}
sprint_data_includes = Kba.all.filter{|kba|   kba.kbatext.downcase.include? (self.sprint_title.downcase  || self.sprint_data.downcase)}
kba_title_includes     = Kba.all.filter {|kba|   self.sprint_title.downcase.include?  ( kba.kba_title.downcase   ||  kba.kbatext.downcase)  } 
kbatext_includes     = Kba.all.filter {|kba|   self.sprint_data.downcase.include?  ( kba.kba_title.downcase   ||  kba.kbatext.downcase) }

 all =kbatext_includes + kba_title_includes   + sprint_data_includes+sprint_title_includes
 all_id =all.map{|kba| [kba.id, kba.kba_title ]}
 all_id .uniq
end


def slugify 
self.slug = sprint_title.parameterize 
self.progress  = 0
self.completed = false
end

  def  impact
    self .urgency * self.priority
  end

  def self.goal_exceeded
 bad_completed_sprints =  self.all.filter{|sprint| sprint.completed }.filter{|sprint| sprint.goal_date < sprint.completed_at}
 bad_uncompleted_sprints= self.all.filter{|sprint|  !sprint.completed}.filter{|sprint| sprint.goal_date < Time.current}
bad_uncompleted_sprints + bad_completed_sprints
  end


 def assigned_to_name
  self.assigned_to.name
 end

def was_goal_date_exceeded
self.goal_date<  Time.current
end
  
  
end
