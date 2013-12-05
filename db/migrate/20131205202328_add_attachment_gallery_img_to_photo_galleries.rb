class AddAttachmentGalleryImgToPhotoGalleries < ActiveRecord::Migration
  def self.up
    change_table :photo_galleries do |t|
      t.attachment :gallery_img
    end
  end

  def self.down
    drop_attached_file :photo_galleries, :gallery_img
  end
end
