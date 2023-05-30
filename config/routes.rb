# frozen_string_literal: true

require 'api_version_constraint'

Rails.application.routes.draw do
  namespace :api do
    scope module: :v1,
          constraints: ApiVersionConstraint.new(version: 1, default: true) do
      resources :users, only: %i[create]
    end
  end
end
