module.exports.TeacherCreateSchema = {
    type: 'object',
    properties:{
        name: 'string',
        username: 'string',
        password: 'string',
        departments: { 
            type: 'array', 
            items: {
                type: 'string'
            } 
        },
        role: { type:'string', enum:['admin', 'teacher']}
    }
}