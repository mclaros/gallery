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

	end

	def create

	end

	def edit

	end

	def update

	end

	def destroy

	end
end
