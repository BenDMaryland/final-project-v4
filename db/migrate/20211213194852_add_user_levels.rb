class AddUserLevels < ActiveRecord::Migration[6.1]
  def change
       add_column :users, :level, :integer
  end
end
