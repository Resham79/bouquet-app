Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  #list of all the bouquets
  get '/bouquets', to: 'bouquets#index' 

  #show a single bouquet info
  get '/bouquets/:id', to: 'bouquets#show'

  resources :users

  post '/login', to: 'auth#create'

  # #list of all the users
  # get '/users', to: 'users#index' 

  # #form for creating a new user
  # get '/users/new' , to: 'users#new'

  # #show a single user info
  # get '/users/:id', to: 'users#show'

  # #create a new user
  # post '/users', to: 'users#create'




end
