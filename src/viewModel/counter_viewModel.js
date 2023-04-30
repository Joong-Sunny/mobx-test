import { observable } from 'mobx';
import counterStore from '../stores/counter_store';

const counterViewModel = observable({
  get count() {
    return counterStore.count;
  },
  incrementCount(input) {
    counterStore.count += input
  },
	counterHandelr(){}
});

export default counterViewModel;
