class PhotoGallery < ActiveRecord::Base
  attr_accessible :description, :title, :gallery_img

  validates_presence_of :title
  validates_length_of :title, :maximum => 75
  validates_length_of :description, :maximum => 400

  has_many :photos,
  		:inverse_of => :photo_gallery

  has_attached_file :gallery_img, :styles => {
  	:default_url => "https://s3-us-west-1.amazonaws.com/gallery-development/End-of-Watch+blinkbox.jpg",
  	:big => "500x500>",
  	:medium => "300x300>",
  	:small => "150x150>"
  }
end