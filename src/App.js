import { observer } from "mobx-react-lite";
import {useStore} from "./store/index"

function App() {
  const rootStore = useStore()
  console.log(rootStore);
  // 注意：解构赋值到store实例对象就可以了    防止破坏响应式
  // 用到哪个store就解构哪个store
  const {counterStore} = rootStore
  return (
    <div className="App">
      <p>{counterStore.count}</p>
      <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}

export default observer(App);