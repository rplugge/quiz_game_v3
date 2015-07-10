CONNECTION = SQLite3::Database.new("quiz_game.db")

CONNECTION.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, question TEXT NOT NULL, answer_id INTEGER NOT NULL, FOREIGN KEY(answer_id) REFERENCES answers(id));")
CONNECTION.execute("CREATE TABLE IF NOT EXISTS answers (id INTEGER PRIMARY KEY, answer_text TEXT NOT NULL, question_id INTEGER NOT NULL, FOREIGN KEY(question_id) REFERENCES answers(id));")


CONNECTION.results_as_hash = true
