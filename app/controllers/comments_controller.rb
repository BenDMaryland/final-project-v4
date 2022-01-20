class CommentsController < ApplicationController


     def index 
        comments = Comment.all
        
        render json: comments
    end

    def show 
        comment= Comment.find_by(slug: params[:id])
        render json: comment
    end
    
    def create

        comment =  Comment.create!(comment_params_new)        
        comment.update(completed: false)
        render json: comment
    end

def destroy
comment =   find_comment
return render json: { error: "Not authorized" }, status: :unauthorized  unless ( current_user.level  ==2    )
comment.destroy
end

   def  update 
        comment =   find_comment
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
         comment.update!(comment_params_new)
               if comment.completed 
                comment.update(completed_at: DateTime.now)
            end
          render json: comment
    end

    private 
    def  find_comment
        Comment.find(params[:id])
    end

    def comment_params_new
        params.require(:comment).permit( :urgency, :priority, :comment_details,  :slug, :goal_date,  :created_by_id, :comment, :sprint_id, :completed, :completed_by_id)
    end

end
