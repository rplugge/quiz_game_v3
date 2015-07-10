class Answer
  
  include InstanceModule
  extend ClassModule
  
  attr_reader :id
  attr_accessor :answer_text, :answer_letter
  
  def initialize(options={})
    @id = options["id"]
    @answer_text = options["answer_text"]
    @answer_letter = options["answer_letter"]
  end
  
  def add_to_database
    CONNECTION.execute("INSERT INTO answers (answer_text, answer_letter) VALUES ('#{self.answer_text}', '#{self.answer_letter}');")
    @id = CONNECTION.last_insert_row_id
  end
  
  def delete
    CONNECTION.execute("DELETE FROM answers WHERE id = #{self.id};")
  end
  
end