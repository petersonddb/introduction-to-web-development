# frozen_string_literal: true

class ApiVersionConstraint
  def initialize(version:, default:)
    @version = version
    @default = default
  end

  def matches?(request)
    @default || request.headers
                       .fetch(:Accept, '')
                       .include?("application/vnd.railsapilab.v#{@version}")
  end
end
