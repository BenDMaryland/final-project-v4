class CreateBugs < ActiveRecord::Migration[6.1]
  def change
    create_table :bugs do |t|
      t.integer :progress
      t.integer :urgency
      t.integer :priority
      t.string :bug_data
      t.string :bug_title
      t.belongs_to :sprint, null: false, foreign_key: true
      t.string :slug
      t.string :completed_comment
      t.references :created_by, foreign_key: {to_table: "users"}
      t.references :completed_by, foreign_key: {to_table: "users"}
      t.datetime :completed_at
      t.boolean :completed

      t.timestamps
    end
  end
end
