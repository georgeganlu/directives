
import dragTable from './table/drag';

export default (Vue) => {
    Vue.directive(dragTable.name, dragTable);
}