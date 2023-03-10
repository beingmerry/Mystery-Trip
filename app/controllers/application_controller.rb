class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    # payload
    JWT.encode(payload, 'test_s3ctr3t')
  end

  def auth_header
    # { 'Authorization' : 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split[1]
      # headers: { 'Authorization' : 'Bearer <token>' }
      begin
        JWT.decode(token, 'test_s3ctr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      # decoded_token => [{"user_id": 1}, {"alg":"HS256"}]
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Please login' }, status: :unauthorized unless logged_in?
  end
end
