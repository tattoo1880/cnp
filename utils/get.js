import puppeteer from 'puppeteer';
import Phone from '../models/phone.js'

// sleep 函数
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

const getInfo = async (phoneNum) => {
    let args = []
    const proxy = 'http://127.0.0.1:9876'
    if (proxy) {
        console.log('使用代理', proxy)
        args.push(`--proxy-server=${proxy}`);
    }
    console.log(args)
    const browser = await puppeteer.launch({
        // headless: "new", // 有浏览器界面启动
        headless: false, // 无浏览器界面启动
        // devtools: true, // 启用 devtools
        args: args

    });
    const page = await browser.newPage();

    // 请替换成您需要访问的 URL
    const url = 'https://www.paypal.com/signin';

    await page.goto(url);
    await sleep(20*1000); // 使用 sleep 函数替代弃用的 page.waitFor

    // 这里添加您的页面操作代码...
    // await sleep(5 * 1000)
    await page.waitForXPath('//input[@class="hasHelp  validateEmpty   "]',{timeout:100000})
    const i = await page.$x('//input[@class="hasHelp  validateEmpty   "]')
    if (i) {
        console.log('存在')
        //输入手机号
        await i[0].type(phoneNum)
        await sleep(1 * 1000)
        //点击下一步
        const next = await page.$x('//button[@id="btnNext"]')
        await next[0].click()
        await sleep(10 * 1000)
        const textToFind = '您还未验证的手机号码。现在先使用邮箱地址。';
        const xpathExpression = `//*[contains(text(), '${textToFind}')]`;
        // await page.waitForXPath(xpathExpression, { timeout: 1000 * 10 });
        const elements = await page.$x(xpathExpression);
        if (elements.length > 0) {
            console.log('手机号未验证',textToFind)
            Phone.updatePhone(phoneNum,false,true)
        }else{
            console.log('手机号已注册')
            Phone.updatePhone(phoneNum,true,true)
        }
            
    }
    // await sleep(10000 * 1000);

    await browser.close(); // 关闭浏览器实例
};

// getInfo(); // 调用函数


export default getInfo
