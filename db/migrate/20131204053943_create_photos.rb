class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :photo_gallery_id, :null => false
      t.string :title, :limit => 75, :null => false
      t.string :description, :limit => 400

      t.timestamps
    end
  end
end
