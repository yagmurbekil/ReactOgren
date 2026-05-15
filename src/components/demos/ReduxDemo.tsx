import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Redux Setup (Sadece bu demo için)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

const { increment, decrement, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

function CounterApp() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 p-6 bg-slate-950 rounded-full border-4 border-purple-500 w-32 h-32 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        <span className="text-4xl font-black text-white">{count}</span>
      </div>
      <div className="flex gap-4">
        <button 
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700"
        >
          -1
        </button>
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
        >
          +5 Ekle
        </button>
        <button 
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-brand-blue hover:bg-brand-blue/90 text-slate-900 font-bold rounded-lg transition-colors"
        >
          +1
        </button>
      </div>
      <p className="mt-8 text-sm text-slate-400 max-w-sm text-center">
        Yukarıdaki butonlara tıklandığında aksiyonlar (actions) tetiklenir (dispatch). Reducer state'i günceller ve bileşenler (useSelector) otomatik olarak yeniden çizilir (re-render).
      </p>
    </div>
  );
}

export function ReduxDemo() {
  return (
    <Provider store={store}>
      <div className="p-8 bg-slate-900/50 rounded-xl border border-slate-800">
        <CounterApp />
      </div>
    </Provider>
  );
}