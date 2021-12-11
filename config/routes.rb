Rails.application.routes.draw do
  resources :comments
  resources :features
  resources :bugs
  resources :users
  resources :sprints

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
