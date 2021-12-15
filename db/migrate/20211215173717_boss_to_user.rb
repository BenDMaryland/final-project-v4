class BossToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :boss, :boolean
  end
end
