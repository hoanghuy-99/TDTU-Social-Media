const Department = require('../models/Department')

exports.getManyDepartments =  async (req, res)=>{
    const departments = await Department.find()
    res.json({
        code: 0,
        data: departments.map(d =>({
            id: d.id,
            name:d.name
        }))
    })
}