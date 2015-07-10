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
  
  def add_to_database
    CONNECTION.execute("INSERT INTO questions (question_text, answer_id) VALUES ('#{self.question_text}', #{self.answer_id})")
    @id = CONNECTION.last_insert_row_id
  end
  
  def answer
    answer = CONNECTION.execute("SELECT answer_text FROM answers WHERE id = #{answer_id}")[0]["answer_text"]
    answer = answer.split(", ")
  end
  
end