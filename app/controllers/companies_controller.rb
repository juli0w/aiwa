class CompaniesController < ApplicationController
  before_filter :authenticate_admin!, except: :index
  
  def index
    @current_menu = :companies
  end
  
  def list
    @current_menu = :companies_list
  end
end