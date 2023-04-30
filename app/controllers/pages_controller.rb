class PagesController < ApplicationController

  def book
    @latitude = session[:latitude] || 12.972442
    @longitude = session[:longitude] || 77.580643
    @api_key = 'GOOGLE_MAPS_API_KEY'
  end

  def update_latitude
    latitude = params[:latitude]
    longitude = params[:longitude]
    session[:latitude] = latitude
    session[:longitude] = longitude
    head :ok
  end
  
  def booked
    render 'booked'
  end

end
