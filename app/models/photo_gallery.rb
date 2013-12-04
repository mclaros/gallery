class PhotoGallery < ActiveRecord::Base
  attr_accessible :description, :title

  validates_presence_of :title
  validates_length_of :title, :maximum => 75
  validates_length_of :description, :maximum => 400

  has_many :photos,
  		:inverse_of => :photo_gallery
end
