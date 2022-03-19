
class Signup {
//access locators
get username(){ return $('#username')}
get password(){ return $('#password')}
get email(){return $('#email')}
get checkbox(){return $('#subscription')}

//page actions
async enterdetails(email,username,password){
await (await this.email).setValue(email)
await (await this.username).setValue(username)
await (await this.password).setValue(password)
}
async clickcheckbox(){
await (await this.checkbox).click()
}


}export default new Signup()