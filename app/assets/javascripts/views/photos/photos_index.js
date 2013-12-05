Gallery.Views.PhotosIndex = Backbone.View.extend({
	template: JST["photos/photos_index"],

	render: function () {
		var renderedTemp = this.template({
			photos: this.collection
		});

		this.$el.html(renderedTemp);
		return this;
	}
});