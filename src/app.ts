const express = require('express')
require('dotenv').config();
const cors = require('cors');  
var cookieParser = require('cookie-parser')
const passport = require('passport');    // authencation
const route = require('./routes/index');
const app = express();


app.use(express.json());    // đọc và gởi dữ liệu dạng json
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true })); // xử lý dữ liệu từ client gởi lên từ form khi submit mặc định

app.use(cors({
    origin: "*",
    methods: 'GET, POST, PUT, DELETE, OPTIONS,PATCH',
    allowedHeaders: "Accept,authorization,Authorization, Content-Type"
}));

app.use(cookieParser())
// app.use(morgan('combined'));     // log lại những yêu cầu request
const PORT = 3000;
route(app);
app.listen(PORT, () => console.log(`lang nghe tren cong${PORT}`));
module.exports = app;

