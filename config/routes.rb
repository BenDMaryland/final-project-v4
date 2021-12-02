Rails.application.routes.draw do
  resources :comments
  resources :features
  resources :bugs
  resources :users
  resources :sprints

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/hello", to: "application#hello_world"
end
