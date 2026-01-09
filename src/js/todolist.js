import { uid as UID } from "uid";
import { reactive } from "vue";



class TodoItem {
       static uidLength = 7;
       constructor({
              uid,
              name,
              description,
              startedAt,
              endedAt,
              createdAt,
              updatedAt,
              doneAt,
              isDone = false
       }) {
              this.uid = uid ?? UID(TodoItem.uidLength);
              this.name = name;
              this.description = description;
              this.startedAt = startedAt ? new Date(startedAt) : null;
              this.endedAt = endedAt ? new Date(endedAt) : null;
              this.createdAt = new Date(createdAt ?? new Date());
              this.updatedAt = new Date(updatedAt ?? new Date());
              this.doneAt = isDone ? new Date(doneAt ?? new Date()) : null;
              this.isDone = isDone
       }
}

class TodoStorage {
       static storageName = "TodoStorage";
       constructor() {
              this.theStorage = reactive({
                     /**
                      * @type {InstanceType<typeof TodoItem>[]}
                      */
                     items: []
              });
              this.init();
       }

       init() {
              if (!this.theLocalStorage) {
                     this.resetTheLocalStorage();
              }

              let parsed = null;
              try {
                     parsed = JSON.parse(this.theLocalStorage);

                     if (!parsed.items || parsed.storageName) {
                            this.resetTheLocalStorage();
                            return;
                     }

                     for (let index = 0; index < parsed.items.length; index++) {
                            parsed.items[index] = new TodoItem(parsed.items[index]);
                     }
                     this.theStorage = reactive(parsed);

                     return;
              } catch {
                     return this.resetTheLocalStorage();
              }

       }

       get theLocalStorage() {
              return localStorage.getItem(TodoStorage.storageName);
       }

       set theLocalStorage(strData) {
              localStorage.setItem(TodoStorage.storageName, strData)
       }

       resetTheLocalStorage() {
              this.theStorage.items = [];
              this.theLocalStorage = JSON.stringify({
                     storageName: this.storageName,
                     items: []
              })
       }

       save() {
              this.theLocalStorage = JSON.stringify(this.theStorage);
       }

       createOne(todoItem) {
              this.theStorage.items.push(todoItem);
              this.save();
       }


       deleteOne(uid) {
              this.theStorage.items = this.theStorage.items.filter(todo => todo.uid !== uid);
              this.save();
       }

       updatedOne(todoItem) {
              this.theStorage.items = this.theStorage.items.map(todo => {
                     if (todo.uid !== todoItem.uid) return todo;
                     return todoItem;
              });
       }

       deleteMany(...todoItems) {
              this.theStorage.items = this.theStorage.items.filter(todo => {
                     const toDelete = todoItems.pop();
                     if (todo.uid === toDelete.uid) return false;
                     return true;
              })
       }


       toggleDone(uid) {
              this.theStorage.items = this.theStorage.items.map(todo => {
                     if (todo.uid === uid) return todo;
                     todo.updatedAt = new Date();
                     todo.isDone = !todo.isDone;
                     return todo;
              })
       }


}

class TodoApp extends TodoStorage {

}



export const todoApp = new TodoApp();
export { TodoItem };




