class AddTeamsColumnProject < ActiveRecord::Migration[6.1]
  def change
    add_reference :projects, :belongs_to, foreign_key: { to_table: :teams }
  end
end
