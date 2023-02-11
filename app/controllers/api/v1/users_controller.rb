class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: { users: @users }, status: :ok
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, status: :created
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
