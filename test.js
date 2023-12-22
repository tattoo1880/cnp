import axios from 'axios';

const response = await axios.post(
  'https://www.paypal.com/signin',
  'isSafariAutofill=false&_csrf=9NjlmjyjbSXWmZlY9+UPv6ugUo//auC87/cyo=%3D&locale.x=zh_CN&processSignin=main&fn_sync_data=%257B%2522SC_VERSION%2522%253A%25222.0.1%2522%252C%2522syncStatus%2522%253A%2522data%2522%252C%2522f%2522%253A%25221df1941bd649408895ef951acf68201e%2522%252C%2522s%2522%253A%2522UNIFIED_LOGIN_INPUT_EMAIL%2522%252C%2522chk%2522%253A%257B%2522ts%2522%253A1703245687557%252C%2522eteid%2522%253A%255B5580523917%252C4396151780%252C1047867913%252C-9360093409%252C-3399860895%252C14937107795%252C-11268837189%252C-422378344%255D%252C%2522tts%2522%253A7945%257D%252C%2522dc%2522%253A%2522%257B%255C%2522screen%255C%2522%253A%257B%255C%2522colorDepth%255C%2522%253A24%252C%255C%2522pixelDepth%255C%2522%253A24%252C%255C%2522height%255C%2522%253A900%252C%255C%2522width%255C%2522%253A1440%252C%255C%2522availHeight%255C%2522%253A814%252C%255C%2522availWidth%255C%2522%253A1440%257D%252C%255C%2522ua%255C%2522%253A%255C%2522Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_15_7)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F120.0.0.0%2520Safari%252F537.36%255C%2522%257D%2522%252C%2522d%2522%253A%257B%2522rDT%2522%253A%25225901%252C5466%252C5138%253A52022%252C51557%252C51231%253A31543%252C31049%252C30747%253A46925%252C46406%252C46114%253A11068%252C10541%252C10256%253A16200%252C15656%252C15379%253A11084%252C10527%252C10251%253A41824%252C41263%252C40992%253A26460%252C25890%252C25623%253A16217%252C15642%252C15376%253A11098%252C10517%252C10255%253A36717%252C36314%252C39041%253A11100%252C10699%252C10252%253A31589%252C31190%252C30746%253A11093%252C10697%252C10255%253A52072%252C51680%252C51237%253A11082%252C10696%252C10254%253A46936%252C46556%252C46116%253A26421%252C26062%252C25625%253A16155%252C15816%252C15374%253A18237%252C27%2522%257D%257D&intent=signin&ads-client-context=signin&isValidCtxId=&coBrand=cn&signUpEndPoint=%2Fwebapps%2Fmpp%2Faccount-selection&usePassKey=true&requestUrl=%2Fsignin&forcePhonePasswordOptIn=&captchaCode=&login_phone=18622534594&initialSplitLoginContext=inputEmail&isTpdOnboarded=&captcha=&splitLoginContext=inputPhone&allowPasskeyAutofill=true&phoneCode=CN%20%2B86&_sessionID=null',
  {
    headers: {
      'authority': 'www.paypal.com',
      'accept': 'application/json',
      'accept-language': 'zh-CN,zh;q=0.9',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded',
      'cookie': 'enforce_policy=gopay; LANG=zh_CN%3BCN; nsid=s%3A50p0w4mfmbk6bUD24cVm2fzmwfXrxu4M.9VOl7dlt6Hxccdx%2BV4LHoggAzUxUMWIc7omeB3u03xo; TLTSID=28648994751130977076542901193666; TLTDID=18154333012558982207405710453065; cookie_check=yes; d_id=138764baa4534032b3bc105f2c4718e41703227124413; sc_f=U7zblkPGn9J6SVaahtudq-YkY2u4M80tkeho1TvyEomwnDZXutHc15WAJEsbQLJ2-7TKP9UYuihaZNsHCnTIF3Z07x2K26uO71gHnm; KHcl0EuY7AKSMgfvHl7J5E7hPtK=LGPe6zXHdiMelGuiswOOmxqRKP-d5or3iKNpWZW_2_VPZdoVF1fo8bOpslP-O1Db41l5mwzB0ooSVMwJ; cookie_prefs=T%3D0%2CP%3D1%2CF%3D1%2Ctype%3Dimplicit; fn_dt=ffa4ebfff9484fbd86bcc001fb18a105; l7_az=dcg02.phx; ts_c=vr%3D63cc3f0718c0a551b07606c1feaeb855%26vt%3D9154965c18c0a62509020420fc07cf21; ddi=awBcEr6N_JQatNYEvRN8kJ-mWPCV35DsyyBuv_wrS8HpAspfBuLT4rNzQopG6DXMCpC00MM8jugAFNlWmuU1if0ZPq08XV1HNLlnWeUtfLTJqDpf; tcs=main%3Aunifiedlogin%3Asplitlogin%3A%3Aemail%7CbtnNext; tsrce=unifiedloginnodeweb; x-pp-s=eyJ0IjoiMTcwMzI0NTc4MDEyNyIsImwiOiIwIiwibSI6IjAifQ; ts=vreXpYrS%3D1797940180%26vteXpYrS%3D1703247580%26vr%3D63cc3f0718c0a551b07606c1feaeb855%26vt%3D9154965c18c0a62509020420fc07cf21%26vtyp%3Dreturn',
      'origin': 'https://www.paypal.com',
      'pragma': 'no-cache',
      'referer': 'https://www.paypal.com/signin',
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
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'x-requested-with': 'XMLHttpRequest'
    }
  }
);


console.log(response.data);