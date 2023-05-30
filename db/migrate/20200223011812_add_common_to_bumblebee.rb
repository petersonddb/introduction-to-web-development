class AddCommonToBumblebee < ActiveRecord::Migration[6.0]
  def change
    add_column :bumblebees, :common, :boolean
  end
end
