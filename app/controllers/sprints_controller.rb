class SprintsController < ApplicationController
before_action :authorize
    

    def index 
        sprints = Sprint.all
        sprints =sprints.sort_by{|sprint| sprint.impact}.reverse
        render json: sprints
    end

    def show 
        sprint= Sprint.find_by(slug: params[:id])
        render json: sprint
    end
    
    def create
          return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
        sprint =  Sprint.create!(sprint_params_new)        
        render json: sprint
    end


    def  update 
        sprint =  Sprint.create!(sprint_params_new)        
           return render json: { error: "Not authorized" }, status: :unauthorized if  (current_user.level  <= 2   ||  params[:created_by_id]  ==  current_user.id   )
        render json: sprint
    end

    private 
    def  find_sprint
        Sprint.find(params[:id])
    end

    def sprint_params_new
        params.permit( :urgency, :priority, :sprint_title, :sprint_data, :slug, :goal_date,  :created_by_id)
    end

 def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
