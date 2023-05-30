# frozen_string_literal: true

require 'api_version_constraint'

RSpec.describe ApiVersionConstraint do
  subject do
    described_class.new(
      version: version,
      default: default
    )
  end

  describe 'given some http requests' do
    let(:one_version) { 1 }
    let(:another_version) { 2 }

    let(:no_version_req) { instance_double('no version request', headers: {}) }

    let(:one_version_req) do
      instance_double(
        'one version request',
        headers: {
          Accept: "application/vnd.railsapilab.v#{one_version}"
        }
      )
    end

    let(:another_version_req) do
      instance_double(
        'another version request',
        headers: {
          Accept: "application/vnd.railsapilab.v#{another_version}"
        }
      )
    end

    context 'with the constraint for one version' do
      let(:version) { one_version }

      context 'with a non default constraint' do
        let(:default) { false }

        describe '#matches?' do
          it { is_expected.to be_matches(one_version_req) }
          it { is_expected.not_to be_matches(another_version_req) }
          it { is_expected.not_to be_matches(no_version_req) }
        end
      end

      context 'with a default constraint' do
        let(:default) { true }

        describe '#matches?' do
          it { is_expected.to be_matches(one_version_req) }
          it { is_expected.to be_matches(another_version_req) }
          it { is_expected.to be_matches(no_version_req) }
        end
      end
    end
  end
end
