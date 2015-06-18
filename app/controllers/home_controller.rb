class HomeController < ApplicationController
  def index
    @current_menu = :index
  end
  
  def about
    @current_menu = :about
  end
  
  def contact
    @current_menu = :contact
  end
end