class CreateKbas < ActiveRecord::Migration[6.1]
  def change
    create_table :kbas do |t|
     t.text :kbatext
      t.integer :user_id
      t.string :category
      t.string :kba_title
      t.timestamps
    end
  end
end
