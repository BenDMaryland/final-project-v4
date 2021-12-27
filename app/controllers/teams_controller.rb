class TeamsController < ApplicationController


     def index 
        teams = Team.all
        
        render json: teams
    end

    def show 
       
        team= Team.find(params[:id])
          return render json: { error: "Not authorized" }, status: :unauthorized unless  current_user.member_of_id == team.id
        render json: team
    end
    
    def create

        team =  Team.create!(team_params)        

        render json: team
    end



   def  update 
        team =   find_team
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  == 2 && current_user.member_of_id == team.id
         team.update!(team_params)
          render json: team

    end

    private 
    def  find_team
        Team.find(params[:id])
    end

    def  team_params
        params.require(:team).permit( :name, :description)
    end


end
