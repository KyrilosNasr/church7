const ApiUrls = {
  ACCOUNT: {
    ACCOUNT: "api/Account",
    LOGIN: "api/Account/login",
    REGISTER: "api/Account/register",
    CHECK_EMAIL: "api/account/emailexists"
  },
  LIVE: {
    LIVE: "api/live",
  },
  IMAGE_ASSETS: {
    MAIN: "api/ImageAssets"
  },
  FATHERS: {
    MAIN: "api/Fathers",
    SECTION: "api/Fathers/GetSection",
    UPDATE_SECTION: "api/Fathers/UpdateSection"
  },
  MASSES: {
    GET_ALL: "api/Masses",
    GET_BY_ID: "api/Masses/GetById",
    UPDATE_SEC: "api/Masses/UpdateSection",
    CREATE_OR_UPDATE: "api/Masses/CreateOrUpdate"
  },
  ABOUT_CHURCH: {
    MAIN: "api/AboutChurch"
  },
  CHURCH_SERVICES: {
    MAIN: "api/ChurchService",
    GET_FOR_EDIT: "api/ChurchService/GetForEdit",
    GET_BY_ID: "api/ChurchService/GetById",
    GET_NAMES: "api/ChurchService/getNames"
  },
  SUNDAY_MEETINGS: {
    MAIN: "api/SundayMeeting"
  },
  CONFESSIONS: {
    MAIN: "api/Confession"
  },
  GALLERY: {
    MAIN: "api/Gallery",
    UPDATE_SECTION: "api/Gallery/UpdateSection",
    GET_SECTION: "api/Gallery/GetSection",
    GET_BY_ID: "api/Gallery/GetById"
  },
  SECTIONS: {
    MAIN: "api/Sections",
    GET_BY_ID: "api/Sections/GetById"
  },
  ADS: {
    MAIN: "api/AdsSection",
    GET_BY_ID: "api/AdsSection/GetById"
  }

}

export { ApiUrls }
