class AddTeamsColumnUser < ActiveRecord::Migration[6.1]
  def change
  add_reference :users, :member_of, foreign_key: { to_table: :teams }
  end
end
