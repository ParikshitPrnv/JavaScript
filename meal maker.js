let menu={
  _courses:{
    _appetizers:[],
    _mains:[],
    _desserts:[],
    get appetizers(){
      return this._appetizers;
    },
    set appetizers(arr){
      this._appetizers=arr;
    },
    get mains(){
      return this._mains;
    },
    set mains(arr){
      this._mains=arr;
    },
    get desserts(){
      return this._desserts;
    },
    set desserts(arr){
      this._desserts=arr;
    }
  },
  get courses(){
    return this._courses;
  },
  addDishCourse(courseName,dishName,dishPrice){
    dish={name:dishName,price:dishPrice};
    menu._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    //console.log(this._courses[courseName]);
    dishes=this._courses[courseName];
    //console.log(dishes.length);
    index=Math.floor(Math.random()*dishes.length);
    //console.log(index);
    return dishes[index];
  },generateRandomMeal(){
    appetizer=this.getRandomDishFromCourse('appetizers');
    main=this.getRandomDishFromCourse('mains');
    dessert=this.getRandomDishFromCourse('desserts');
  //console.log(appetizer.price);
  total=appetizer.price+main.price+dessert.price;
  return appetizer.name+' '+main.name+' '+dessert.name+'\n Price: '+total;
  }
};

menu.addDishCourse('mains','rice',50);
menu.addDishCourse('desserts','ice_cream',80);
menu.addDishCourse('appetizers','coke',30);
menu.addDishCourse('mains','malai-kofta',180);
//console.log(menu.courses);
console.log(menu.generateRandomMeal());