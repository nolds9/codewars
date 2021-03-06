// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = []
    for(let i = 0; i < collection.length; i+= itemsPerPage){
      this.pages.push(collection.slice().splice(i, itemsPerPage))
    }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.pages.length
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return this.pages[pageIndex] ? this.pages[pageIndex].length : -1
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let {collection, itemsPerPage, pages } = this
  let item = collection[itemIndex]
  page = Math.floor(((itemIndex + 1) / itemsPerPage))
  return item ? page : -1
}
