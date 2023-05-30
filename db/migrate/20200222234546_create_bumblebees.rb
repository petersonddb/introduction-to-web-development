class CreateBumblebees < ActiveRecord::Migration[6.0]
  def change
    create_table :bumblebees do |t|
      t.string :preferred_flower

      t.timestamps
    end
  end
end
