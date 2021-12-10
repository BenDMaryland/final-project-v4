class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :summary
      t.string :progress
      t.string :integer

      t.timestamps
    end
  end
end
