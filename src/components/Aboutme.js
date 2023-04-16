const birthdatestring = '1988-05-11'

const birthdate = new Date(birthdatestring)

let agediffmonths = Date.now() - birthdate.getTime()

let agedate = new Date(agediffmonths)
let age = Math.abs(agedate.getUTCFullYear() - 1970)

new function aboutMe() {
    return(
            <>Hello, my name is Elmer Herrera I am new to coding, but have been enjoying this new experience. I hope to learn more in the future and develop some cool things.</>
    );
}