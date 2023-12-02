function CreateAuthor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  function CreateBook(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author.name}, Genre: ${this.genre}, Price: ${this.price}`);
  };
  
  let author1 = new CreateAuthor("The India Story'", 1999, "Bimal Jalal");
  let book1 = new CreateBook("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 15.99);
  let author2 = new CreateAuthor("'A Place Called Home'", 1964, "Preeti Shenoy");
  let book2 = new CreateBook("The Da Vinci Code", author2, "Mystery", 12.99);
  
  book1.getBookInfo();
  book2.getBookInfo();