export import firebase = require("firebase");

export abstract class FirebaseApp implements firebase.app.App
{
    name: string;
    options: Object;

    public abstract auth(): firebase.auth.Auth;
    public abstract database(): firebase.database.Database;
    public abstract delete(): firebase.Promise<any>;
    public abstract messaging(): firebase.messaging.Messaging;
    public abstract storage(): firebase.storage.Storage;
}