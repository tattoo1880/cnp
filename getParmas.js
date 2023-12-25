import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {URLSearchParams} from 'url';

async function getP() {
    const cookies = {
        'enforce_policy': 'gopay',
        'cookie_check': 'yes',
        'd_id': '9bbdbf2cfb464efba58b89eaeb87a0d71703253355372',
        'nsid': 's%3A-ofVTh2lE7hQjzLNGXI2_FuJ6LmYo0Co.HDjao1oF1Y1G359YKO%2BVCi4RLzwmJFfWBZlCgciJYAE',
        'TLTSID': '23689935895036888716125580691073',
        'TLTDID': '63013829081588356910698851344931',
        'KHcl0EuY7AKSMgfvHl7J5E7hPtK': 'u6ogjspxJeWFajMtGUyxftFJY9WKr-yQ9kVoAw11CjH2tkuWmGjnTFvlgUfW1BhKjxOZSY-KSTTQ6BDK',
        'sc_f': 'U7zblkPGn9J6SVaahtudq-YkY2u4M80tkeho1TvyEomwnDZXutHc15WAJEsbQLJ2-7TKP9UYuihaZNsHCnTIF3Z07x2K26uO71gHnm',
        'cookie_prefs': 'T%3D0%2CP%3D1%2CF%3D1%2Ctype%3Dimplicit',
        'ddi': '4ATbueLhUm1XI_xtRWt-tsLgqkTSR5q4egGUB9RTAuhvpyf-IjG2NCjLZTJERoFgc5fQJDX415AQAFyOxS-dcd0XNFo9OxSR1eXPwdL4m_T9A0i-',
        'tsrce': 'unifiedloginnodeweb',
        'x-pp-s': 'eyJ0IjoiMTcwMzI2MDM0ODEyNiIsImwiOiIwIiwibSI6IjAifQ',
        'l7_az': 'dcg16.slc',
        'ts_c': 'vr%3D91cfab4018c0a7a400c18d55fe40d2b9%26vt%3D973bbef718c0a550c86bf956fe1c64b1',
        'ts': 'vreXpYrS%3D1798039033%26vteXpYrS%3D1703346433%26vr%3D91cfab4018c0a7a400c18d55fe40d2b9%26vt%3D973bbef718c0a550c86bf956fe1c64b1%26vtyp%3Dreturn',
    }
    const headers = {
        'authority': 'www.paypal.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-full-version': '"120.0.6099.71"',
        'sec-ch-ua-full-version-list': '"Not_A Brand";v="8.0.0.0", "Chromium";v="120.0.6099.71", "Google Chrome";v="120.0.6099.71"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"macOS"',
        'sec-ch-ua-platform-version': '"13.6.1"',
        'sec-ch-ua-wow64': '?0',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
    // 将 cookies 对象转换为字符串
    const cookieString = Object.entries(cookies).map(([key, value]) => `${key}=${value}`).join('; ');

    const response = await fetch('https://www.paypal.com/signin', {
        method: 'GET',
        headers: { ...headers, 'Cookie': cookieString },
        // ssl: false 无法直接在 node-fetch 中使用，您可能需要配置 node.js 的全局 HTTPS 代理
    });

    const text = await response.text();

    // 解析 HTML
    const $ = cheerio.load(text);
    const form = $('form').first();
    const fnSessionIdMatch = /fnSessionId: '([^']+)'/.exec(text);
    const fnSessionId = fnSessionIdMatch ? fnSessionIdMatch[1] : null;

    const action = form.attr('action');
    const method = form.attr('method');
    const formdata = {};
    form.find('input').each((i, el) => {
        formdata[$(el).attr('name')] = $(el).attr('value');
    });

    // 获取 response 中的 cookies
    const responseCookies = response.headers.get('set-cookie');
    // 对 responseCookies 进行处理...

    return { action, method, formdata, responseCookies, fnSessionId };
}

async function postP() {
    const { action, method, formdata, responseCookies, fnSessionId } = await getP();
    // ... 对 formdata 进行处理 ...

    const formdataEncoded = new URLSearchParams(formdata).toString();

    const headers = {
        // 定义 headers ...

        'authority': 'www.paypal.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-full-version': '"120.0.6099.71"',
        'sec-ch-ua-full-version-list': '"Not_A Brand";v="8.0.0.0", "Chromium";v="120.0.6099.71", "Google Chrome";v="120.0.6099.71"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"macOS"',
        'sec-ch-ua-platform-version': '"13.6.1"',
        'sec-ch-ua-wow64': '?0',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cookie': responseCookies  // 使用获取的 cookies
    };

    const response = await fetch('https://www.paypal.com/signin', {
        method: 'POST',
        headers: headers,
        body: formdataEncoded
    });

    const responseText = await response.text();

    const $ = cheerio.load(responseText);
    const p = $('p.notification.notification-warning');
    if (p.length > 0) {
        console.log(p.text(), '未注册');
        return 1;
    } else {
        console.log('已注册');
        return 0;
    }
}

async function main() {
    const result = await postP();
    console.log(result);
}

main();
