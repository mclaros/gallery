Gallery.GalleryRouter = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "renderGalleriesIndex"
	},

	renderGalleriesIndex: function () {
		Gallery.PhotoGalleries.fetch({
			success: function () {
				var galleriesIndex = new Gallery.Views.GalleriesIndex({
					collection: Gallery.PhotoGalleries
				});

				debugger
			},

			error: function (collection, response, options) {
				console.log("collection is");
				console.log(collection);
				console.log("response is");
				console.log(response);
				console.log("options are");
				console.log(options);
			}
		})
	},

	_swapView: function (newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		this.$rootEl.html(this._currentView);
	}

});