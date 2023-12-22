import Phone from "../models/phone.js";
import express from 'express';
import fs from 'fs';
import readline from 'readline';
import path from 'path';

import getInfo from '../utils/get.js';

const router = express.Router();


//查找
router.get('/findone', async (req, res) => {
    const { phoneNum } = req.query;
    const phone = await Phone.findPhone(phoneNum);
    if (phone) {
        res.send({
            code: 0,
            msg: '查找成功',
            data: phone
        })
    } else {
        res.send({
            code: -1,
            msg: '查找失败'
        })
    }
})

//查找所有
router.get('/findall', async (req, res) => {
    const phone = await Phone.find();
    if (phone) {
        res.send({
            code: 0,
            msg: '查找成功',
            data: phone
        })
    } else {
        res.send({
            code: -1,
            msg: '查找失败'
        })
    }
})





//根据文件增加数据
router.get('/addByFile', async (req, res) => {
    //从phone.txt中读取手机号
    const __dirname = path.resolve('cnp');
    const filePath = path.resolve(__dirname, '../phone.txt');

    const fileStream = fs.createReadStream(filePath)
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let phoneNum = []

    try {
        for await (const line of rl) {
            // console.log(line);
            phoneNum.push(line)
        }
        console.log(phoneNum);
    } catch (error) {
        console.log(error)
    }

    //遍历phoneNum，添加数据
    try {
        phoneNum.forEach(ele => {
            Phone.addPhone(ele)
        })

        // 返回成功添加
        res.send({
            code: 0,
            msg: '添加成功',
        })
    } catch (error) {
        res.send({
            code: -1,
            msg: '添加失败',
        })

    }


});


// 执行任务
router.get('/run', async (req, res) => {
    //从数据库中查找所有isAnalyis = false 的手机号
    const targetList = await Phone.find({ isAnalysis: false });
    // 将targetList中的手机号存入数组
    const workNum = targetList.map(ele => ele.phoneNum)
    console.log('====', workNum)
    // 将每一个元素都使用promise.all 的方法传入getInfo
    try {
        const result = await Promise.all(workNum.map(ele => getInfo(ele)))
        console.log(result)
        res.send({
            code: 0,
            msg: '执行成功',
            data: result
        })
    } catch (error) {
        res.send({
            code: -1,
            msg: '执行失败',
        })

    }


});


router.get('/deleteAll',async (req,res)=>{
    const result = await Phone.deleteAll()
    console.log(result)
    res.send({
        code: 0,
        msg: '删除成功',
        data: result
    })
})




export default router;