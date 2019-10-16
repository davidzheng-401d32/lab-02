'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  
  /**
   * Method reindex - resets the index of the list from 0 to -1
   * @param acc
   * @param val
   * @param idx
   * @returns {acc}
   */
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
   * Push - adds one one or more elements to the end of an array
   * @param item 
   * @returns {number}
   */
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }
  
  /**
   * Pop - removes last element from an array, and return that element 
   * @returns {element}
   */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  
  /**
   * Shift - removes first element from an array, and return that element 
   * @returns {element}
   */
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  /**
   * Unshift - adds one or more element to the beginning of the array
   *@param item
   *@returns {number}
   */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
   * forEach - excutes a provided function once for each array element 
   * @param callback 
   */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
   * map - creates a new array with the results of calling a provided function in the original array
   * @param callback
   * @returns {array}
   */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
   * filter - creates a new array with all the elements that pass by the provided function
   * @param callback
   * @returns {array}
   */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }
  
  /**
   * reduce - excutes a reducer function on each element of the array, resulting in a single output value
   * @param {*} callback 
   * @param {*} state 
   * @returns {state}
   */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;
