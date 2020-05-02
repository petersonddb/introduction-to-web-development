# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'POST #create' do
    subject(:post_create) { post :create, params: params }

    context 'with valid params' do
      let(:params) { Fabricate.attributes_for(:user) }

      it { is_expected.to have_http_status :created }
      it { expect { post_create }.to change(User, :count).by 1 }

      describe 'response' do
        subject(:the_response) do
          post_create

          JSON.parse(response.body, symbolize_names: true)
        end

        it { expect(the_response.keys).to contain_exactly(:id) }

        it 'is expected id not to be nil' do
          expect(the_response[:id]).not_to be_nil
        end
      end

      describe 'created user' do
        subject(:created_user) do
          post_create
          the_response = JSON.parse(response.body, symbolize_names: true)

          User.find(the_response[:id])
        end

        it { expect(created_user.email).to eq params[:email] }
      end
    end

    context 'with invalid params' do
      let(:params) { Fabricate.attributes_for(:invalid_user) }

      it { is_expected.to have_http_status :unprocessable_entity }
      it { expect { post_create }.not_to change(User, :count) }

      describe 'response' do
        subject(:the_response) do
          post_create

          JSON.parse(response.body, symbolize_names: true)
        end

        it { expect(the_response.keys).to contain_exactly(:errors) }

        it 'is expected errors to have the correct errors' do
          expect(
            the_response[:errors].keys
          ).to contain_exactly(:email, :password)
        end

        it 'is expected email errors to have the correct messages' do
          expect(
            the_response[:errors][:email]
          ).to match_array(["can't be blank"])
        end

        it 'is expected password errors to have the correct messages' do
          expect(
            the_response[:errors][:password]
          ).to match_array(["can't be blank"])
        end
      end
    end
  end
end
