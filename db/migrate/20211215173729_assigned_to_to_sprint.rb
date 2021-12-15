class AssignedToToSprint < ActiveRecord::Migration[6.1]
  def change
     add_reference :sprints, :assigned_to, foreign_key: { to_table: :users }
  end
end
