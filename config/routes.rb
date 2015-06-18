Aiwa::Application.routes.draw do
  devise_for :admins, path_names: { sign_in: 'login', sign_out: 'logout' }

  get :index, to: "home#index"
  get :about, to: "home#about"
  get :contact, to: "home#contact"
  
  resources :companies do
    collection do
      get :list
    end
  end
 
  root :to => 'home#index'
end
