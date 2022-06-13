//Encapsulation-TASK
class Employee {
  constructor() {
    var name;
    var salary;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getSalary() {
    return this.salary;
  }
  setSalary(salary) {
    this.salary = salary;
  }

}
var employee = new Employee();
employee.setName("Zivar");
employee.setSalary
employee.setSalary(2000);
document.writeln(employee.getName() + " " + employee.getSalary()+ (' AZN'));  



//INHERITANCE-TASK//

function Wheat(food)  
{  
    this.food=food;   
}  
  
Wheat.prototype.getFood=function()  
{  
  return this.food;  
}  

function Cake(name,price) {  
 this.name=name;  
  this.price=price;  
  }   
var wheat = new Wheat("Bread");  
Cake.prototype=wheat; 
var cake=new Cake("sweet",20);  
document.writeln(cake.getFood()+" "+cake.name+" "+cake.price);  