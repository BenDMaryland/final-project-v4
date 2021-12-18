class UsersController < ApplicationController
before_action :authorize
  skip_before_action :authorize, only: [:create]
 


      def create
        user = User.create!(user_params)
        if user.valid?
          user.update(level: 0)
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

def show

    return render json: { error: "Not authorized" }, status: :unauthorized unless    session.include? :user_id    ||  current_user.boss   
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
   render json: User.all 

end



    private 

    def user_params
        params.permit( :name, :password, :email, :username, :level, :boss )

    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end


end


