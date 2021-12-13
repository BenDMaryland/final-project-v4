class BugsController < ApplicationController

        def index 
        bugs = Bug.all
        render json: bugs
    end

    def show 
        bug= Bug.find_by(slug: params[:id])
        render json: bug
    end
    
    def create

        bug =  Bug.create!(bug_params_new)        
        render json: bug
    end


    private 
    def  find_bug
        Bug.find(params[:id])
    end

    def bug_params_new
        params.require(:bug).permit( :urgency, :priority, :bug_title, :bug_data, :slug, :goal_date,  :created_by_id, :bug, :sprint_id)
    end

end
