const Student = require('../models/student.model');
const studentDAO = {}

studentDAO.getAll = async function getAll(){
    const students = Student.find();
    return students;
}

studentDAO.getOne = async function getOne(cn){
    const student = await Student.findOne({controlnumber: cn});
    return student;
    
};

studentDAO.insertOne = async(student) => {
    const studentSaved = new Student(student);
    await studentSaved.save();
    return "student saved";
}

module.exports = studentDAO;