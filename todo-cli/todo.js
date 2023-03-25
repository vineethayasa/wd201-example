const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    arr = []
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday) {
        arr.push(all[i])
      }
    }
    return arr
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    arr = []
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == today) {
        arr.push(all[i])
      }
    }
    return arr
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    arr = []
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomorrow) {
        arr.push(all[i])
      }
    }
    return arr
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    displayablestring = ''
    for (let i = 0; i < list.length; i++) {
      if (list[i].dueDate == today) {
        if (list[i].completed == true) {
          displayablestring += '[x]' + ' ' + list[i].title + ' ' + '\n'
        } else {
          displayablestring += '[ ]' + ' ' + list[i].title + ' ' + '\n'
        }
      } else {
        if (list[i].completed == true) {
          displayablestring +=
            '[x]' + ' ' + list[i].title + ' ' + list[i].dueDate + '\n'
        } else {
          displayablestring +=
            '[ ]' + ' ' + list[i].title + ' ' + list[i].dueDate + '\n'
        }
      }
    }
    return displayablestring.substring(0, displayablestring.length - 1)
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}

const todos = todoList()

const formattedDate = (d) => {
  return d.toISOString().split('T')[0]
}

const dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log('My Todo-list\n')

console.log('Overdue')
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log('\n')

console.log('Due Today')
const itemsDueToday = todos.dueToday()
const formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log('\n')

console.log('Due Later')
const itemsDueLater = todos.dueLater()
const formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log('\n\n')

module.exports = todoList
