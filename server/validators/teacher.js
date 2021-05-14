module.exports.TeacherCreateSchema = {
    type: 'object',
    properties:{
        name: 'string',
        username: { type:'string'},
        password: { type:'string' },
        departments: { 
            type: 'array', 
            items: {
                type: 'string'
            } 
        },
        role: { type:'string', enum:['admin', 'teacher']
    }
}