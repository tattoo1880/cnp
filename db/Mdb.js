import mongoose from 'mongoose'



const url = 'mongodb+srv://tattoo186225345941:Qwerty7788421@cluster0.cf73hmy.mongodb.net/?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('成功连接到 MongoDB 使用 Mongoose');
    } catch (err) {
        console.error('连接错误', err);
        // 可以选择在这里退出应用
        process.exit(1);
    }
};

export default connectDB;


