

export interface ResolveEmit {
    // Returns this if modal resolved with yes or no
    resolved?: boolean;
    // If the modal was closed in some other way this is removed
    closedWithOutResolving?: string;
}
export interface ConfirmEmit {
    close?: boolean;
    message?: string;
    title?: string;
    resolve$?: any;
    override?: ConfirmSettings;
}
export interface ConfirmSettings {
    overlay?: boolean; // Default: true
    overlayClickToClose?: boolean; // Default: true
    showCloseButton?: boolean; // Default: true
    confirmText?: string; // Default: 'Yes'
    declineText?: string; // Default: 'No'
}
export const settings: ConfirmSettings | any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    confirmText: 'Yes',
    declineText: 'No'
  };