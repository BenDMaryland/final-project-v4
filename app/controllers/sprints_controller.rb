class SprintsController < ApplicationController

    def index 
        sprints = Sprint.all
        render json: sprints
    end

    def show 
        sprint=find_sprint
        render json: sprint
    end
    

    private 
    def  find_sprint
        Sprint.find(params[:id])
    end

    def sprint_params_new
        params.permit( :urgency, :priority, :sprint_title, :sprint_data, :slug, :goal_date,  :created_by)
    end


end
