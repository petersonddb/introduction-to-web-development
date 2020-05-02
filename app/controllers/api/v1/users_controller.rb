# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def create
        @user = User.new(user_params)
        return render json: { id: @user.id }, status: :created if @user.save

        render json: { errors: @user.errors }, status: :unprocessable_entity
      end

      private

      def user_params
        params.permit(:email, :password)
      end
    end
  end
end
