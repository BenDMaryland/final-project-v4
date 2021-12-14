class Addprojectidtosprints < ActiveRecord::Migration[6.1]
  def change
      add_column :sprints, :project_id, :integer
  end
end
