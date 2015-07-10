class Question
  
  include InstanceModule
  extend ClassModule
  
  attr_reader :id, :answer_id
  attr_accessor :question_text
  
  def initialize(options={})
    @id = options["id"]
    @question_text = options["question_text"]
    @answer_id = options["answer_id"]
  end
  
  
  
  
  
end