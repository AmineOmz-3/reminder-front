const reminder = (action) => {

    const { text, dueDate } = action

    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id)
    return (reminders)
}

const reminders = (state = [], action) => {
    let reminders = null

    switch (action.type) {
        case 'ADD_REMINDER':
            reminders = [...state, reminder(action)]
            return (reminders)
        case 'DELETE_REMINDER':
            reminders = removeById(state, action.id)
            return (reminders)
        case 'CLEAR_REMINDERS':
            reminders = []
            return (reminders)
        default:
            return (state)
    }
}

export default reminders