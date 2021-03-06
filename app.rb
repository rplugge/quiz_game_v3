require "pry"
require "sinatra"
require "sinatra/reloader"

require "sqlite3"

require_relative "database_setup.rb"

require_relative "class_methods.rb"
require_relative "instance_methods.rb"

# Models
require_relative "models/question.rb"
require_relative "models/answer.rb"

# Controllers
require_relative "controllers/main.rb"