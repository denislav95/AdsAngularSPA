'use strict';

app.factory('notifyService', [
    function () {
        return {
            showInfo: function (msg) {
                noty({
                    text: msg,
                    type: 'info',
                    layout: 'topCenter',
                    timeout: 1000
                });
            },
            showError: function (msg, serverError) {
                let errors = [];

                if (serverError && serverError.error_description) {
                    errors.push(serverError.error_description);
                }

                if (serverError && serverError.modeState) {
                    let modelStateErrors = serverError.modeState;

                    for (let propertyName in modelStateErrors) {
                        let errorMessages = modelStateErrors[propertyName];
                        let trimmedName = propertyName.substr(propertyName.indexOf('.') + 1);

                        for (let i = 0; i < errorMessages.length; i++) {
                            let currentError = errorMessages[i];
                            errors.push(trimmedName + ' - ' + currentError);
                        }
                    }
                }

                if(errors.length > 0){
                    msg = msg + ':<br>' + errors.join('<br>');
                }

                noty({
                    text: msg,
                    type: 'error',
                    layout: 'topCenter',
                    timeout: 5000
                });
            }
        }
    }
]);