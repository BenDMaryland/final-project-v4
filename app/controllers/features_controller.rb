class FeaturesController < ApplicationController
before_action :authorize
    
        def index 
        features = Feature.all
        render json: features
    end

    def show 
        feature= Feature.find_by(slug: params[:id])
        render json: feature
    end
    
    def create

        feature =  Feature.create!(feature_params_new)      
        
        render json: feature
    end

def destroy
feature =   find_feature
return render json: { error: "Not authorized" }, status: :unauthorized  unless ( current_user.level  ==2    )
feature.destroy
end

   def  update 
        feature =   find_feature
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
         feature.update!(feature_params_new)
               if feature.completed 
                feature.update(completed_at: Time.new)
            end
          render json: feature
    end

    private 
    def  find_feature
        Feature.find(params[:id])
    end

    def feature_params_new
        params.require(:feature).permit( :urgency, :priority, :feature_title, :feature_data, :slug, :goal_date,  :created_by_id, :feature, :sprint_id, :completed, :completed_by_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end


end
