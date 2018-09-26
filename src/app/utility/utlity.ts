export const utility = {
    isUnDefinedNullEmpty: (value) => {
        if (value === undefined || value === null) {
            return true;
        }
        if (typeof value === 'string') {
            if (value === null || value === '') {
                return true;
            }
        }
    }, isDefinedNotNullEmpty: (value) => {
        let returvalue = true;
        if (value === undefined || value === null) {
            returvalue = false;
        }
        if (typeof value === 'string') {
            if (value === null || value === '') {
                returvalue = false;
            }
        }
        return returvalue;
    },
    logSubscription: (obs: any, logMsg: string) => {
        console.log(`Subscription:${logMsg}`);
    }
}