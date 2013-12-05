Gallery.Views.GalleriesIndex = Backbone.View.extend({
	template: JST["photo_galleries/galleries_index"],

	render: function () {
		var renderedTemp = this.template({
			galleries: this.collection
		});

		this.$el.html(renderedTemp);
		return this;
	}
});