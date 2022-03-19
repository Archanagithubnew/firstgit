export const waittimenew = async (time) => {
    await browser.waitUntil( async ()=>(await browser.getTitle())==='Sign Up for a Free Trial | Sauce Labs',{timeout: time
     })}