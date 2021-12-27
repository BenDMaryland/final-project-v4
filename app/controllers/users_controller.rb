class UsersController < ApplicationController
before_action :authorize
  skip_before_action :authorize, only: [:create]
 


      def create
    
        user = User.create(user_params)
   

          if user.valid?
   
        
            if user.member_of.members.length ==1
                 user.update(level: 2)
                     user.update(boss: true)
          session[:user_id] = user.id
          render json: user, status: :created
            else 
              user.update(level: 0)
          session[:user_id] = user.id
          render json: user, status: :created
            end
        else

          render json: { errors: user.error.full_messages }, status: :unprocessable_entity
        end
      end

def show

    return render json: { error: "Not authorized" }, status: :unauthorized unless      current_user.boss    &&  current_user.member_of_id == User.find_by(slug: params[:id]).member_of_id
    
user = User.find_by(slug: params[:id])
        render json: user 
end

    def me

        user = current_user
        if user 
        render json: user 
        else
           render_not_logged_in
        end
    end


   def  update 
        user =   User.find(params[:id])
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.boss 
         user.update!(user_params)
  
          render json: user
    end




def index
   return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.boss
   render json: User.all.filter{|user| user.member_of_id == current_user.member_of_id   }
end

def destroy
user =   User.find(params[:id])

return render json: { error: "Not authorized" }, status: :unauthorized  unless ( current_user.level  ==2    )
user.destroy
end


    private 

    def user_params
        params.permit(:user, :name, :password, :email, :username, :level, :boss, :member_of_id,:role )

    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end


end


