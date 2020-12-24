const state = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
}

const mutations = {
  archiveTask(state, id) {
    state.tasks.find(task => task.id === id).state = 'TASK_ARCHIVED'
  },
  pinTask(state, id) {
    state.tasks.find(task => task.id === id).state = 'TASK_PINNED'
  }
}

const actions = {
  ARCHIVE_TASK({ commit }, id) {
    commit('archiveTask', id)
  },
  PIN_TASK({ commit }, id) {
    commit('pinTask', id)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}