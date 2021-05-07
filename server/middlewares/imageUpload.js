const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

const path = require('path')

function fileFilter (req, file, cb) {
    let type = file.mimetype.split('/')[0]
    if(type === 'image'){
        cb(null, true)
    }
    else{
        cb(null, false)
    }
   
}


const uploadImage = ()=>{
    let dest = path.join(__dirname, '../uploads')
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, dest)
        },
        filename: function (req, file, cb) {
            let typeFile = file.mimetype.split('/')[1]
            cb(null, uuidv4()+'.jpg')
        }
      })
    const upload = multer({storage:storage, fileFilter})
    return [
        upload.single('image'),
        (req, res, next) =>{
            req.image = req.file.filename
            next()
        }
    ]
}

module.exports = uploadImage