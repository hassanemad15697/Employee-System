export class Employee {

  id : number;
  name : string;
  gender : string;
  age : string;
  phone : string;
  address : string;
  createdDate : Date;
  lastUpdateDate : Date;


  constructor(id: number, name: string, gender: string, age: string, phone: string, address: string, createdDate: Date, updatedDate: Date) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.createdDate = createdDate;
    this.lastUpdateDate = updatedDate;
  }
}
