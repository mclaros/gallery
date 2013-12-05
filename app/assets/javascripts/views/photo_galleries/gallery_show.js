Gallery.Views.GalleryShow = Backbone.View.extend({
	template: JST["photo_galleries/gallery_show"],

	render: function () {
		var renderedTemp = this.template({
			gallery: this.model
		});

		this.$el.html(renderedTemp);

		var photosIndex = new Gallery.Views.PhotosIndex({
			this.get("photos")
		});
		this.$el.find("#photos-container").html(PhotosIndex.render().$el);

		return this;
	}
});