window.Gallery = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
  	var $rootEl = options.$rootEl
    this.PhotoGalleries = new Gallery.Collections.PhotoGalleries();
    var galleryRouter = new Gallery.Routers.GalleryRouter({
    	$rootEl: $rootEl
    });
    Backbone.history.start();
  }
};
