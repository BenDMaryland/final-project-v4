class SprintsController < ApplicationController

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
        sprint =  Sprint.create!(sprint_params_new)        
        render json: sprint
    end


    private 
    def  find_sprint
        Sprint.find(params[:id])
    end

    def sprint_params_new
        params.permit( :urgency, :priority, :sprint_title, :sprint_data, :slug, :goal_date,  :created_by_id)
    end


end
