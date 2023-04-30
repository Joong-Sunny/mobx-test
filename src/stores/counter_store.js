import { observable } from 'mobx';

const counterStore = observable({
  count: 0,
});

export default counterStore;