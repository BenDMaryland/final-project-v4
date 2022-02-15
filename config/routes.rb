Rails.application.routes.draw do
  resources :comments
  resources :features
  resources :bugs
  resources :users
  resources :sprints
  resources :projects
  resources :kbas
  resources :teams


 post "/signup", to: "users#create"
  get "/me", to: "users#me"
 
  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
