Gallery.Views.NewGallery = Backbone.View.extend({
	template: JST["photo_galleries/gallery_form"],

	render: function () {
		var renderedTemp = this.template();

		this.$el.html(renderedTemp);
		return this;
	}
});