// Requiring mongoose
const mongoose = require('mongoose');

// Connecting to server
mongoose.connect("mongodb://localhost:27017/employeeDB", { useNewUrlParser: true});

// Creating Schema
const employeeSchema = new mongoose.Schema({
  _id: Number,
  Name: String,
  Age: Number,
});

// Making employee collection
const Employee = mongoose.model("Employee", employeeSchema);

// Adding employee data
const raghav = new Employee({
  _id: 1,
  Name: "Raghav",
  Age: 22
});

const jhon = new Employee({
  _id: 2,
  Name: "Jhon",
  Age: 24
});

// raghav.save();
// jhon.save();

// Read data
Employee.find(function(err, employee){
  if(err){
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(employee);
  }
});

// update
Employee.updateOne({_id:1}, {Name:"Raghav Sharma"}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully updated")
  }
})

// Delete
Employee.deleteOne({_id:2}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully deleted");
  }
})
