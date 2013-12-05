window.Gallery = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
  	this.$rootEl = options.$rootEl
    this.PhotoGalleries = new Gallery.Collections.PhotoGalleries();
    var galleryRouter = new Gallery.Routers.galleryRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Gallery.initialize();
});
