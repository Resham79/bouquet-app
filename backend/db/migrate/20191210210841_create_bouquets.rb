class CreateBouquets < ActiveRecord::Migration[6.0]
  def change
    create_table :bouquets do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.string :price
      t.string :img_url

      t.timestamps
    end
  end
end
