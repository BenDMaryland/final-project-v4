class ProjectSerializer< ActiveModel::Serializer
  attributes  :id, :summary, :progress, :name, :completed_sprints, :all_sprints, :missed_goals, :created_and_completed_sprints_total_amount, :goals_acheieved, :goal_not_yet_occured
end
