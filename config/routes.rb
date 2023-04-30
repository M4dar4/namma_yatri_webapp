Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'pages#main'
  post 'pages/update_latitude'
  get 'book', to: 'pages#book'
  get '/pages/booked', to: 'pages#booked'
end
