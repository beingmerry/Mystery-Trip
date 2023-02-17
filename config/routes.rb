Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :index] do
        member do
          post 'add_friend'
        end
      end
      post 'login', to: 'auth#create'
      get 'profile', to: 'users#profile'
      resources :trips, only: [:index, :create, :show, :update, :destroy]
      resources :activities
      resources :days
    end
  end
end
