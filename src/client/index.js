import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { performAction } from './js/weatherAPI'
import { getWeatherData } from './js/weatherAPI'
import { postData } from './js/weatherAPI'
import { dynamicUiUpdate } from './js/weatherAPI'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    performAction,
    getWeatherData,
    postData,
    dynamicUiUpdate
}