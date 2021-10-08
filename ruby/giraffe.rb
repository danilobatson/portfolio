ultimate=["Chang", 'Warren', 'Yip', 'Dan', 'Drew', "Ryan"]

states = {
  :CA => "California",
  "NY" => "New York",
  "CO" => "Colorado",
  "OR" => "Oregon"
 }

 class Book
  attr_accessor :title, :author, :pages
  def initialize(title, author, pages)
    @title = title;
    @author = author;
    @pages = pages;

  end
 end

book1 = Book.new("Bible", "The Lordt", "One Million")




puts book1
