const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/info', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  subjects: [String]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

// Array of student data
const studentsData = [
  {
    name: 'Lilly',
    age: 17,
    grade: '12th',
    subjects: ['Maths', 'Physics', 'Chemistry']
  },
  {
    name: 'Priya',
    age: 16,
    grade: '12th',
    subjects: ['Biology', 'Physics', 'Chemistry']
  },
  {
    name: 'Manny',
    age: 17,
    grade: '12th',
    subjects: ['Maths', 'Economics', 'Civics']
  },
  {
    name: 'Sohan',
    age: 17,
    grade: '12th',
    subjects: ['Maths', 'Physics', 'Chemistry']
  },
  {
    name: 'Pooja',
    age: 17,
    grade: '12th',
    subjects: ['Biology', 'Physics', 'Chemistry']
  },
  {
    name: 'Ria',
    age: 17,
    grade: '12th',
    subjects: ['Humanities','Economics','History']
  }
];

// Save each student data to MongoDB
Student.insertMany(studentsData)
  .then(() => {
    console.log('Student data saved successfully');
  })
  .catch((error) => {
    console.error('Error saving student data:', error);
  });
