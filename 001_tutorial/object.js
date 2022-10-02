class book {
  constructor(
    title,
    author,
    ISBN,
    pubYear,
    pageNumber,
    currentPage,
    readStatus
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.pubYear = pubYear;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage,
    this.readStatus = readStatus
  }

  updateCurrentPage(newCurrentpage) {
    this.currentPage = newCurrentpage;
  }

  updateReadStatus(newReadStates){
    this.newReadStates = newReadStates;
  }
}

export default book;
