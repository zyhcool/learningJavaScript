interface ISubjectData {
    [subject: string]: string[];
}

abstract class Subject {
    data: ISubjectData;
    abstract addListen(subject: string, key: string):void;
    abstract removeListen(subject:string,key:string):void;
    abstract publish(subject:string):void;
}

abstract class Observer {
    private data: string[];
    private key: string;
}

class ConcreteSubject extends Subject {
    constructor(){
        super();
        this.data = {};
    }
    addListen(subject: string,key: string){
        if(!this.data[subject]){
            this.data[subject] = [];
        }
        this.data[subject].push(key);
    }
    removeListen(subject: string,key: string){
        if(!this.data[subject]){
            return;
        }
        this.data[subject].splice(this.data[subject].indexOf(key),1);
    }
    publish(subject: string){
        if(!this.data[subject]){
            return;
        }
        this.data[subject].forEach((item,i)=>{
            console.log(`${i}: ${item}`);
        })
    }
}