class User < ApplicationRecord



  has_many :created_sprints, class_name: "Sprint", foreign_key: "created_by_id"
  has_many :completed_sprints, class_name: "Sprint", foreign_key: "completed_by_id"




  has_many :bugs, through: :sprints
  has_many :features, through: :sprints
  has_many :comments, through: :sprints




  
  # has_many :purchased_items, class_name: "Item", foreign_key: 'buyer_id'
  # has_many :sold_items, class_name: "Item", foreign_key: 'seller_id'

end
