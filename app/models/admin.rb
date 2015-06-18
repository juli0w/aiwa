class Admin < ActiveRecord::Base
  devise :database_authenticatable, :trackable

  attr_accessible :email, :password, :password_confirmation, :remember_me
end
