Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index]
      post 'users/:id/add_friend/:friend_id', to: 'users#add_friend'
      post 'login', to: 'auth#create'
      get 'profile', to: 'users#profile'
      resources :trips, only: [:index, :create, :show, :update, :destroy]
      resources :activities
      resources :days
    end
  end
end
