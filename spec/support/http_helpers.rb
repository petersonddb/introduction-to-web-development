# frozen_string_literal: true

module HttpHelpers
  def json_parsed_response
    yield if block_given?

    JSON.parse(response.body, symbolize_names: true)
  end
end
