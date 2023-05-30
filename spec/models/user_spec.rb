# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it { is_expected.to allow_value('any_email@valid.com').for(:email) }
    it { is_expected.not_to allow_value('any_invalid_email').for(:email) }
    it { is_expected.to validate_presence_of(:password) }
  end
end
