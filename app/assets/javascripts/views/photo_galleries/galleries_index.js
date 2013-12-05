Gallery.Views.GalleriesIndex = Backbone.View.extend({
	template: JST["galleries_index"],

	render: function () {
		var renderedTemp = this.template({
			galleries: this.collection
		});

		this.$el.html(renderedTemp);
		return this;
	}
});