const birthdatestring = '1988-05-11'

const birthdate = new Date(birthdatestring)

let agediffmonths = Date.now() - birthdate.getTime()

let agedate = new Date(agediffmonths)
let age = Math.abs(agedate.getUTCFullYear() - 1970)

new function aboutMe() {
    return(
            <></>
    );
}