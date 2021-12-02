class CreateSprints < ActiveRecord::Migration[6.1]
  def change
    create_table :sprints do |t|
      t.integer :progress
      t.integer :urgency
      t.integer :priority
      t.string :sprint_title
      t.string :sprint_data
      t.string :slug
      t.datetime :goal_date
      t.string :completed_comment
      t.references :created_by, foreign_key: {to_table: "users"}
      t.references :completed_by, foreign_key: {to_table: "users"}
      t.datetime :completed_at
      t.boolean :completed

      t.timestamps
    end
  end
end
