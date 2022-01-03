class Project < ApplicationRecord

has_many :sprints
has_many :features, through: :sprints
has_many :comments, through: :sprints
has_many :bugs, through: :sprints
belongs_to :team, class_name: "Team", foreign_key: "belongs_to_id", optional: true



def all_sprints
    self.sprints.count
end

def completed_sprints
  self.sprints.filter{|sprint| sprint.completed }.count
end

def goal_not_yet_occured

     self.sprints.filter{|sprint|  !sprint.completed}.filter{|sprint| sprint.goal_date >Time.current}.length 
end


def  missed_goals

 bad_completed_sprints =  self.sprints.filter{|sprint| sprint.completed }.filter{|sprint| sprint.goal_date < sprint.completed_at}.length 
 bad_uncompleted_sprints= self.sprints.filter{|sprint|  !sprint.completed}.filter{|sprint| sprint.goal_date < Time.current}.length 
bad_uncompleted_sprints + bad_completed_sprints
end

def goals_acheieved
 self.sprints.filter{|sprint| sprint.completed }.filter{|sprint| sprint.goal_date > sprint.completed_at}.length 
end









# def  created_and_completed_sprints_total_amount

#  start_of_week=  Date.today.beginning_of_week
#  start_of_last_week =  start_of_week-7 

# made_during_this_week = self.sprints.filter{|sprint|  sprint.created_at >start_of_week }
# completed_during_this_week =  self.sprints.filter{|sprint| sprint.completed }.filter{|sprint|  sprint.completed_at >start_of_week }
#  made_last_week = self.sprints.filter{|sprint|  sprint.created_at <start_of_week   && sprint.created_at >start_of_last_week }
#  completed_last_week = self.sprints.filter{|sprint| sprint.completed }.filter{|sprint|   sprint.completed_at <start_of_week   && sprint.completed_at >start_of_last_week}

# sunday_last_week = {name: "1", created: made_last_week .filter{|sprint| sprint.created_at.sunday? }.count,  completed:  completed_last_week .filter{|sprint| sprint.completed_at.sunday? }.count } 
# monday_last_week = {name: "2", created: made_last_week.filter{|sprint| sprint.created_at.monday? }.count, completed:  completed_last_week .filter{|sprint| sprint.completed_at.monday? }.count } 
# tuesday_last_week  = {name: "3",created:  made_last_week.filter{|sprint| sprint.created_at.tuesday? }.count, completed:  completed_last_week .filter{|sprint| sprint.completed_at.tuesday? }.count } 
# wednesday_last_week = { name: "4", created: made_last_week.filter{|sprint| sprint.created_at.wednesday? }.count, completed:  completed_last_week .filter{|sprint| sprint.completed_at.wednesday? }.count } 
# thursday_last_week  = {name: "5", created: made_last_week.filter{|sprint| sprint.created_at.thursday? }.count, completed:  completed_last_week .filter{|sprint| sprint.completed_at.thursday? }.count } 
# friday_last_week = {name: "6", created: made_last_week.filter{|sprint| sprint.created_at.friday? }.count, completed:  completed_last_week .filter{|sprint| sprint.completed_at.friday? }.count } 
# saturday_last_week = {name: "7", created: made_last_week.filter{|sprint| sprint.created_at.saturday? }.count, completed:  completed_last_week .filter{|sprint| sprint.completed_at.saturday? }.count } 


#    sunday  = {name: "8", created: made_during_this_week.filter{|sprint| sprint.created_at.sunday? }.count,  completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.sunday? }.count } 
#    monday = {name: "9", created: made_during_this_week.filter{|sprint| sprint.created_at.monday? }.count, completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.monday? }.count } 
#    tuesday  = {name: "10", created: made_during_this_week.filter{|sprint| sprint.created_at.tuesday? }.count, completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.tuesday? }.count } 
#    wednesday = { name: "11",created: made_during_this_week.filter{|sprint| sprint.created_at.wednesday? }.count, completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.wednesday? }.count } 
#    thursday  = {name: "12", created: made_during_this_week.filter{|sprint| sprint.created_at.thursday? }.count, completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.thursday? }.count } 
#    friday = {name: "13", created: made_during_this_week.filter{|sprint| sprint.created_at.friday? }.count, completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.friday? }.count } 
#    saturday = {name: "14", created: made_during_this_week.filter{|sprint| sprint.created_at.saturday? }.count, completed:  completed_during_this_week .filter{|sprint| sprint.completed_at.saturday? }.count } 

# week = [sunday_last_week,    monday_last_week,   tuesday_last_week,   wednesday_last_week,   thursday_last_week,  friday_last_week,   saturday_last_week ,  sunday,   monday,   tuesday,  wednesday,   thursday,  friday,   saturday]
# end






def created_and_completed_sprints_total_amount
  
  i = self.created_at.to_date
  current_day = Time.current.to_date

completed_sprints = self.sprints.filter{|sprint| sprint.completed ==true}

  completed_sprints = completed_sprints.map{|sprint|   sprint.completed_at.to_date }
  created_sprints = self.sprints.map{|sprint|   sprint.created_at.to_date }

  graph_data=[]

  while i < current_day

    completed_count= completed_sprints.filter{|sprint|  sprint == i  }.count    
    created_count= created_sprints.filter{|sprint|  sprint == i  }.count    
    day_completed =      {  name:i  ,  completed: completed_count , created: created_count}

    graph_data.append(day_completed)
    i =i+1

  end

  graph_data

end





def completed_over_time_graph
  
  i = self.created_at.to_date
  current_day = Time.current.to_date  

  sprints = self.sprints.filter{|sprint| sprint.completed ==true}
  sprints = sprints.map{|sprint|   sprint.completed_at.to_date }
  created_sprints = self.sprints.map{|sprint|   sprint.created_at.to_date }


  graph_data=[]
  total_completed=0
  total_created =0

  while i < current_day 
    completed_count= sprints.filter{|sprint|  sprint == i  }.count    
    created_count= created_sprints.filter{|sprint|  sprint == i  }.count    

    total_completed = total_completed +completed_count
    total_created = total_created +created_count

    day_completed =      {  day:i        ,  completed: total_completed ,created:total_created }

    graph_data.append(day_completed)
    i =i+1

  end

  graph_data

end





end
