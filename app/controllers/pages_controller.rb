class PagesController < ApplicationController

  def book
    @latitude = session[:latitude] || 12.972442
    @longitude = session[:longitude] || 77.580643
    @api_key = 'AIzaSyA8UjIWteUt1xcSNbBTBdP1ysEj2vTXhiE'
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
