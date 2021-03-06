class SprintsController < ApplicationController
before_action :authorize
    

    def index 
          return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1 
        sprints = Sprint.all.filter{|sprint| sprint.team.id == current_user.member_of_id }
        sprints =sprints.sort_by{|sprint| sprint.impact}.reverse
        render json: sprints, each_serializer: SprintIndexSerializer
    end

    def show 
          return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
        sprint= Sprint.find_by(slug: params[:id])
        render json: sprint
    end
    
    def create
          return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
        sprint =  Sprint.create!(sprint_params_new)        
        render json: sprint
    end

def destroy
sprint =  find_sprint 
return render json: { error: "Not authorized" }, status: :unauthorized  unless ( current_user.level  ==2    ||  sprint.created_by_id == session[:user_id]    )
sprint.destroy
end



    def  update 
        sprint =  find_sprint 
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
            sprint.update!(sprint_params_new)
            if sprint.completed 
                
                sprint.update(completed_at: DateTime.now)
            end
        render json: sprint
    end

    private 
    def  find_sprint
        Sprint.find(params[:id])
    end

    def sprint_params_new
        params.permit( :urgency, :priority, :sprint_title, :sprint_data, :slug, :goal_date,  :created_by_id,:progress, :id,:completed_by_id, :completed, :completed_comment, :sprint, :project_id, :assigned_to_id)
    end

 def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
