import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFireMessaging} from '@angular/fire/messaging';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {

    currentMessage = new BehaviorSubject(null);

    constructor(private angularFireMessaging: AngularFireMessaging) {
        this.angularFireMessaging.messaging.subscribe(
            (_messaging) => {
                debugger
                _messaging.onMessage = _messaging.onMessage.bind(_messaging);
                _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        )
    }

    requestPermission() {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {
                console.log(token);
            },
            (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
    }

    receiveMessage() {
        this.angularFireMessaging.messages.subscribe(
            (payload) => {
               debugger;
                console.log("new message received. ", payload);
                this.currentMessage.next(payload);
            });
    }
}
