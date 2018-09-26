export interface NotificationUI {
  // type: 'success',
  // title: 'This is just a title',
  // content: 'This is just some content',
  // timeOut: 5000,
  // showProgressBar: true,
  // pauseOnHover: true,
  // clickToClose: true,
  // animate: 'fromRight'
  type: string;
  title: string;
  content: string;
  timeOut: number;
  showProgressBar: true;
  pauseOnHover: true;
  clickToClose: true;
  animate: "fromRight";
}
export const notificInit :NotificationUI ={
  type: undefined,
  title: 'This is just a title',
  content: 'This is just some content',
  timeOut: 5000,
  showProgressBar: true,
  pauseOnHover: true,
  clickToClose: true,
  animate: 'fromRight'
}
export interface UIState {
  notification: NotificationUI;
  progressBar: ProgreeBar;
  detailsTab:string
}
export interface ProgreeBar {
  mainProgress: boolean;
  masterProgressBar: boolean;
  changePriorityPBar: boolean;
}
export const setInit: ProgreeBar = {
  masterProgressBar: false,
  mainProgress: false,
  changePriorityPBar: false
};

export interface ErrorMgs{
  errorMsg:string
}