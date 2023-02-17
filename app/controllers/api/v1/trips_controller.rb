class Api::V1::TripsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def create
    @trip = Trip.new(trip_params)
    @trip.user = current_user

    if @trip.save
      # Below line for authentication
      @token = encode_token(user_id: @user.id)
      render json: @trip, notice: 'Trip was successfully created.'
    else
      render json: { errors: @trip.errors }, status: :unprocessable_entity
    end
  end

  def index
    @trips = Trip.all
    render json: @trips
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    head :no_content
  end

  def show
    @trip = Trip.find(params[:trip_id])

    render json: { json: @trip }
  end

  private

  def trip_params
    params.require(:trip).permit(:trip_id, :user_id, :start_date, :end_date, :trip_thumbnail, :trip_review,
                                 :destination)
  end
end
