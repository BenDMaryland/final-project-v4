class ProjectsController < ApplicationController

     def index 
        projects = Project.all.filter{|project| project.belongs_to_id == current_user.member_of_id }
        
        render json: projects
    end

    def show 
       
        project= Project.find(params[:id])
          return render json: { error: "Not authorized" }, status: :unauthorized unless   project.belongs_to_id == current_user.member_of_id 
        render json: project
    end
    
    def create

        project =  Project.create!(project_params)        

        render json: project
    end



   def  update 
        project =   find_project
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  == 2
         project.update!(project_params)

          render json: project
    end

    private 
    def  find_project
        Project.find(params[:id])
    end

    def  project_params
        params.require(:project).permit( :name, :summary, :progress, :integer, :belongs_to_id)
    end


end
