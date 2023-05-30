# frozen-string-literal: true

module Bumblebees
  class CalculateSocialStatusWorker
    include Sidekiq::Worker

    def perform(bumblebee_id)
      logger.info 'Starting Bumblebee Calculate Social Status Worker'
      Bumblebee.find(bumblebee_id).calculate_social_status
      logger.info 'Finishing Bumblebee Calculate Social Status Worker'
    end
  end
end
