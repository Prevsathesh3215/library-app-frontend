const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')



const app = express()


// const upload =  multer({
//   dest: '/Users/Public/Downloads',
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname)
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName); // Preserves the original name and extension
//   }
// })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/Users/Public/library-storage'); // Ensure this folder exists
    // console.log(cb(null, '/Users/Public/Downloads'))
  },
  filename: (req, file, cb) => {
    let date = new Date();
    date = date.toISOString()
    const uniqueName = `${file.originalname}`;
    cb(null, uniqueName); // Preserves the original name and extension
  },
})


const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Only accept .pdf files
    const fileType = /pdf/;
    const extname = fileType.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileType.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only .pdf files are allowed!'));
    }
  },
});

// const corsOptions = {
//   origin: 'http://127.0.0.1:5500', // Allow only requests from this origin
//   methods: 'GET,POST, PUT, DELETE', // Allow only these methods
//   allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
// };

//security middleware
app.use(cors({
  origin: 'http://127.0.0.1:5500', // use your actual domain name (or localhost), using * is not recommended
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
}))

const bookRouter = require('./routes/bookRoutes.js')
const categRouter = require('./routes/categRoutes.js')
const borrowerRouter = require('./routes/borrowerRouter.js')
const regisUserRouter = require('./routes/regisUserRoutes.js')

//allow json to be sent and used
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/books', bookRouter)
app.use('/api/categ', categRouter)
app.use('/api/borrow', borrowerRouter)
app.use('/api/users', regisUserRouter)
// app.options('/api/users/register', cors());


app.post('/api/upload', upload.single('file'), (req, res) => {

  // res.redirect('/api/upload');
  if(req.file){
    console.log(req.file)
    res.json({data: 'success'})
  }
  else{
    res.status(401).json({
      success: false,
      error: 'No file'
    })
  }


})



const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})