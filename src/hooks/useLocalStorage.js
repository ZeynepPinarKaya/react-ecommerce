function useLocalStorage() {
  const setValue = (key, val) => localStorage.setItem(key, JSON.stringify(val))
  const getValue = (key) => JSON.parse(localStorage.getItem(key))

  return {
    setValue,
    getValue
  }
}

export default useLocalStorage