Gallery::Application.routes.draw do
  resources :photo_galleries do
    resources :photos, :only => [:index]
  end
  resources :photos, :except => [:index]
  root to: "static_pages#root"
end
