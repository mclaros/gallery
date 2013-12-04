class PhotosController < ApplicationController
	def index
		@photos = Photo.where(:photo_gallery_id => params[:photo_gallery_id])
		render :json => @photos
	end

	def show
		@photo = Photo.find(params[:id])
		render :json => @photo
	end

	def new
		@galleries = PhotoGallery.all
		render :new
	end

	def create
		@photo = Photo.new(params[:photo])

		if @photo.save
			render :json => @photo
		else
			redirect_to new_photo_url
		end
	end

	def edit

	end

	def update

	end

	def destroy

	end
end
