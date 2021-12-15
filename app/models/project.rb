class Project < ApplicationRecord

has_many :sprints
has_many :features, through: :sprints
has_many :comments, through: :sprints
has_many :bugs, through: :sprints


def all_sprints
    self.sprints.count
end

def completed_sprints
  self.sprints.filter{|sprint| sprint.completed }.count
end

def goal_not_yet_occured
     self.sprints.filter{|sprint|  !sprint.completed}.filter{|sprint| sprint.goal_date >DateTime.new}.length 
end


def  missed_goals
 bad_completed_sprints =  self.sprints.filter{|sprint| sprint.completed }.filter{|sprint| sprint.goal_date < sprint.completed_at}.length 
 bad_uncompleted_sprints= self.sprints.filter{|sprint|  !sprint.completed}.filter{|sprint| sprint.goal_date < DateTime.new}.length 
bad_uncompleted_sprints + bad_completed_sprints
end

def goals_acheieved
 self.sprints.filter{|sprint| sprint.completed }.filter{|sprint| sprint.goal_date > sprint.completed_at}.length 
end

def created_and_completed_this_week


completed_sprints = self.sprints.filter{|sprint| sprint.completed }

   sunday  = {name: "sunday", created: self.sprints.filter{|sprint| sprint.created_at.sunday? }.count,  completed:  completed_sprints .filter{|sprint| sprint.completed_at.sunday? }.count } 
   monday = {name: "monday", created: self.sprints.filter{|sprint| sprint.created_at.monday? }.count, completed:  completed_sprints .filter{|sprint| sprint.completed_at.monday? }.count } 
   tuesday  = {name: "tuesday", created: self.sprints.filter{|sprint| sprint.created_at.tuesday? }.count, completed:  completed_sprints .filter{|sprint| sprint.completed_at.tuesday? }.count } 
   wednesday = { name: "wednesday",created: self.sprints.filter{|sprint| sprint.created_at.wednesday? }.count, completed:  completed_sprints .filter{|sprint| sprint.completed_at.wednesday? }.count } 
   thursday  = {name: "thursday", created: self.sprints.filter{|sprint| sprint.created_at.thursday? }.count, completed:  completed_sprints .filter{|sprint| sprint.completed_at.thursday? }.count } 
   friday = {name: "friday", created: self.sprints.filter{|sprint| sprint.created_at.friday? }.count, completed:  completed_sprints .filter{|sprint| sprint.completed_at.friday? }.count } 
   saturday = {name: "saturday", created: self.sprints.filter{|sprint| sprint.created_at.saturday? }.count, completed:  completed_sprints .filter{|sprint| sprint.completed_at.saturday? }.count } 


week = [sunday, monday,tuesday,thursday,friday,saturday]

end



end

# self.sprints.filter{|sprint| sprint.created_at.sunday? }.count
# self.sprints.filter{|sprint| sprint.completed_at.sunday? }.count

#   self.sprints.filter{|sprint| sprint.created_at.monday? }.count
#   self.sprints.filter{|sprint| sprint.completed_at.monday? }.count

#  self.sprints.filter{|sprint| sprint.created_at.tuesday? }.count
# self.sprints.filter{|sprint| sprint.completed_at.tuesday? }.count

# self.sprints.filter{|sprint| sprint.created_at.wednesday? }.count
# self.sprints.filter{|sprint| sprint.completed_at.wednesday? }.count

# self.sprints.filter{|sprint| sprint.created_at.thursday? }.count
# self.sprints.filter{|sprint| sprint.completed_at.thursday? }.count


# self.sprints.filter{|sprint| sprint.created_at.friday? }.count
# self.sprints.filter{|sprint| sprint.completed_at.friday? }.count

# self.sprints.filter{|sprint| sprint.created_at.saturday? }.count
# self.sprints.filter{|sprint| sprint.completed_at.saturday? }.coun