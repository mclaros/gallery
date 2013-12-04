class Photo < ActiveRecord::Base
  attr_accessible :description, :title, :photo_gallery_id

  validates_presence_of :title, :photo_gallery_id
  validates_length_of :title, :maximum => 75
  validates_length_of :description, :maximum => 400

  belongs_to :photo_gallery,
  			:inverse_of => :photo
end
