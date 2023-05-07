// 1.导入
import { counterStore } from "./store/counter.Store";
// 2.导入中间件连接mobx  react  完成响应式变化
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div className="App">
      {/* 把store中的count渲染一下 */}
      {/* 点击事件触发action函数修改count值 */}
      <p>{counterStore.count}</p>
      <button onClick={counterStore.addCount}>
        +
      </button>
      {/* 使用计算属性 */}
      <div>
        {counterStore.filterList.join('-')}
      </div>
      <button onClick={counterStore.addList}>addList</button>
    </div>
  );
}

// 3.包裹App  实现响应式
export default observer(App);