const studentDAO = require('../DAO/student.dao');
const StudentController = {}


StudentController.getAll = async(req, res) => {
    studentDAO.getAll()
    .then(students => {
        res.json(students)
    })
    .catch(err => {
        res.json({
            status: "reques failed"
        }); 
    });

}

StudentController.getOne = async(req, res) => {
    studentDAO.getOne(req.params.cn)
    .then(student => {
        if(student != null)
            res.json(student)
        else
            res.json({
                status: "not found"
        });
    })
    .catch(err => {
        res.json(err);
    });

}

StudentController.insertOne = async(req, res) => {
    studentDAO.insertOne(req.body)
    .then(response => {
        res.json({
            status: response
        })
    })

    .catch(err => {
        res.json(err);
    });

}

module.exports = StudentController;