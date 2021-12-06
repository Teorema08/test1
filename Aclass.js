class Aclass {
  constructor(n) {
    this.n = n;
    this.numbers = new Array(n);
    this.fill(n);
  }


  defaultCompare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }

  f(a) {
    return (a != 1) ? a * this.f(a - 1) : 1;
  }

  fill(n) {
    for (let i = 0; i < n; i++) this.numbers[i] = Math.floor(1 + Math.random() * 10);
    // Заполняет массив случайными числами (DONE)
    // Можно вызвать только из методов класса Aclass
  }

  factorial() {
    let arr = new Array(this.n);
    for (let i = 0; i < this.n; i++) arr[i] = this.f(this.numbers[i]);
    return arr;
    // Возвращает массив факториалов из массива намберс (DONE)
    // Vожно вызывать из Aclass и дочерных классов 
  }

  sort() {
    // Абстрактный
  }
}
