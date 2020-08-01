Rails.application.routes.draw do
  root 'landing#show'

  resource :landing, controller: :landing
end
