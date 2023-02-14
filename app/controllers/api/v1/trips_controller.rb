class Api::V1::TripsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @trips = Trip.all
    render json: @trips
  end

  def show
    @trip = Trip.find(params[:trip_id])

    respond_to do |_format|
      render json: { json: @trip }
    end
  end
end
