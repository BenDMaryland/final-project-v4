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
        render json: comment
    end


    private 
    def  find_comment
        Comment.find(params[:id])
    end

    def comment_params_new
        params.require(:comment).permit( :urgency, :priority, :comment_details,  :slug, :goal_date,  :created_by_id, :comment, :sprint_id)
    end





end
