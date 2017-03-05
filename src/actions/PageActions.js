const PRESS_BUT = 'PRESS_BUT'

export function pressBtn(todo) {
  return {
    type: PRESS_BUT,
    payload: todo
  }
}