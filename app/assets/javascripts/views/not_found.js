Gallery.Views.NotFound = Backbone.View.extend({
	template: JST["not_found"],

	initialize: function (options) {
		this.invalidURL = options.invalidURL;
	},

	render: function () {
		var renderedTemp = this.template({
			invalidURL: this.invalidURL
		});

		this.$el.html(renderedTemp);
		return this;
	}
})