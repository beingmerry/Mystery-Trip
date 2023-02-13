class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # GET /api/v1/users, may want to eliminate or reduce to friends
  # ⚠️ only ADMIN role where once authorized, can view all users, add PARTICIPANT role
  def index
    @users = User.all
    render json: { users: @users }, status: :ok
  end

  def profile
    render json: { user: UserSerializer.new(@user) }, status: :accepted
  end

  # POST /signup, create new user
  def create
    @user = User.create(user_params)
    if @user.valid?
      # Below line for authentication
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    # need to add in email if adding on mailer, cell phone if doing sms
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end
