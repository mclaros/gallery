class PhotoGalleriesController < ApplicationController
	def index
		@galleries = PhotoGallery.all
		render :json => @galleries
	end

	def show
		@gallery = PhotoGallery.find(params[:id])
		reder :json => @gallery
	end

	def new
		render :new
	end

	def create
		@gallery = PhotoGallery.new(params[:photo_gallery])

		if @gallery.save
			redirect_to :index
		else
			redirect_to :new
		end
	end

	def edit

	end

	def update

	end

	def destroy

	end
end
