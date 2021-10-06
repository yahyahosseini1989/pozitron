// common
import BtnSave from './common/buttons/BtnSave.vue'
import BtnCancel from './common/buttons/BtnCancel.vue'
// import BtnBack from './common/buttons/BtnBack.vue'
// import BtnNew from './common/buttons/BtnNew.vue'
// import BtnEdit from './common/buttons/BtnEdit.vue'
// import BtnDelete from './common/buttons/BtnDelete.vue'
// import BtnDefault from './common/buttons/BtnDefault.vue'
// import BtnSearch from './common/buttons/BtnSearch.vue'
import BySheet from './common/BySheet'
import ByText from './common/ByText'
import ByTextarea from './common/ByTextarea'
import ByCombo from './common/ByCombo'
import BySwitch from './common/BySwitch'
import ByCheckbox from './common/ByCheckbox'

// specials
import BySidebar from './BySidebar'


export default {
  install (Vue) {
    // common
    Vue.component('btn-save', BtnSave)
    Vue.component('btn-cancel', BtnCancel)
    Vue.component('by-sheet', BySheet)
    Vue.component('by-text', ByText)
    Vue.component('by-textarea', ByTextarea)
    Vue.component('by-combo', ByCombo)
    Vue.component('by-switch', BySwitch)
    Vue.component('by-checkbox', ByCheckbox)

    // specials
    Vue.component('by-sidebar', BySidebar)

  }
}
