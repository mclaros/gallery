class Photo < ActiveRecord::Base
  attr_accessible :description, :title, :photo_img

  validates_presence_of :title, :photo_gallery, :photo_img
  validates_length_of :title, :maximum => 75
  validates_length_of :description, :maximum => 400

  belongs_to :photo_gallery,
  			:inverse_of => :photos

  has_attached_file :photo_img, :styles => {
  	:default_url => "https://s3-us-west-1.amazonaws.com/gallery-development/End-of-Watch+blinkbox.jpg",
  	:big => "500x500>",
  	:medium => "300x300>",
  	:small => "150x150>"
  }

end
