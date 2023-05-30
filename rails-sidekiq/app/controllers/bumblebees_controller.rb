# frozen-string-literal: true

class BumblebeesController < ApplicationController
  skip_forgery_protection

  def index
    @bumblebees = Bumblebee.all

    render json: @bumblebees
  end

  def create
    @bumblebee = Bumblebee.new(bumblebee_params)

    if @bumblebee.save
      Bumblebees::CalculateSocialStatusWorker.perform_async(@bumblebee.id)

      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def bumblebee_params
    params[:bumblebee].permit(:preferred_flower)
  end
end
