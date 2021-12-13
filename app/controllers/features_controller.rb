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


    private 
    def  find_feature
        Feature.find(params[:id])
    end

    def feature_params_new
        params.require(:feature).permit( :urgency, :priority, :feature_title, :feature_data, :slug, :goal_date,  :created_by_id, :feature, :sprint_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end


end
