import { waittimenew } from '../utils/Utilities';

class Mypage1{

    async  LoginPage(){
           await browser.url("https://saucelabs.com/sign-up/register");
          const browsertitle = await browser.getTitle();
          console.log(browsertitle)
          await browser.maximizeWindow()
          await waittimenew(2000)      
      }
  }export default new Mypage1();