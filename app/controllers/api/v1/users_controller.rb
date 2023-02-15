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

  def show
    @user = User.find(params[:id])
    render json: { user: LoggedInUserSerializer.new(@user) }, status: :accepted
  end

  # POST /signup, create new user
  def create
    @user = User.create(user_params.merge(avatar: assign_random_avatar))
    if @user.valid?
      # Below line for authentication
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  private

  # assigning random avatar to user at creation
  def assign_random_avatar
    avatar_number = rand(1..6) # generate a random number from 1 to 6
    # './src/avatars/avatar_1.png'
    "./src/avatars/avatar_#{avatar_number}.png" # construct the file path to the selected avatar
  end

  def user_params
    # need to add bio back in somewhere on user side (after creation)
    params.require(:user).permit(:username, :password, :location, :email, :bio)
  end
end
