class CreatePhotoGalleries < ActiveRecord::Migration
  def change
    create_table :photo_galleries do |t|
      t.string :title, :limit => 75, :null => false
      t.string :description, :limit => 400

      t.timestamps
    end
  end
end
