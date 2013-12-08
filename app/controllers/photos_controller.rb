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
		@parent_gallery = PhotoGallery.find(params[:photo_gallery_id])
		photo_titles, photo_descrips = params[:photo].values
		photo_data_sets = photo_titles.zip(photo_descrips)
		photo_data_sets.each do |title, description|
			@parent_gallery.photos.new(title: title, description: description)
		end

		if @parent_gallerys.save
			render :json => @parent_gallery
		else
			render :json => @parent_gallery.errors.full_messages.to_json
		end
	end

	def edit

	end

	def update

	end

	def destroy

	end
end
