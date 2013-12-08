Gallery.Routers.GalleryRouter = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "renderGalleriesIndex",
		"galleries": "renderGalleriesIndex",
		"galleries/new": "renderNewGallery",
		"galleries/:id": "renderGalleryShow",
		"test/upload": "renderTestUpload",
		"*route": "renderNotFound"
	},

	renderGalleriesIndex: function () {
		Gallery.PhotoGalleries.fetch({
			success: function () {
				var galleriesIndex = new Gallery.Views.GalleriesIndex({
					collection: Gallery.PhotoGalleries
				});

				this._swapView(galleriesIndex);
			}.bind(this),

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

	renderGalleryShow: function (id) {
		//this will fail if you try to access show page directly, without fetching at index
		var gallery = Gallery.PhotoGalleries.get(id);
		var galleryShow = new Gallery.Views.GalleryShow({
			model: gallery
		});
		this._swapView(galleryShow);
	},

	renderNewGallery: function () {
		var newGallery = new Gallery.Views.NewGallery();
		this._swapView(newGallery);
	},

	renderTestUpload: function () {
		var upload = new Gallery.Views.Upload();
		this._swapView(upload);
	},

	renderNotFound: function (url) {
		var notFound = new Gallery.Views.NotFound({
			invalidURL: url
		});
		this._swapView(notFound);
	},

	_swapView: function (newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		this.$rootEl.html(this._currentView.render().$el);
	}

});