import {Given , When , Then} from '@cucumber/cucumber';
import Basepage from '../../src/pages/Mypage1'
import Signup from '../../src/pages/Signup.page'
import testdata from '../resources/Testdata.json'


    Given(/^I am on the Signup page$/, async() =>{
       await Basepage.LoginPage()
       await browser.pause(3000)

    });
  
    Then(/^I enter mail , username and password in signup page$/, async()=> {
       await Signup.enterdetails(testdata.email,testdata.username,testdata.password)
       await browser.pause(3000)
    });
  
    Then(/^uer should be ableto select checkbox$/, async () => {

      await Signup.clickcheckbox()

   
  });