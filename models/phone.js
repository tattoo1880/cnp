import mongoose from 'mongoose';

const { Schema } = mongoose;

const phoneSchema = new Schema({
    phoneNum: {
        type: String,
        required: true,
        default: ''
    },
    isSignUp: {
        type: Boolean,
        required: true,
        default: false
    },
    isAnalysis: {
        type: Boolean,
        required: true,
        default: false
    },
});

//静态方法增删改查
phoneSchema.statics = {
    //查找
    async findPhone(phoneNum) {
        return await this.findOne({ phoneNum })
    },
    //增加
    async addPhone(phoneNum) {
        return await this.create({ phoneNum })
    },
    //更新
    async updatePhone(phoneNum, isSignUp, isAnalysis) {
        return await this.findOneAndUpdate({ phoneNum }, { isSignUp, isAnalysis })
    },
    //删除
    async deletePhone(phoneNum) {
        return await this.findOneAndDelete({ phoneNum })
    },
    //清空
    async deleteAll(){
        return await this.deleteMany({})
    }
}


const Phone = mongoose.model('Phone', phoneSchema);
export default Phone;