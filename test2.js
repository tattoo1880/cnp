import axios from 'axios';

const response = await axios.get('https://www.paypal.com/signin', {
  headers: {
    'authority': 'www.paypal.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'cookie': 'enforce_policy=gopay; cookie_check=yes; d_id=9bbdbf2cfb464efba58b89eaeb87a0d71703253355372; LANG=zh_CN%3BCN; nsid=s%3A-ofVTh2lE7hQjzLNGXI2_FuJ6LmYo0Co.HDjao1oF1Y1G359YKO%2BVCi4RLzwmJFfWBZlCgciJYAE; l7_az=dcg14.slc; ts_c=vr%3D91cfab4018c0a7a400c18d55fe40d2b9%26vt%3D91cfab4018c0a7a400c18d55fe40d2b8; TLTSID=23689935895036888716125580691073; TLTDID=63013829081588356910698851344931; tsrce=cspreportnodeweb; ts=vreXpYrS%3D1797947757%26vteXpYrS%3D1703255157%26vr%3D91cfab4018c0a7a400c18d55fe40d2b9%26vt%3D91cfab4018c0a7a400c18d55fe40d2b8%26vtyp%3Dnew; x-pp-s=eyJ0IjoiMTcwMzI1MzM1NzE0NyIsImwiOiIwIiwibSI6IjAifQ',
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
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});


console.log(response.data);