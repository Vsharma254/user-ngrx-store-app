import { Injectable } from "@angular/core";
import * as myModels from "./../store/candidate/model";
import { appConfig } from "../config/config";
@Injectable()
export class LocalStorageService {
  constructor() {}
  public setUserToken(token: myModels.Token) {
    localStorage.setItem(appConfig.ukseetokenKey, token.token);
  }
  public getUserToken() {
    return localStorage.getItem(appConfig.ukseetokenKey);
  }
  public getUser() {
    return localStorage.getItem(appConfig.ukseeguidKey);
  }
  public getValueByKey(key: string) {
    return localStorage.getItem(key);
  }
  public clearUKSEEData() {
    localStorage.removeItem(appConfig.ukseetokenKey);
    localStorage.removeItem(appConfig.ukseeguidKey);
    localStorage.removeItem(appConfig.expirationKey);    
  }
  public setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
    this.setStorage(appConfig.expirationKey);
  }
  public checkExpirationStorage() {
      const key = appConfig.expirationKey;
    let now = Date.now(); //epoch time, lets deal only with integer
    // set expiration for storage
    let expiresIn = +localStorage.getItem(key + "_expiresIn");
    if (expiresIn === undefined || expiresIn === null) {
      return "";
    }
    if (expiresIn < now) {
      // Expired
      return false;
    } else {
        this.setStorage(appConfig.expirationKey);
      return true;
    }
  }
  public setStorage(key) {
      let expires = appConfig.expireTimeinMin *60;
    if (expires === undefined || expires === null) {
      expires = 24 * 60 * 60; // default: seconds for 1 day
    } else {
      expires = Math.abs(expires); //make sure it's positive
    }
    var now = Date.now(); //millisecs since epoch time, lets deal only with integer
    var schedule = `${now + expires * 1000}`;
    try {
      localStorage.setItem(key + "_expiresIn", schedule);
    } catch (e) {
      console.log(
        "setStorage: Error setting key [" +
          key +
          "] in localStorage: " +
          JSON.stringify(e)
      );
      return false;
    }
    return true;
  }
}
