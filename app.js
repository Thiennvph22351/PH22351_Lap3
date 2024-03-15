const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const sinhvienRoute=require('./routes/sinhvienRoute');

const app=express();
//ket noi mongodb
mongoose.connect('mongodb+srv://thiennvph22351:Thienvb1999@cluster0.8wgkgru.mongodb.net/and103?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Kết nối thành công với server");
}).catch((err)=>{
    console.error(err);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//su dung route
app.use('/', sinhvienRoute);
//goi den file ejs
app.set('view engine', 'ejs');
//tao port
const PORT=process.env.PORT||5000;
//chay sever
app.listen(PORT,()=>{
    console.log("server dang chay o cong 5000");
});
