# frozen-string-literal: true

Rails.application.routes.draw do
  resources :bumblebees, only: %i[index create]
end
