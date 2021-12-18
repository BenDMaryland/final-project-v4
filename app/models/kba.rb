class Kba < ApplicationRecord

    belongs_to :user

 validates :kbatext, :category, :kba_title, :user_id, presence: true 





end


