
const book = {
  title: "Dəli yığıncağı",
  author: "Cəlil Məmmədquluzadə",
  pageCount: 120,
  getBookInfo() {
    return `${this.title} kitabı ${this.author} tərəfindən yazılıb və ${this.pageCount} səhifədir.`;
  }
};
console.log(book.getBookInfo());

const student = {
  name: "Aysel",
  exam1: 75,
  exam2: 85,
  checkStatus() {
    const average = (this.exam1 + this.exam2) / 2;
    if (average >= 80) {
      return `${this.name}: Əlaçı!`;
    } else {
      return `${this.name}: Adi tələbə`;
    }
  }
};
console.log(student.checkStatus());

const shoppingCart = {
  itemPrice: 50,
  quantity: 3,
  hasDiscountCode: true,
  calcFinalPrice() {
    let total = this.itemPrice * this.quantity;
    if (this.hasDiscountCode === true) {
      total = total - total * 0.1;
    }
    return `Ödəniləcək yekun məbləğ: ${total} AZN`;
  }
};
console.log(shoppingCart.calcFinalPrice());