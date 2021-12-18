class KbasController < ApplicationController


     def index 
        kbas = Kba.all
        
        render json: kbas
    end

    def show 
        kba= Kba.find(params[:id])
        render json: kba
    end
    
    def create
byebug
        kba =  Kba.create!(kba_params_new)        

        render json: kba
    end

def destroy
kba =   find_kba
return render json: { error: "Not authorized" }, status: :unauthorized  unless ( current_user.level  ==2    )
kba.destroy
end

   def  update 
        kba =   find_kba
           return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.level  >= 1
         kba.update!(kba_params_new)

          render json: kba
    end

    private 
    def  find_kba
        Kba.find(params[:id])
    end

    def  kba_params_new
        params.require(:kba).permit( :kbatext, :user_id, :category, :kba_title, :kba)
    end





end
