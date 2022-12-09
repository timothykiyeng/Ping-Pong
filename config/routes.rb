Rails.application.routes.draw do
  resources :comments
  resources :skill_sets

  get "/skill_sets", to: "skill_sets#index"
  get "/skill_sets", to: "skill_sets#show"

  get "/comments", to: "comments#index"
  post "/comments", to: "comments#create"
  patch "/comments", to: "comments#update"
  delete "/comments", to: "comments#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
